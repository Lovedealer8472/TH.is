import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verðskrá – Tölvuhvíslarinn',
  description: 'Skýr verðskrá fyrir tölvuviðgerðir, sérsmíði, tækniráðgjöf og VHS yfirfærslu á USB. Allt verð í íslenskum krónum.',
  alternates: { canonical: 'https://www.tolvuhvislarinn.is/pricing' },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
