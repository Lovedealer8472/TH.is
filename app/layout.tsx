import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Google Search Console verification
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: 'Tölvuhvíslarinn - Tölvuviðgerðir og tækniráðgjöf',
  description: 'Tölvuviðgerðir, sérsmíði borðtölva, gagnavernd og tækniráðgjöf í Neskaupstað. Viðgerðir, uppfærslur og ráðgjöf fyrir einstaklinga og smáfyrirtæki.',
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
        <GoogleAnalytics />
        <I18nProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
