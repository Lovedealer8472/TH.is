import Link from 'next/link';
import is from '@/lib/translations/is.json';

const t = is;

const allProjects = [
  {
    tag: 'SaaS · Pöntunarkerfi',
    tagColor: 'text-tech-green/90',
    title: 'Muninn — Pöntunarborð fyrir litlar búðir',
    desc: 'Létt kanban-pöntunarborð fyrir búðir sem taka við sérpöntunum eða viðgerðum. Sameiginlegt borð fyrir alla starfsmenn. Viðskiptavinur flettir upp stöðu með símanúmeri. Sjálfvirkur póstur þegar varan er „Komin“. Hýst, uppfært og afritað af okkur — opnast í vafra, ekkert að setja upp.',
    features: ['Kanban-borð', 'Sjálfvirkur póstur', '/track símafletting', 'PWA · íslenskt'],
    cta: 'Skoða Muninn',
    href: '/muninn',
    external: false,
  },
  {
    tag: 'Text-to-Speech',
    tagColor: 'text-tech-green/90',
    title: 'Tölvuhvísl — Íslenskur talgervill',
    desc: 'Talgervill þjálfaður af íslenskum raddleikurum í samstarfi við RÚV og HR. Breyttu íslenskum texta í talað mál með 30+ röddum, einföldu REST API og snjallri textavinnslu sem meðhöndlar tölur, skammstafanir og fleira.\n\nVerkið er enn í vinnslu en lofar góðu.',
    features: ['30+ íslenskar raddir', '24kHz hljóðgæði', 'Einfalt REST API', 'GDPR samhæft'],
    cta: 'Hafðu samband',
    href: '/contact',
    external: false,
  },
  {
    tag: 'Android',
    tagColor: 'text-tech-orange/90',
    title: 'Campybara — Tjaldsvæði & bílastæði á Íslandi',
    desc: 'Android app sem hjálpar fólki að finna tjaldsvæði, bílastæði og áhugaverða staði á Íslandi — og skipuleggja ferðina með akstursleið og tillögum að stoppum. Notar Google Maps SDK og ber virðingu fyrir persónuvernd — engin gagnasöfnun og engar auglýsingar. Ónetpakki í boði gegnum Google Play.',
    features: ['Google Maps SDK', 'Offline virkni', 'Google Play Billing', 'Persónuvernd í fyrirrúmi'],
    cta: 'Sækja APK',
    href: 'https://www.tolvuhvislarinn.is/downloads/Campybara-1.1.0-demo.apk',
    external: true,
  },
  {
    tag: 'Vafraleikur',
    tagColor: 'text-tech-purple/90',
    title: 'Viking Saga — Landnáms-þorp RPG',
    desc: 'Vafraleikur þar sem spilari byggir upp íslenskt landnáms-þorp, stjórnar auðlindum og lifir af í víkingatíð. Spilanlegur MVP með grunnvirkni — byggingar, íbúar, árstíðir, viðburðir og auðlindastjórnun. LLM-keyrsla í gangi á Monolith þjóninum.',
    features: ['Browser-based', 'Settlement sim', 'Íslenskt þema', 'LLM á Monolith'],
    cta: 'Spila kynningu',
    href: 'https://www.tolvuhvislarinn.is/viking/',
    external: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-warm-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <header className="mb-12 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-warm-50">
            {t.projects.title}
          </h1>
          <p className="mt-3 text-warm-200 text-base sm:text-lg">
            {t.projects.subtitle}
          </p>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-primary-500/80 to-transparent rounded-full" />
        </header>

        <div className="space-y-8">
          {allProjects.map((proj) => (
            <article
              key={proj.title}
              className="group rounded-2xl border border-warm-700/50 bg-warm-800/25 backdrop-blur-sm shadow-lg shadow-black/20 overflow-hidden transition-colors duration-300 hover:border-primary-500/25 hover:bg-warm-800/35"
            >
              <div className="h-1 bg-gradient-to-r from-primary-500 via-tech-cyan to-tech-green" />

              <div className="p-7 sm:p-9">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className={`inline-block text-xs font-semibold uppercase tracking-wider ${proj.tagColor} mb-2`}>
                      {proj.tag}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-warm-50 leading-snug">
                      {proj.title}
                    </h2>
                  </div>
                </div>

                <p className="text-base text-warm-200 leading-relaxed max-w-prose mb-8 whitespace-pre-line">
                  {proj.desc}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {proj.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2.5 rounded-lg border border-warm-700/40 bg-warm-800/40 px-3.5 py-2.5"
                    >
                      <span className="text-sm text-warm-200 leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>

                {proj.cta && proj.href && (
                  <a
                    href={proj.href}
                    target={proj.external ? '_blank' : undefined}
                    rel={proj.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    {proj.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/" className="font-mono text-sm text-primary-400 hover:text-primary-300 transition-colors">
            ← cd ../heim
          </Link>
        </div>
      </div>
    </div>
  );
}
