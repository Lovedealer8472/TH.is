import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fréttir – Tölvuhvíslarinn',
  description: 'Fréttir og tilkynningar frá Tölvuhvíslaranum í Neskaupstað.',
  alternates: { canonical: 'https://www.tolvuhvislarinn.is/news' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
