'use client';

import { useI18n } from '@/lib/i18n';

export default function PricingPage() {
  const { t } = useI18n();

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-5">
            {t.pricing.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {/* Card 1: Tölvuviðgerðir & bilanagreining */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">
              {t.pricing.cards.repairs.title}
            </h2>
            <div className="mb-8">
              <p className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2">
                {t.pricing.cards.repairs.price}
              </p>
            </div>
            <div className="mb-6 flex-grow">
              <p className="text-sm font-semibold text-gray-300 mb-4">{t.pricing.cards.repairs.includes}</p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5">✓</span>
                  <span>{t.pricing.cards.repairs.bullet1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5">✓</span>
                  <span>{t.pricing.cards.repairs.bullet2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5">✓</span>
                  <span>{t.pricing.cards.repairs.bullet3}</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500 italic border-t border-gray-700/50 pt-5 mt-auto">
              {t.pricing.cards.repairs.note}
            </p>
          </div>

          {/* Card 2: Tækniráðgjöf */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">
              {t.pricing.cards.consulting.title}
            </h2>
            <div className="mb-8">
              <p className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2">
                {t.pricing.cards.consulting.price}
              </p>
            </div>
            <div className="mb-6 flex-grow">
              <p className="text-sm font-semibold text-gray-300 mb-4">{t.pricing.cards.consulting.includes}</p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5">✓</span>
                  <span>{t.pricing.cards.consulting.bullet1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5">✓</span>
                  <span>{t.pricing.cards.consulting.bullet2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5">✓</span>
                  <span>{t.pricing.cards.consulting.bullet3}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Sérsmíði borðtölva */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6">
              {t.pricing.cards.custom.title}
            </h2>
            <div className="mb-8">
              <p className="text-4xl sm:text-5xl font-bold text-primary-400 mb-2">
                {t.pricing.cards.custom.price}
              </p>
            </div>
            <div className="mb-6 flex-grow">
              <p className="text-sm font-semibold text-gray-300 mb-4">{t.pricing.cards.custom.includes}</p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5">✓</span>
                  <span>{t.pricing.cards.custom.bullet1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5">✓</span>
                  <span>{t.pricing.cards.custom.bullet2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5">✓</span>
                  <span>{t.pricing.cards.custom.bullet3}</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500 italic border-t border-gray-700/50 pt-5 mt-auto">
              {t.pricing.cards.custom.note}
            </p>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-8">
          <p className="text-base text-gray-400 max-w-3xl mx-auto">
            {t.pricing.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
