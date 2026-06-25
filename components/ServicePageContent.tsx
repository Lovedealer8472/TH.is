import Link from 'next/link';
import type { ServicePage } from '@/lib/service-pages';
import ServiceContactBar from '@/components/ServiceContactBar';

interface ServicePageContentProps {
  page: ServicePage;
}

export default function ServicePageContent({ page }: ServicePageContentProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-400 transition-colors">
              Forsíða
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-primary-400 transition-colors">
              Þjónusta
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{page.overviewCardTitle}</span>
          </nav>

          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">{page.h1}</h1>
            <p className="text-lg text-gray-400 leading-relaxed">{page.intro}</p>
          </header>

          <ServiceContactBar serviceName={page.overviewCardTitle} />

          <div className="mt-10 mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
              Þjónustusvæði
            </h2>
            <p className="text-gray-400">
              {page.serviceAreas.join(' · ')}
            </p>
          </div>

          <div className="space-y-10 mt-12">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <InfoBox title="Verð" content={page.pricing} />
              <InfoBox title="Tími" content={page.timeline} />
              <InfoBox title="Fyrir hverja" content={page.audience} />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-100 mb-6">Algengar spurningar</h2>
              <dl className="space-y-6">
                {page.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-lg border border-gray-700/50 bg-gray-800/30 p-5"
                  >
                    <dt className="font-semibold text-gray-100 mb-2">{item.question}</dt>
                    <dd className="text-gray-400 leading-relaxed">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <div className="mt-12">
            <ServiceContactBar serviceName={page.overviewCardTitle} />
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            <Link href="/services" className="text-primary-400 hover:text-primary-300">
              ← Sjá allar þjónustur
            </Link>
            {' · '}
            <Link href="/pricing" className="text-primary-400 hover:text-primary-300">
              Verðskrá
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

function InfoBox({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-lg border border-gray-700/50 bg-gray-800/30 p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed">{content}</p>
    </div>
  );
}
