'use client';

import { useI18n } from '@/lib/i18n';
import ContactForm from '@/components/ContactForm';
import SocialMediaLinks from '@/components/ui/SocialMediaLinks';
import EmailLink from '@/components/ui/EmailLink';

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-5">
            {t.contact.title}
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t.contact.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-primary-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">{t.contact.phone}</h3>
              <p className="text-lg text-gray-100">
                <a href="tel:848-6755" className="text-primary-400 hover:text-primary-300 transition-colors font-medium">848-6755</a>
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-primary-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">{t.contact.email}</h3>
              <p className="text-lg text-gray-100">
                <EmailLink email="dadi@tolvuhvislarinn.is" className="text-primary-400 hover:text-primary-300 transition-colors font-medium" />
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-primary-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">{t.contact.location}</h3>
              <p className="text-lg text-gray-100 font-medium">Neskaupstaður</p>
            </div>
          </div>

          <div className="mb-16">
            <p className="text-base text-gray-400 mb-4">Eða hafðu samband í gegnum:</p>
            <div className="flex justify-center">
              <SocialMediaLinks variant="inline" showLabels={true} />
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
