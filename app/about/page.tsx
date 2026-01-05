'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionSection({ title, children, defaultOpen = false }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-750 transition-colors"
      >
        <h2 className="text-xl font-bold text-gray-100">{title}</h2>
        <span className="text-gray-400 text-2xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-gray-700">
          <div className="text-gray-300 space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
            {t.about.title}
          </h1>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
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
