'use client';

import { useI18n } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('is')}
        className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
          language === 'is'
            ? 'bg-primary-600 text-white'
            : 'text-warm-400 hover:bg-warm-800 hover:text-warm-100'
        }`}
        aria-label="Switch to Icelandic"
      >
        IS
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
          language === 'en'
            ? 'bg-primary-600 text-white'
            : 'text-warm-400 hover:bg-warm-800 hover:text-warm-100'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
