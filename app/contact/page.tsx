'use client';

import { useI18n } from '@/lib/i18n';
import ContactForm from '@/components/ContactForm';
import SocialMediaLinks from '@/components/ui/SocialMediaLinks';

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
            {t.contact.title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {t.contact.intro}
          </p>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-1">{t.contact.phone}</h3>
                <p className="text-lg text-gray-100">
                  <a href="tel:848-6755" className="text-primary-400 hover:text-primary-300">848-6755</a>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-1">{t.contact.email}</h3>
                <p className="text-lg text-gray-100">
                  <a href="mailto:tolvuhvislarinn@gmail.com" className="text-primary-400 hover:text-primary-300">tolvuhvislarinn@gmail.com</a>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-1">{t.contact.location}</h3>
                <p className="text-lg text-gray-100">Neskaupstaður</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-400 mb-4">Eða hafðu samband í gegnum:</p>
            <div className="flex justify-center">
              <SocialMediaLinks variant="inline" showLabels={true} />
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
