'use client';

import { useI18n } from '@/lib/i18n';

export default function PricingPage() {
  const { t } = useI18n();

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-5">
            {t.pricing.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Detailed Pricing Tables */}
        <div className="space-y-12">
          {/* General Services */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">{t.pricing.detailedPricing.general.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-400">
                <thead className="border-b border-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-200">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-200">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {t.pricing.detailedPricing.general.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-gray-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Priority Services */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">{t.pricing.detailedPricing.priority.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-400">
                <thead className="border-b border-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-200">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-200">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {t.pricing.detailedPricing.priority.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-gray-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Hourly Rates & Callouts */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">{t.pricing.detailedPricing.hourly.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-400">
                <thead className="border-b border-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-200">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-200">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {t.pricing.detailedPricing.hourly.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-gray-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Desktop Computers */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">{t.pricing.detailedPricing.desktop.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-400">
                <thead className="border-b border-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-200">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-200">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {t.pricing.detailedPricing.desktop.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-gray-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Laptops */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">{t.pricing.detailedPricing.laptop.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-400">
                <thead className="border-b border-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-200">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-200">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {t.pricing.detailedPricing.laptop.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-gray-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cooling & Cleaning */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">{t.pricing.detailedPricing.cooling.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-400">
                <thead className="border-b border-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-200">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-200">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {t.pricing.detailedPricing.cooling.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-gray-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Security & Software */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">{t.pricing.detailedPricing.security.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-400">
                <thead className="border-b border-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-200">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-200">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {t.pricing.detailedPricing.security.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-gray-700/20 transition-colors">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4 text-right text-primary-400 font-semibold">{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Data & Recovery */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">{t.pricing.detailedPricing.data.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-400">
                <thead className="border-b border-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-200">Þjónusta</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-200">Aðlagað verð</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {t.pricing.detailedPricing.data.services.map((service, idx) => (
                    <tr key={idx} className="hover:bg-gray-700/20 transition-colors">
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
          <p className="text-base text-gray-400 max-w-3xl mx-auto">
            {t.pricing.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
