'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function HomePage() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
              <div>{t.home.hero.titleMain}</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl">{t.home.hero.titleSecondary}</div>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
              {t.home.hero.subtitle}
            </p>
            <p className="text-base sm:text-lg text-gray-500 mb-8">
              {t.home.hero.trustLine}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                {t.home.cta.primary}
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 bg-gray-800 text-primary-400 border-2 border-primary-600 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                {t.home.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle tech accent - decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-green to-transparent opacity-20"></div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 - Tölvuviðgerðir */}
            <div className="p-6 border border-gray-800 rounded-lg hover:border-primary-500 hover:shadow-lg transition-all bg-gray-800">
              <h3 className="text-xl font-bold text-gray-100 mb-3">
                Tölvuviðgerðir
              </h3>
              <p className="text-gray-400">
                Viðgerðir, viðhald fyrir tölvur og tæki.
              </p>
            </div>

            {/* Service Card 2 - Sérsmíði */}
            <div className="p-6 border border-gray-800 rounded-lg hover:border-primary-500 hover:shadow-lg transition-all bg-gray-800">
              <h3 className="text-xl font-bold text-gray-100 mb-3">
                Sérsmíði
              </h3>
              <p className="text-gray-400">
                Sérsniðin tölvusmíði að þínum þörfum og kostnaði.
              </p>
            </div>

            {/* Service Card 3 - Tækniráðgjöf */}
            <div className="p-6 border border-gray-800 rounded-lg hover:border-primary-500 hover:shadow-lg transition-all bg-gray-800">
              <h3 className="text-xl font-bold text-gray-100 mb-3">
                Tækniráðgjöf
              </h3>
              <p className="text-gray-400">
                Ráðgjöf og lausnir fyrir einstaklinga og fyrirtæki.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6">
            Hafðu samband við Tölvuhvíslarann
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Hafðu samband við mig í dag og fáðu sérsniðna lausn fyrir tölvuþarfir þínar.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {t.home.cta.primary}
          </Link>
        </div>
      </section>
    </div>
  );
}
