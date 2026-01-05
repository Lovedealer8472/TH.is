'use client';

import { useI18n } from '@/lib/i18n';
import ContactForm from '@/components/ContactForm';
import SocialMediaLinks from '@/components/ui/SocialMediaLinks';

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            {t.contact.subtitle}
          </p>
          <div className="flex justify-center">
            <SocialMediaLinks variant="inline" showLabels={true} />
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
