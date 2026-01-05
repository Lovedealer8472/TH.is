'use client';

import { useI18n } from '@/lib/i18n';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
            {t.about.title}
          </h1>
          <div className="space-y-6 text-base text-gray-300 leading-relaxed mb-12 max-w-3xl">
            <p>
              {t.about.intro1}
            </p>
            <p>
              {t.about.intro2}
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
              {t.about.howIWork.title}
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.about.howIWork.bullet1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.about.howIWork.bullet2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.about.howIWork.bullet3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>{t.about.howIWork.bullet4}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
