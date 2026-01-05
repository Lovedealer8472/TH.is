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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-3">
              {t.home.hero.titleMain}
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 mb-4">
              {t.home.hero.titleSecondary}
            </p>
            <p className="text-lg sm:text-xl text-gray-400 mb-4 max-w-3xl mx-auto">
              {t.home.hero.subtitle}
            </p>
            <p className="text-base text-gray-500 mb-8">
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
          <div className="space-y-12">
            {/* Tölvuviðgerðir */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-3">
                {t.home.services.repairs.title}
              </h2>
              <p className="text-gray-300 mb-4 max-w-3xl">
                {t.home.services.repairs.description}
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• {t.home.services.repairs.bullet1}</li>
                <li>• {t.home.services.repairs.bullet2}</li>
                <li>• {t.home.services.repairs.bullet3}</li>
                <li>• {t.home.services.repairs.bullet4}</li>
              </ul>
            </div>

            {/* Sérsmíði */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-3">
                {t.home.services.custom.title}
              </h2>
              <p className="text-gray-300 mb-4 max-w-3xl">
                {t.home.services.custom.description}
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• {t.home.services.custom.bullet1}</li>
                <li>• {t.home.services.custom.bullet2}</li>
                <li>• {t.home.services.custom.bullet3}</li>
                <li>• {t.home.services.custom.bullet4}</li>
              </ul>
            </div>

            {/* Tækniráðgjöf */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-3">
                {t.home.services.consulting.title}
              </h2>
              <p className="text-gray-300 mb-4 max-w-3xl">
                {t.home.services.consulting.description}
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• {t.home.services.consulting.bullet1}</li>
                <li>• {t.home.services.consulting.bullet2}</li>
                <li>• {t.home.services.consulting.bullet3}</li>
                <li>• {t.home.services.consulting.bullet4}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
            {t.home.cta.heading}
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            {t.home.cta.description}
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
