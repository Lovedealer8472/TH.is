import type { Metadata } from 'next';
import { Outfit, DM_Sans, JetBrains_Mono } from 'next/font/google';
import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import StructuredData from '@/components/StructuredData';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import FloatingChatbot from '@/components/ui/FloatingChatbot';
import './globals.css';

const outfit = Outfit({ subsets: ['latin', 'latin-ext'], variable: '--font-display', display: 'swap', weight: ['400', '500', '600', '700', '800'] });
const dmSans = DM_Sans({ subsets: ['latin', 'latin-ext'], variable: '--font-sans', display: 'swap', weight: ['400', '500', '600', '700'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin', 'latin-ext'], variable: '--font-mono', display: 'swap', weight: ['400', '500', '600'] });

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const siteUrl = 'https://www.tolvuhvislarinn.is';
const defaultOgImage = `${siteUrl}/og/site.png`;

export const metadata: Metadata = {
  title: 'Tölvuviðgerðir á Austurlandi | Tölvuhvíslarinn í Neskaupstað',
  description: 'Tölvuviðgerðir, bilanagreining, SSD uppfærslur og tölvuaðstoð fyrir einstaklinga og smáfyrirtæki á Austurlandi. Hafðu samband við Daða.',
  icons: { icon: [{ url: '/icon.png', sizes: '32x32', type: 'image/png' }], apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }], shortcut: '/icon.png' },
  keywords: ['tölvuviðgerðir', 'tölvureparation', 'sérsmíði tölva', 'tækniráðgjöf', 'Neskaupstaður', 'computer repair', 'IT consulting', 'custom PC builds'],
  authors: [{ name: 'Tölvuhvíslarinn' }], creator: 'Tölvuhvíslarinn', publisher: 'Tölvuhvíslarinn',
  metadataBase: new URL('https://www.tolvuhvislarinn.is'),
  alternates: { canonical: 'https://www.tolvuhvislarinn.is' },
  openGraph: { title: 'Tölvuviðgerðir á Austurlandi | Tölvuhvíslarinn í Neskaupstað', description: 'Tölvuviðgerðir, bilanagreining, SSD uppfærslur og tölvuaðstoð fyrir einstaklinga og smáfyrirtæki á Austurlandi.', url: siteUrl, siteName: 'Tölvuhvíslarinn', locale: 'is_IS', type: 'website', images: [{ url: defaultOgImage, width: 1200, height: 630, alt: 'Tölvuhvíslarinn – Tölvuviðgerðir og sérsmíði' }] },
  twitter: { card: 'summary_large_image', title: 'Tölvuviðgerðir á Austurlandi | Tölvuhvíslarinn', description: 'Tölvuviðgerðir, bilanagreining, SSD uppfærslur og tölvuaðstoð fyrir einstaklinga og smáfyrirtæki á Austurlandi.', images: [defaultOgImage] },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="is" className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-warm-950 text-warm-100">
        <StructuredData /><GoogleAnalytics />
        <I18nProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <FloatingChatbot />
        </I18nProvider>
      </body>
    </html>
  );
}
