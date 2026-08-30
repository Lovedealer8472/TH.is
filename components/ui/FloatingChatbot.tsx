'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: 'Ha! Tolvuhvislarinn her. Hvernig get eg hjalpad?', isUser: false }]);
  const [input, setInput] = useState('');
  const [sid, setSid] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setMessages(p => [...p, { text, isUser: true }]);
    setLoading(true);
    try {
      const r = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text, session_id: sid }) });
      const d = await r.json();
      if (d.session_id) setSid(d.session_id);
      setMessages(p => [...p, { text: d.reply, isUser: false }]);
    } catch { setMessages(p => [...p, { text: 'Villa... reyndu aftur.', isUser: false }]); }
    setLoading(false);
  }

  const msgStyle = (u: boolean) => ({
    padding: '8px 12px', borderRadius: 8, fontSize: 13, maxWidth: '85%', wordWrap: 'break-word' as const,
    alignSelf: u ? 'flex-end' : 'flex-start' as const,
    background: u ? '#0f3460' : '#16213e',
    color: u ? '#eaeaea' : '#d4c5a9',
    border: u ? 'none' : '1px solid rgba(226,168,62,0.2)'
  });

  return React.createElement('div', { style: { position: 'fixed', bottom: 24, right: 96, zIndex: 9999 } },
    open && React.createElement('div', { style: { width: 320, maxHeight: 440, background: '#1a1a2e', border: '1px solid #e2a83e', borderRadius: 12, overflow: 'hidden', marginBottom: 12 } },
      React.createElement('div', { style: { background: '#16213e', color: '#e2a83e', padding: '12px 16px', fontWeight: 'bold', fontSize: 14, borderBottom: '1px solid rgba(226,168,62,0.2)' } }, 'Tolvuhvislarinn'),
      React.createElement('div', { style: { height: 288, overflowY: 'auto' as const, padding: 12, display: 'flex', flexDirection: 'column' as const, gap: 8 } },
        ...messages.map((m: any, i: number) => React.createElement('div', {
          key: i, style: msgStyle(m.isUser),
          ...(m.isUser ? { children: m.text } : { dangerouslySetInnerHTML: { __html: m.text } })
        })),
        loading && React.createElement('div', { style: { padding: '8px 12px', borderRadius: 8, fontSize: 13, background: '#16213e', color: '#888', alignSelf: 'flex-start' as const, fontStyle: 'italic' } }, '...'),
        React.createElement('div', { ref: endRef })
      ),
      React.createElement('div', { style: { display: 'flex', padding: 10, gap: 8, borderTop: '1px solid rgba(226,168,62,0.2)' } },
        React.createElement('input', { value: input, onChange: (e: any) => setInput(e.target.value), onKeyDown: (e: any) => e.key === 'Enter' && send(), placeholder: 'Skrifadu...', style: { flex: 1, background: '#0f3460', border: '1px solid rgba(226,168,62,0.3)', color: '#eaeaea', padding: '8px 12px', borderRadius: 20, fontSize: 13, outline: 'none' } }),
        React.createElement('button', { onClick: send, disabled: loading, style: { background: '#e2a83e', border: 'none', color: '#1a1a2e', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontSize: 16, fontWeight: 'bold' } }, '\u2192')
      )
    ),
    React.createElement('button', { onClick: () => setOpen(!open), style: { width: 56, height: 56, borderRadius: '50%', background: '#1a1a2e', border: '2px solid #e2a83e', color: '#e2a83e', fontSize: 24, cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' } }, '\u{1F4AC}')
  );
}
