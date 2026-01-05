import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Um Tölvuhvíslarinn – Tölvuviðgerðir í Neskaupstað',
  description: 'Kynntu þér Tölvuhvíslarinn. Persónuleg og heiðarleg tækniaðstoð með 20 ára reynslu í tölvuviðgerðum og tækniráðgjöf.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
