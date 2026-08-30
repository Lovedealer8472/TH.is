'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

export default function NewsletterBanner() {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !consent) return;
    setStatus('loading');
    try {
      const res = await fetch('/newsletter/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, privacy_consent: 'on' }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || (t as any).newsletter.success);
        setEmail('');
        setConsent(false);
      } else {
        setStatus('error');
        setMessage(data.error || (t as any).newsletter.errorDefault);
      }
    } catch {
      setStatus('error');
      setMessage((t as any).newsletter.errorNetwork);
    }
  }

  const nt = (t as any).newsletter;

  return (
    <div className="mt-8 sm:mt-10 pt-7 border-t border-gray-800/80">
      <p className="text-sm text-gray-400 mb-4 max-w-md mx-auto leading-relaxed">
        {nt.bannerTitle}
      </p>

      {status === 'success' ? (
        <p className="text-sm text-tech-green font-medium">{message}</p>
      ) : (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 justify-center items-stretch max-w-sm mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={nt.emailPlaceholder}
              className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 min-w-0"
            />
            <button
              type="submit"
              disabled={status === 'loading' || !consent}
              className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 whitespace-nowrap shadow-md"
            >
              {status === 'loading' ? '…' : nt.submitBtn}
            </button>
          </form>

          <label className="mt-2.5 flex items-center gap-2 justify-center cursor-pointer group">
            <input
              type="checkbox"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
              className="w-3.5 h-3.5 accent-primary-600 cursor-pointer"
            />
            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
              {nt.consent}{' '}
              <a href="/privacy" className="text-primary-400 hover:underline">
                {nt.consentLink}
              </a>
            </span>
          </label>

          {status === 'error' && (
            <p className="mt-2.5 text-xs text-red-400">{message}</p>
          )}
        </>
      )}
    </div>
  );
}
