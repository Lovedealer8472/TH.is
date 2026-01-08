'use client';

import { useI18n } from '@/lib/i18n';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-10 text-center">
            {t.about.title}
          </h1>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 sm:p-10 mb-10">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                {t.about.intro1}
              </p>
              <p>
                {t.about.intro2}
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-6">
              {t.about.howIWork.title}
            </h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="text-primary-400 mr-4 text-xl">✓</span>
                <span>{t.about.howIWork.bullet1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-4 text-xl">✓</span>
                <span>{t.about.howIWork.bullet2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-4 text-xl">✓</span>
                <span>{t.about.howIWork.bullet3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-4 text-xl">✓</span>
                <span>{t.about.howIWork.bullet4}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
