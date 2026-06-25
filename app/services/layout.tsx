import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Þjónusta – Tölvuviðgerðir og tækniaðstoð á Austurlandi | Tölvuhvíslarinn',
  description:
    'Yfirlit yfir þjónustu Tölvuhvíslarans: tölvuviðgerðir, fartölvuviðgerðir, SSD uppfærslur, sérsmíði borðtölva, VHS stafræning og tækniráðgjöf í Neskaupstað.',
  alternates: {
    canonical: 'https://www.tolvuhvislarinn.is/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
