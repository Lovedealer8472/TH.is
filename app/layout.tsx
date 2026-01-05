import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import StructuredData from '@/components/StructuredData';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Google Search Console verification
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: 'Tölvuhvíslarinn - Tölvuviðgerðir og tækniráðgjöf í Neskaupstað',
  description: 'Tölvuviðgerðir, sérsmíði borðtölva, gagnavernd og tækniráðgjöf í Neskaupstað. Viðgerðir, uppfærslur og ráðgjöf fyrir einstaklinga og smáfyrirtæki.',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
  keywords: [
    'tölvuviðgerðir',
    'tölvureparation',
    'sérsmíði tölva',
    'tækniráðgjöf',
    'gagnavernd',
    'bilanagreining',
    'tölvusmíði',
    'Neskaupstaður',
    'computer repair',
    'IT consulting',
    'data recovery',
    'custom PC builds',
  ],
  authors: [{ name: 'Tölvuhvíslarinn' }],
  creator: 'Tölvuhvíslarinn',
  publisher: 'Tölvuhvíslarinn',
  metadataBase: new URL('https://www.tolvuhvislarinn.is'),
  alternates: {
    canonical: 'https://www.tolvuhvislarinn.is',
  },
  openGraph: {
    title: 'Tölvuhvíslarinn - Tölvuviðgerðir og tækniráðgjöf í Neskaupstað',
    description: 'Tölvuviðgerðir, sérsmíði borðtölva, gagnavernd og tækniráðgjöf í Neskaupstað. Viðgerðir, uppfærslur og ráðgjöf fyrir einstaklinga og smáfyrirtæki.',
    url: 'https://www.tolvuhvislarinn.is',
    siteName: 'Tölvuhvíslarinn',
    locale: 'is_IS',
    type: 'website',
  },
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="is" className={`${inter.variable} dark`}>
      <body className="min-h-screen flex flex-col">
        <StructuredData />
        <GoogleAnalytics />
        <I18nProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </I18nProvider>
      </body>
    </html>
  );
}
