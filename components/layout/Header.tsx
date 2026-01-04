'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Header() {
  const { t } = useI18n();

  return (
    <header className="border-b border-gray-800 bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-100">Tölvuhvíslarinn</span>
            <span className="font-mono text-xs text-tech-green hidden sm:inline">.is</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              {t.nav.pricing}
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Mobile menu button - placeholder for future mobile menu */}
          <div className="md:hidden">
            {/* Mobile menu can be added later */}
          </div>
        </div>
      </div>
    </header>
  );
}
