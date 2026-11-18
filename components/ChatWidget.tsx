'use client';

import { useEffect, useRef, useState } from 'react';

type Msg = { role: 'user' | 'assistant'; content: string };

const GREETING: Msg = {
  role: 'assistant',
  content: 'Hæ! Ég er sjálfvirk aðstoð Tölvuhvíslarans. Spurðu mig um þjónustu, verð eða VHS yfirfærslu. (Hi! You can also ask in English.)',
};

const SUGGESTIONS = ['Hvað kostar að færa VHS spólu?', 'Fartölvan kveikir ekki á sér', 'Hvar eruð þið?'];

// Turn URLs, emails and the phone number into links; everything else stays plain text (no HTML injection).
function linkify(text: string) {
  const parts = text.split(/(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.]+|848-6755)/g);
  return parts.map((p, i) => {
    if (/^https?:\/\//.test(p)) return <a key={i} href={p} className="underline text-primary-400 break-all">{p.replace(/^https?:\/\/(www\.)?/, '')}</a>;
    if (/@/.test(p) && /^[\w.+-]+@/.test(p)) return <a key={i} href={`mailto:${p}`} className="underline text-primary-400">{p}</a>;
    if (p === '848-6755') return <a key={i} href="tel:+3548486755" className="underline text-primary-400">{p}</a>;
    return <span key={i}>{p}</span>;
  });
}

export default function ChatWidget({ startOpen = false }: { startOpen?: boolean }) {
  const [open, setOpen] = useState(startOpen);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [session] = useState(() => Math.random().toString(36).slice(2, 12));
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, busy]);

  async function send(text: string) {
    const q = text.trim().slice(0, 1000);
    if (!q || busy) return;
    const next = [...msgs, { role: 'user' as const, content: q }];
    setMsgs(next);
    setInput('');
    setBusy(true);
    try {
      // The greeting is UI only; the API expects user-first history, last 20 messages.
      const history = next.slice(1).slice(-19);
      while (history.length && history[0].role !== 'user') history.shift();
      const r = await fetch('/api/spjall', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-chat-session': session },
        body: JSON.stringify({ messages: history }),
      });
      const data = await r.json().catch(() => ({}));
      setMsgs((m) => [...m, { role: 'assistant', content: data.reply || 'Eitthvað fór úrskeiðis. Hringdu endilega í 848-6755.' }]);
    } catch {
      setMsgs((m) => [...m, { role: 'assistant', content: 'Tenging rofnaði. Reyndu aftur eða hringdu í 848-6755.' }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed z-50" style={{ right: 'max(16px, env(safe-area-inset-right))', bottom: 'calc(max(16px, env(safe-area-inset-bottom)) + 76px)' }}>
      {open ? (
        <div className="w-[min(380px,calc(100vw-32px))] h-[min(560px,calc(100vh-96px))] flex flex-col rounded-2xl border border-warm-700 bg-warm-900 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-warm-800 bg-warm-950">
            <div className="flex items-center gap-2 min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon.svg" alt="" width={28} height={28} className="h-7 w-7 rounded-md" />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-warm-50">Spjall</div>
                <div className="text-xs text-warm-400 truncate">Sjálfvirk aðstoð · Daði svarar í 848-6755</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Loka spjalli" className="p-1 text-warm-400 hover:text-warm-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div className={`max-w-[85%] whitespace-pre-wrap text-sm leading-relaxed rounded-2xl px-3 py-2 ${m.role === 'user' ? 'bg-primary-600 text-white rounded-br-md' : 'bg-warm-800 text-warm-100 rounded-bl-md'}`}>
                  {linkify(m.content)}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start"><div className="bg-warm-800 text-warm-400 text-sm rounded-2xl rounded-bl-md px-3 py-2">Skrifar…</div></div>
            )}
            {msgs.length === 1 && !busy && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)} className="text-xs rounded-full border border-warm-700 px-3 py-1.5 text-warm-200 hover:border-primary-500 hover:text-primary-300">{s}</button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 p-3 border-t border-warm-800">
            <label htmlFor="chat-input" className="sr-only">Skilaboð</label>
            <input id="chat-input" value={input} onChange={(e) => setInput(e.target.value)} maxLength={1000} disabled={busy}
              placeholder="Skrifaðu spurningu…" autoComplete="off"
              className="flex-1 min-w-0 rounded-xl bg-warm-800 border border-warm-700 px-3 py-2 text-sm text-warm-50 placeholder-warm-500 focus:outline-none focus:border-primary-500" />
            <button type="submit" disabled={busy || !input.trim()} className="rounded-xl bg-primary-600 px-4 text-sm font-medium text-white disabled:opacity-40 hover:bg-primary-500">Senda</button>
          </form>
          <div className="px-3 pb-2 text-[11px] text-warm-500">Svör eru sjálfvirk og geta verið ónákvæm. Spjallið er vistað til að bæta þjónustuna.</div>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} aria-label="Opna spjall" className="flex items-center gap-2 rounded-full bg-primary-600 hover:bg-primary-500 text-white shadow-xl pl-3 pr-4 py-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8M8 14h5m-9 6l3-3h9a3 3 0 003-3V7a3 3 0 00-3-3H6a3 3 0 00-3 3v7a3 3 0 001 2.2" /></svg>
          <span className="text-sm font-medium">Spjall</span>
        </button>
      )}
    </div>
  );
}
