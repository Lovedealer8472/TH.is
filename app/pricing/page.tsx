'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

type Row = { name: string; price: string };
type Section = { title: string; services: Row[] };

// "Magnafsláttur 4–5 spólur / 6–9 / 10–14 / 15+" + "-7% / -10% / -15% / -20%" -> one row per tier (review #13).
function expandTiers(rows: Row[]): Row[] {
  return rows.flatMap((r) => {
    const names = r.name.split(' / ');
    const prices = r.price.split(' / ');
    if (names.length < 3 || names.length !== prices.length) return [r];
    const prefix = names[0].match(/^(.*?)(\d.*)$/)?.[1] ?? '';
    return names.map((n, i) => ({ name: i === 0 ? n : `${prefix}${n}`, price: prices[i] }));
  });
}

// Order while VHS is the main earner: video first (review #13). Keys match detailedPricing in the translations.
const ORDER = ['video', 'general', 'priority', 'hourly', 'desktop', 'laptop', 'cooling', 'security', 'data'] as const;

export default function PricingPage() {
  const { t, language } = useI18n();
  const dp = t.pricing.detailedPricing as unknown as Record<string, Section> & typeof t.pricing.detailedPricing;
  const table = (t.pricing as unknown as { table?: { service?: string; price?: string } }).table;
  const head = {
    service: table?.service ?? (language === 'en' ? 'Service' : 'Þjónusta'),
    price: table?.price ?? (language === 'en' ? 'Price' : 'Verð'),
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-warm-50 mb-5">{t.pricing.title}</h1>
          <p className="text-xl text-warm-200 max-w-3xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        {/* Jump links */}
        <nav aria-label={language === 'en' ? 'Price list sections' : 'Kaflar verðskrár'} className="mb-12 flex flex-wrap justify-center gap-2">
          {ORDER.map((key) => (
            <a key={key} href={`#${key}`}
              className={`text-sm rounded-full border px-4 py-1.5 transition-colors ${key === 'video' ? 'border-primary-500/60 text-primary-300 hover:bg-primary-500/10' : 'border-warm-700 text-warm-300 hover:border-primary-500/50 hover:text-primary-300'}`}>
              {dp[key].title}
            </a>
          ))}
        </nav>

        <div className="space-y-12">
          {ORDER.map((key) => (
            <section key={key} id={key} className="scroll-mt-24 bg-warm-800/30 backdrop-blur-sm rounded-xl border border-warm-700/50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-warm-50 mb-2">{dp[key].title}</h2>

              {key === 'video' && (
                /* Time-limited Christmas offer (ends 31.12.2026): remove this block and the promo keys afterwards */
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
                  <Link href="/contact?efni=vhs"
                    className="mt-4 inline-flex items-center px-6 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-500 transition-all duration-200 shadow-lg shadow-primary-600/20">
                    {t.pricing.detailedPricing.video.promo.cta}
                  </Link>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-warm-200">
                  <thead className="border-b border-warm-700/50">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-warm-100">{head.service}</th>
                      <th className="text-right py-3 px-4 font-semibold text-warm-100">{head.price}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warm-700/50">
                    {expandTiers(dp[key].services).map((service, idx) => (
                      <tr key={idx} className="hover:bg-warm-700/20 transition-colors">
                        <td className="py-3 px-4">{service.name}</td>
                        <td className="py-3 px-4 text-right text-primary-400 font-semibold whitespace-nowrap">{service.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-base text-warm-200 max-w-3xl mx-auto">{t.pricing.footer}</p>
        </div>
      </div>
    </div>
  );
}
