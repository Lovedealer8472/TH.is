import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePageContent from '@/components/ServicePageContent';
import {
  getAllServiceSlugs,
  getServicePage,
  getServicePagePath,
} from '@/lib/service-pages';

const siteUrl = 'https://www.tolvuhvislarinn.is';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getServicePage(params.slug);
  if (!page) {
    return {};
  }

  const url = `${siteUrl}${getServicePagePath(params.slug)}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: 'Tölvuhvíslarinn',
      locale: 'is_IS',
      type: 'website',
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const page = getServicePage(params.slug);
  if (!page) {
    notFound();
  }

  return <ServicePageContent page={page} />;
}
