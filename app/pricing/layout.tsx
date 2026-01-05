import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verðskrá – Tölvuhvíslarinn',
  description: 'Skýr og gagnsæ verðskrá fyrir tölvuviðgerðir, sérsmíði, gagnavernd og tækniráðgjöf. Allt verð í íslenskum krónum.',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
