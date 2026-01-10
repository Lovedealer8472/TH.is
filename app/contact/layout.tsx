import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hafðu samband – Tölvuhvíslarinn',
  description: 'Hafðu samband við Tölvuhvíslarann Í Neskaupstað. Sími: 848-6755, netfang: dadi@tolvuhvislarinn.is',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
