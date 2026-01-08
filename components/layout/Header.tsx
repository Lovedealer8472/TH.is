'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Header() {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-100">Tölvuhvíslarinn</span>
            <span className="font-mono text-xs text-tech-green hidden sm:inline">.is</span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Right side - Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-3">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-primary-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-800"
              >
                {t.nav.services}
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-primary-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-800"
              >
                {t.nav.pricing}
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-primary-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-800"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-primary-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-800"
              >
                {t.nav.contact}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
