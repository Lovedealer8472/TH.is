'use client';

import { useI18n, translate } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-gray-100 mb-2">Tölvuhvíslarinn</h3>
            <p className="text-sm text-gray-400 font-mono">{t.footer.tagline}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-100 mb-3">Hafðu samband</h4>
            <p className="text-sm text-gray-400">Netfang: <a href="mailto:tolvuhvislarinn@gmail.com" className="text-primary-400 hover:text-primary-300">tolvuhvislarinn@gmail.com</a></p>
            <p className="text-sm text-gray-400">Sími: <a href="tel:848-6755" className="text-primary-400 hover:text-primary-300">848-6755</a></p>
          </div>

          {/* Additional Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-100 mb-3">Viðbótarupplýsingar</h4>
            <p className="text-sm text-gray-400">Staðsetning: Neskaupstaður</p>
            <p className="text-sm text-gray-400 font-mono mt-2">KT: 460525-2250</p>
            <p className="text-sm text-gray-400 font-mono">RKNR: 1106-26-001322</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400 mb-3">
            {translate(t.footer.copyright, { year: String(currentYear) })}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <a href="/privacy" className="hover:text-primary-400 transition-colors">
              Persónuverndarstefna
            </a>
            <span className="text-gray-600">|</span>
            <a href="/cookies" className="hover:text-primary-400 transition-colors">
              Vefkökur
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
