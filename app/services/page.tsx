'use client';

import { useI18n } from '@/lib/i18n';

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-5">
            {t.services.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Card 1: Tölvuviðgerðir */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 group">
            <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">
              {t.services.cards.repairs.title}
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.repairs.bullet1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.repairs.bullet2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.repairs.bullet3}</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Sérsmíði borðtölva */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 group">
            <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">
              {t.services.cards.custom.title}
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.custom.bullet1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.custom.bullet2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.custom.bullet3}</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Tækniráðgjöf */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 group">
            <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">
              {t.services.cards.consulting.title}
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.consulting.bullet1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.consulting.bullet2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.consulting.bullet3}</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Uppsetningar & flutningar */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 group">
            <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">
              {t.services.cards.installations.title}
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.installations.bullet1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.installations.bullet2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.installations.bullet3}</span>
              </li>
            </ul>
          </div>

          {/* Card 5: Rafhlöðuskipti á snjalltækjum */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 group lg:col-start-2">
            <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">
              {t.services.cards.battery.title}
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.battery.bullet1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.battery.bullet2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.services.cards.battery.bullet3}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-8">
          <p className="text-base text-gray-400 max-w-3xl mx-auto">
            {t.services.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
