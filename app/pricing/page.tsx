'use client';

import { useI18n } from '@/lib/i18n';

export default function PricingPage() {
  const { t } = useI18n();

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
            {t.pricing.title}
          </h1>
          <p className="text-xl text-gray-400">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Card 1: Tölvuviðgerðir & bilanagreining */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-4">
              Tölvuviðgerðir & bilanagreining
            </h2>
            <div className="mb-6">
              <p className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
                9.900 kr.
              </p>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-300 mb-3">Innifelur:</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>Bilanagreining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>Almenn bilanaleit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>Mat á viðgerðarkostnaði</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500 italic border-t border-gray-700 pt-4">
              Viðgerð ekki hafin nema með samþykki viðskiptavinar.
            </p>
          </div>

          {/* Card 2: Tækniráðgjöf */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-4">
              Tækniráðgjöf
            </h2>
            <div className="mb-6">
              <p className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
                12.000 kr./klst
              </p>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-300 mb-3">Innifelur:</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>Ráðgjöf vegna kaupákvarðana</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>Uppsetningar & lausnir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>Almenn tækniaðstoð</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Sérsmíði borðtölva */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-4">
              Sérsmíði borðtölva
            </h2>
            <div className="mb-6">
              <p className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
                Samkvæmt tilboði
              </p>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-300 mb-3">Innifelur:</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>Þarfagreining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>Íhlutaval</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>Samsetning og prófanir</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500 italic border-t border-gray-700 pt-4">
              Hentar jafnt leikjum, vinnu og sérhæfðum verkefnum.
            </p>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            {t.pricing.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
