import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Muninn pöntunarborð – Tölvuhvíslarinn',
  description: 'Muninn er einfalt pöntunarborð fyrir verslanir sem bíða eftir vöru, frá Tölvuhvíslaranum.',
  alternates: { canonical: 'https://www.tolvuhvislarinn.is/muninn' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
