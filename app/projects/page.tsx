'use client';

import { useI18n } from '@/lib/i18n';

const TTS_DEMO_URL = 'https://www.tolvuhvislarinn.is/tts.html#demo';

export default function ProjectsPage() {
  const { t } = useI18n();
  const tts = t.projects.tts;

  const features = [
    { label: tts.features.voices, icon: VoicesIcon },
    { label: tts.features.quality, icon: QualityIcon },
    { label: tts.features.api, icon: ApiIcon },
    { label: tts.features.privacy, icon: PrivacyIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <header className="mb-12 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">
            {t.projects.title}
          </h1>
          <p className="mt-3 text-gray-400 text-base sm:text-lg">
            {t.projects.subtitle}
          </p>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-primary-500/80 to-transparent rounded-full" />
        </header>

        {/* TTS Project Card */}
        <article className="group rounded-2xl border border-gray-700/50 bg-gray-800/25 backdrop-blur-sm shadow-lg shadow-black/20 overflow-hidden transition-colors duration-300 hover:border-primary-500/25 hover:bg-gray-800/35">
          {/* Accent bar */}
          <div className="h-1 bg-gradient-to-r from-primary-500 via-tech-cyan to-tech-green" />

          <div className="p-7 sm:p-9">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-tech-green/90 mb-2">
                  Text-to-Speech
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-100 leading-snug">
                  {tts.title}
                </h2>
              </div>
              <span className="shrink-0 text-3xl" aria-hidden="true">🇮🇸</span>
            </div>

            <p className="text-base text-gray-300 leading-relaxed max-w-prose mb-8">
              {tts.description}
            </p>

            {/* Feature pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {features.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-lg border border-gray-700/40 bg-gray-800/40 px-3.5 py-2.5"
                >
                  <Icon />
                  <span className="text-sm text-gray-300 leading-tight">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={TTS_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {tts.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

function VoicesIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-primary-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4 0h8m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-primary-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-primary-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function PrivacyIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-primary-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
