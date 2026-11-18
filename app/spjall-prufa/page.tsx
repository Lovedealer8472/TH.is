import type { Metadata } from 'next';
import ChatWidget from '@/components/ChatWidget';

// Hidden test page for the chat assistant (18.11.2026). Not linked anywhere, not in the sitemap, noindex.
export const metadata: Metadata = {
  title: 'Spjall prufa',
  robots: { index: false, follow: false },
};

export default function ChatTestPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-2xl font-bold text-warm-50 mb-3">Spjall, prufuútgáfa</h1>
      <p className="text-warm-300 mb-2">
        Þessi síða er ekki tengd neins staðar. Prófaðu spjallið neðst í hægra horninu. Spurðu eðlilegra spurninga, og reyndu líka að plata það.
      </p>
      <p className="text-warm-400 text-sm">Öll samtöl eru skráð á þjóninum svo hægt sé að fara yfir svörin.</p>
      <ChatWidget startOpen />
    </section>
  );
}
