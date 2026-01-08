'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export default function HomePage() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-8 pb-12 sm:pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="sr-only">{t.home.hero.titleMain}</h1>
            <div className="mb-4 sm:mb-6 flex justify-center">
              <Image
                src="/logo.png?v=3"
                alt="Tölvuhvíslarinn"
                width={832}
                height={187}
                className="max-w-full h-auto"
                style={{ maxWidth: '800px', height: 'auto' }}
                priority
              />
            </div>
            <p className="text-lg text-gray-400 mb-3 max-w-3xl mx-auto leading-relaxed">
              {t.home.hero.subtitle}
            </p>
            <p className="text-base text-gray-500 mb-10 sm:mb-12">
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
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Tölvuviðgerðir */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-100 mb-3">
                {t.home.services.repairs.title}
              </h2>
              <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                {t.home.services.repairs.description}
              </p>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.repairs.bullet1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.repairs.bullet2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.repairs.bullet3}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.repairs.bullet4}</span>
                </li>
              </ul>
            </div>

            {/* Sérsmíði */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-100 mb-3">
                {t.home.services.custom.title}
              </h2>
              <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                {t.home.services.custom.description}
              </p>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.custom.bullet1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.custom.bullet2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.custom.bullet3}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.custom.bullet4}</span>
                </li>
              </ul>
            </div>

            {/* Tækniráðgjöf */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-100 mb-3">
                {t.home.services.consulting.title}
              </h2>
              <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                {t.home.services.consulting.description}
              </p>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.consulting.bullet1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.consulting.bullet2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.consulting.bullet3}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2.5 mt-0.5">•</span>
                  <span>{t.home.services.consulting.bullet4}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-10 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
              {t.home.cta.heading}
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.home.cta.description}
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/20 hover:-translate-y-0.5"
            >
              {t.home.cta.primary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
