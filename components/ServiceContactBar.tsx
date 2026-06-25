import Link from 'next/link';
import { getWhatsAppUrl, getMessengerUrl, PHONE_DISPLAY, PHONE_TEL } from '@/lib/social-links';

interface ServiceContactBarProps {
  serviceName?: string;
}

export default function ServiceContactBar({ serviceName }: ServiceContactBarProps) {
  const whatsappMessage = serviceName
    ? `Hæ, ég vildi spyrja um ${serviceName}`
    : 'Hæ, ég vildi spyrja um tölvuþjónustu';
  const messengerUrl = getMessengerUrl();

  return (
    <div className="rounded-xl border border-primary-500/30 bg-primary-950/40 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-gray-100 mb-2">Hafðu samband</h2>
      <p className="text-gray-400 mb-6">
        Sendu fyrirspurn, hringdu eða skrifaðu á WhatsApp – ég svara fljótt.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={PHONE_TEL}
          className="inline-flex items-center gap-2 px-5 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          <PhoneIcon />
          Hringja {PHONE_DISPLAY}
        </a>
        <a
          href={getWhatsAppUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        {messengerUrl && (
          <a
            href={messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <MessengerIcon />
            Messenger
          </a>
        )}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 text-primary-400 border border-primary-600 rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          <MailIcon />
          Senda fyrirspurn
        </Link>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function MessengerIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.373 0 0 4.925 0 11c0 3.368 1.593 6.378 4.072 8.325L2.838 24l5.09-2.785C9.198 21.526 10.554 21.8 12 21.8c6.627 0 12-4.925 12-11C24 4.925 18.627 0 12 0zm1.191 13.307l-3.247-3.419L4.582 13.3l5.582-5.89 3.248 3.419 5.342-3.422-5.581 5.9z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
