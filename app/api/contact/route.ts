import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Every message is written to disk BEFORE delivery is attempted, then sent on two
// independent channels: email (SMTP) and a phone push (ntfy). The customer only
// sees success when at least one channel delivered. NTFY_URL lives in .env.local
// (the topic name is the secret; this repo is public).
const INBOX_FILE =
  process.env.CONTACT_INBOX_FILE || path.join(os.homedir(), 'contact-inbox', 'messages.jsonl');

const LIMITS = { name: 200, email: 320, message: 10000 };

type Submission = { id: string; at: string; ip: string; name: string; email: string; message: string };

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function appendInbox(record: Record<string, unknown>) {
  await fs.mkdir(path.dirname(INBOX_FILE), { recursive: true });
  await fs.appendFile(INBOX_FILE, JSON.stringify(record) + '\n', 'utf8');
}

async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (i < attempts - 1) await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
  throw lastError;
}

async function sendEmail(s: Submission) {
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER?.trim(),
      pass: process.env.SMTP_PASS?.trim(),
    },
    authMethod: 'PLAIN',
    requireTLS: smtpPort === 587,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });

  const name = escapeHtml(s.name);
  const email = escapeHtml(s.email);
  const message = escapeHtml(s.message);

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || 'tolvuhvislarinn@gmail.com',
    replyTo: s.email,
    subject: `Ný fyrirspurn frá ${s.name.replace(/[\r\n]+/g, ' ')} - Tölvuhvíslarinn`,
    text: `
Ný fyrirspurn frá vefsíðu

Nafn: ${s.name}
Netfang: ${s.email}

Skilaboð:
${s.message}

---
Þessi fyrirspurn kom frá hafðu samband formi á tolvuhvislarinn.is (${s.id})
    `.trim(),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0ea5e9;">Ný fyrirspurn frá vefsíðu</h2>
        <div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #d1d5db; margin: 10px 0;"><strong style="color: #f3f4f6;">Nafn:</strong> ${name}</p>
          <p style="color: #d1d5db; margin: 10px 0;"><strong style="color: #f3f4f6;">Netfang:</strong> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
        </div>
        <div style="background-color: #111827; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #f3f4f6; margin-top: 0;">Skilaboð:</h3>
          <p style="color: #d1d5db; white-space: pre-wrap;">${message}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #374151; margin: 30px 0;">
        <p style="color: #9ca3af; font-size: 12px;">Þessi fyrirspurn kom frá hafðu samband formi á tolvuhvislarinn.is (${s.id})</p>
      </div>
    `,
  });
}

async function sendPush(s: Submission, emailFailed: boolean) {
  const url = process.env.NTFY_URL?.trim();
  if (!url) throw new Error('NTFY_URL not set');
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      // ntfy headers must be ASCII; the body carries the Icelandic text
      Title: 'Ny fyrirspurn - tolvuhvislarinn.is',
      Priority: emailFailed ? 'urgent' : 'high',
      Tags: emailFailed ? 'warning,email' : 'email',
    },
    body:
      `${s.name} <${s.email}>\n\n${s.message.slice(0, 3000)}` +
      (emailFailed ? '\n\n[ATH: tölvupósturinn klikkaði, skilaboðin eru vistuð á serveri]' : ''),
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) throw new Error(`ntfy HTTP ${res.status}`);
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  // Validate input
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }
  if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
    return NextResponse.json({ error: 'Message too long' }, { status: 400 });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const submission: Submission = {
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    at: new Date().toISOString(),
    ip: (request.headers.get('x-forwarded-for') || '').split(',')[0].trim(),
    name,
    email,
    message,
  };

  // 1. Save first, so nothing is lost even if every channel below is down
  let saved = true;
  try {
    await appendInbox({ type: 'message', ...submission });
  } catch (error) {
    saved = false;
    console.error('[contact] could not save to inbox file:', error);
  }

  // 2. Email, then push (push is told whether email failed)
  let emailOk = true;
  try {
    await withRetry(() => sendEmail(submission));
  } catch (error) {
    emailOk = false;
    console.error('[contact] email failed:', submission.id, error);
  }

  let pushOk = true;
  try {
    await withRetry(() => sendPush(submission, !emailOk));
  } catch (error) {
    pushOk = false;
    console.error('[contact] push failed:', submission.id, error);
  }

  try {
    await appendInbox({ type: 'delivery', id: submission.id, at: new Date().toISOString(), emailOk, pushOk });
  } catch {
    // the original message line is what matters; already logged above if the disk is the problem
  }

  if (emailOk || pushOk) {
    return NextResponse.json({ message: 'Message sent', id: submission.id }, { status: 200 });
  }

  console.error('[contact] ALL CHANNELS FAILED:', submission.id, saved ? '(saved to inbox file)' : '(NOT saved)');
  return NextResponse.json({ error: 'delivery_failed', saved }, { status: 503 });
}
