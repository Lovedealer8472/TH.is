import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hafðu samband – Tölvuhvíslarinn',
  description: 'Hafðu samband við Tölvuhvíslarann í Neskaupstað. Sími: 848-6755, netfang: tolvuhvislarinn@gmail.com',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
