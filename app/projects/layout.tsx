import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verkefni og hugbúnaðarlausnir – Tölvuhvíslarinn',
  description:
    'Skoðaðu verkefnin sem ég hef verið að þróa – sérlausnir, smáforrit og hugmyndir í vinnslu.',
  alternates: {
    canonical: 'https://www.tolvuhvislarinn.is/projects',
  },
  openGraph: {
    title: 'Tölvuhvíslarinn – Verkefni og hugbúnaðarlausnir',
    description:
      'Hugbúnaðarverkefni, sérlausnir og tæknilegar tilraunir frá Tölvuhvíslaranum.',
    url: 'https://www.tolvuhvislarinn.is/projects',
    siteName: 'Tölvuhvíslarinn',
    locale: 'is_IS',
    type: 'website',
    images: [
      {
        url: '/og/projects.png',
        width: 1200,
        height: 630,
        alt: 'Tölvuhvíslarinn – Verkefni og hugbúnaðarlausnir',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tölvuhvíslarinn – Verkefni og hugbúnaðarlausnir',
    description:
      'Hugbúnaðarverkefni, sérlausnir og tæknilegar tilraunir frá Tölvuhvíslaranum.',
    images: ['/og/projects.png'],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
