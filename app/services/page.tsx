'use client';

import { useI18n } from '@/lib/i18n';

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
            {t.services.title}
          </h1>
          <p className="text-xl text-gray-400">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Card 1: Tölvuviðgerðir */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
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
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
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
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
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
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
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
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">
              {t.services.cards.battery.title}
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">+</span>
                <span>{t.services.cards.battery.bullet1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">+</span>
                <span>{t.services.cards.battery.bullet2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">+</span>
                <span>{t.services.cards.battery.bullet3}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            {t.services.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
