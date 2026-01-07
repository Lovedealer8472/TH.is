'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export default function HomePage() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-2 flex justify-center">
              <img
                src="/logo.png"
                alt="Tölvuhvíslarinn"
                className="max-w-full h-auto"
                style={{ maxWidth: '800px', height: 'auto' }}
              />
            </div>
            <p className="text-lg text-gray-400 mb-2 max-w-3xl mx-auto leading-relaxed">
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
      <section className="py-12 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Tölvuviðgerðir */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
                {t.home.services.repairs.title}
              </h2>
              <p className="text-base text-gray-300 mb-4 max-w-3xl leading-relaxed">
                {t.home.services.repairs.description}
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.repairs.bullet1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.repairs.bullet2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.repairs.bullet3}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.repairs.bullet4}</span>
                </li>
              </ul>
            </div>

            {/* Sérsmíði */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
                {t.home.services.custom.title}
              </h2>
              <p className="text-base text-gray-300 mb-4 max-w-3xl leading-relaxed">
                {t.home.services.custom.description}
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.custom.bullet1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.custom.bullet2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.custom.bullet3}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.custom.bullet4}</span>
                </li>
              </ul>
            </div>

            {/* Tækniráðgjöf */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
                {t.home.services.consulting.title}
              </h2>
              <p className="text-base text-gray-300 mb-4 max-w-3xl leading-relaxed">
                {t.home.services.consulting.description}
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.consulting.bullet1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.consulting.bullet2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.consulting.bullet3}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3">•</span>
                  <span>{t.home.services.consulting.bullet4}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
            {t.home.cta.heading}
          </h2>
          <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
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
