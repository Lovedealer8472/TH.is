'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function PricingPage() {
  const { t } = useI18n();

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-warm-50 mb-5">
            {t.pricing.title}
          </h1>
          <p className="text-xl text-warm-200 max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Detailed Pricing Tables */}
        <div className="space-y-12">
          {/* General Services */}
          <div className="bg-warm-800/30 backdrop-blur-sm rounded-xl border border-warm-700/50 p-8">
            <h2 className="text-2xl font-bold text-warm-50 mb-2">{t.pricing.detailedPricing.general.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-warm-200">
                <thead className="border-b border-warm-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-warm-100">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-warm-100">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-700/50">
                  {t.pricing.detailedPricing.general.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-warm-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Priority Services */}
          <div className="bg-warm-800/30 backdrop-blur-sm rounded-xl border border-warm-700/50 p-8">
            <h2 className="text-2xl font-bold text-warm-50 mb-2">{t.pricing.detailedPricing.priority.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-warm-200">
                <thead className="border-b border-warm-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-warm-100">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-warm-100">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-700/50">
                  {t.pricing.detailedPricing.priority.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-warm-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Hourly Rates & Callouts */}
          <div className="bg-warm-800/30 backdrop-blur-sm rounded-xl border border-warm-700/50 p-8">
            <h2 className="text-2xl font-bold text-warm-50 mb-2">{t.pricing.detailedPricing.hourly.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-warm-200">
                <thead className="border-b border-warm-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-warm-100">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-warm-100">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-700/50">
                  {t.pricing.detailedPricing.hourly.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-warm-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Desktop Computers */}
          <div className="bg-warm-800/30 backdrop-blur-sm rounded-xl border border-warm-700/50 p-8">
            <h2 className="text-2xl font-bold text-warm-50 mb-2">{t.pricing.detailedPricing.desktop.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-warm-200">
                <thead className="border-b border-warm-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-warm-100">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-warm-100">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-700/50">
                  {t.pricing.detailedPricing.desktop.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-warm-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Laptops */}
          <div className="bg-warm-800/30 backdrop-blur-sm rounded-xl border border-warm-700/50 p-8">
            <h2 className="text-2xl font-bold text-warm-50 mb-2">{t.pricing.detailedPricing.laptop.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-warm-200">
                <thead className="border-b border-warm-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-warm-100">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-warm-100">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-700/50">
                  {t.pricing.detailedPricing.laptop.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-warm-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cooling & Cleaning */}
          <div className="bg-warm-800/30 backdrop-blur-sm rounded-xl border border-warm-700/50 p-8">
            <h2 className="text-2xl font-bold text-warm-50 mb-2">{t.pricing.detailedPricing.cooling.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-warm-200">
                <thead className="border-b border-warm-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-warm-100">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-warm-100">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-700/50">
                  {t.pricing.detailedPricing.cooling.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-warm-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Security & Software */}
          <div className="bg-warm-800/30 backdrop-blur-sm rounded-xl border border-warm-700/50 p-8">
            <h2 className="text-2xl font-bold text-warm-50 mb-2">{t.pricing.detailedPricing.security.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-warm-200">
                <thead className="border-b border-warm-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-warm-100">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-warm-100">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-700/50">
                  {t.pricing.detailedPricing.security.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-warm-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Data & Recovery */}
          <div className="bg-warm-800/30 backdrop-blur-sm rounded-xl border border-warm-700/50 p-8">
            <h2 className="text-2xl font-bold text-warm-50 mb-2">{t.pricing.detailedPricing.data.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-warm-200">
                <thead className="border-b border-warm-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-warm-100">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-warm-100">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-700/50">
                  {t.pricing.detailedPricing.data.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-warm-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Video Transfer */}
          <div className="bg-warm-800/30 backdrop-blur-sm rounded-xl border border-warm-700/50 p-8">
            <h2 className="text-2xl font-bold text-warm-50 mb-2">{t.pricing.detailedPricing.video.title}</h2>
            {/* Time-limited Christmas offer (ends 31.12.2026): remove this block and the promo keys afterwards */}
            <div className="my-6 rounded-lg border border-primary-500/40 bg-primary-500/10 p-6">
              <span className="inline-block rounded-full bg-primary-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-300">
                {t.pricing.detailedPricing.video.promo.badge}
              </span>
              <p className="mt-3 text-xl font-bold text-warm-50">{t.pricing.detailedPricing.video.promo.title}</p>
              <ul className="mt-3 space-y-1 text-sm text-warm-200">
                {t.pricing.detailedPricing.video.promo.lines.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center px-6 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-500 transition-all duration-200 shadow-lg shadow-primary-600/20"
              >
                {t.pricing.detailedPricing.video.promo.cta}
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-warm-200">
                <thead className="border-b border-warm-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-warm-100">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-warm-100">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-700/50">
                  {t.pricing.detailedPricing.video.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-warm-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-16">
          <p className="text-base text-warm-200 max-w-3xl mx-auto">
            {t.pricing.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
