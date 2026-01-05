import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Þjónusta – Tölvuhvíslarinn',
  description: 'Tölvuviðgerðir, sérsmíði borðtölva, gagnavernd, öryggi og tækniráðgjöf. Yfirlit yfir allar þjónustur sem Tölvuhvíslarinn býður upp á.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
