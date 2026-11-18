import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { promises as fs } from 'fs';
import crypto from 'crypto';
import os from 'os';
import path from 'path';
import { CHAT_SYSTEM } from '@/lib/chat-knowledge';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Site chat assistant (test phase, 18.11.2026). Key + switches live in .env.local on the server:
//   ANTHROPIC_API_KEY  (never in the repo, which is public)
//   CHAT_ENABLED=1     kill switch: anything else -> 503
//   CHAT_MODEL         default claude-opus-5-5
const MODEL = process.env.CHAT_MODEL || 'claude-opus-5-5';
const LOG_DIR = process.env.CHAT_LOG_DIR || path.join(os.homedir(), 'chat-logs');

const LIMITS = {
  msgChars: 1000,        // one user message
  historyMsgs: 20,       // messages sent per request (user + assistant)
  totalChars: 14000,     // whole history
  perIp10min: 15,
  perIpDay: 60,
  globalDay: 400,        // hard daily ceiling across all visitors
  maxTokens: 2000,
};

type Msg = { role: 'user' | 'assistant'; content: string };

// In-memory rate limits (single pm2 process). Reset on restart, which is fine for a cap.
const ipHits = new Map<string, number[]>();
let dayKey = '';
let dayCount = 0;

function today() {
  return new Date().toISOString().slice(0, 10);
}

function rateLimited(ip: string): string | null {
  const now = Date.now();
  const d = today();
  if (d !== dayKey) { dayKey = d; dayCount = 0; ipHits.clear(); }
  if (dayCount >= LIMITS.globalDay) return 'global';
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < 24 * 3600e3);
  if (hits.length >= LIMITS.perIpDay) return 'day';
  if (hits.filter((t) => now - t < 10 * 60e3).length >= LIMITS.perIp10min) return '10min';
  hits.push(now);
  ipHits.set(ip, hits);
  dayCount++;
  return null;
}

function clientIp(req: NextRequest) {
  return (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';
}

function validate(body: unknown): Msg[] | null {
  if (!body || typeof body !== 'object') return null;
  const msgs = (body as { messages?: unknown }).messages;
  if (!Array.isArray(msgs) || msgs.length === 0 || msgs.length > LIMITS.historyMsgs) return null;
  let total = 0;
  const out: Msg[] = [];
  for (let i = 0; i < msgs.length; i++) {
    const m = msgs[i] as Msg;
    const want = i % 2 === 0 ? 'user' : 'assistant';
    if (!m || m.role !== want || typeof m.content !== 'string') return null;
    const c = m.content.trim();
    if (!c || (m.role === 'user' && c.length > LIMITS.msgChars)) return null;
    total += c.length;
    out.push({ role: m.role, content: c.slice(0, 4000) });
  }
  if (out[out.length - 1].role !== 'user' || total > LIMITS.totalChars) return null;
  return out;
}

async function logTurn(rec: Record<string, unknown>) {
  try {
    await fs.mkdir(LOG_DIR, { recursive: true });
    await fs.appendFile(path.join(LOG_DIR, `${today()}.jsonl`), JSON.stringify(rec) + '\n', 'utf8');
  } catch {
    /* logging must never break the chat */
  }
}

const FALLBACK_IS = 'Því miður get ég ekki svarað núna. Hafðu endilega samband við Daða í síma 848-6755 eða á dadi@tolvuhvislarinn.is.';

export async function POST(req: NextRequest) {
  if (process.env.CHAT_ENABLED !== '1' || !process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'disabled', reply: FALLBACK_IS }, { status: 503 });
  }
  const ip = clientIp(req);
  const limit = rateLimited(ip);
  if (limit) {
    return NextResponse.json(
      { error: 'rate_limited', reply: 'Hámarki spurninga er náð í bili. Hringdu endilega í 848-6755 eða sendu línu á dadi@tolvuhvislarinn.is.' },
      { status: 429 },
    );
  }

  let messages: Msg[] | null = null;
  try { messages = validate(await req.json()); } catch { /* bad json */ }
  if (!messages) return NextResponse.json({ error: 'bad_request' }, { status: 400 });

  const session = String(req.headers.get('x-chat-session') || '').slice(0, 40);
  const ipHash = crypto.createHash('sha256').update(ip + dayKey).digest('hex').slice(0, 12);
  const started = Date.now();

  try {
    const client = new Anthropic();
    const res = await client.messages.create({
      model: MODEL,
      max_tokens: LIMITS.maxTokens,
      output_config: { effort: 'low' },
      system: [
        { type: 'text', text: CHAT_SYSTEM, cache_control: { type: 'ephemeral' } },
        { type: 'text', text: `Dagsetning í dag: ${today()}.` },
      ],
      messages,
    });

    let reply = '';
    for (const block of res.content) if (block.type === 'text') reply += block.text;
    reply = reply.trim();
    if (res.stop_reason === 'refusal' || !reply) reply = FALLBACK_IS;

    await logTurn({
      at: new Date().toISOString(), session, ip: ipHash, model: MODEL,
      q: messages[messages.length - 1].content, a: reply, stop: res.stop_reason,
      usage: res.usage, ms: Date.now() - started,
    });
    return NextResponse.json({ reply });
  } catch (err) {
    // Never log the error object itself: SDK errors can carry request headers.
    const kind = err instanceof Anthropic.APIError ? `api_${err.status}` : (err as Error)?.name || 'error';
    await logTurn({ at: new Date().toISOString(), session, ip: ipHash, model: MODEL, q: messages[messages.length - 1].content, error: kind });
    return NextResponse.json({ error: kind, reply: FALLBACK_IS }, { status: 502 });
  }
}
