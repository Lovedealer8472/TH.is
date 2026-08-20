import Link from 'next/link';
import Image from 'next/image';
import is from '@/lib/translations/is.json';

const t = is;

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-warm-950 border-b border-warm-800/50">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(oklch(65% 0.17 158 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(65% 0.17 158 / 0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/3]">
                <div className="absolute -inset-4 rounded-2xl opacity-20 blur-3xl" style={{ background: 'oklch(60% 0.17 156 / 0.4)' }} aria-hidden="true" />
                <Image src="/chatgpt-image.png" alt="Daði — Tölvuhvíslarinn" fill className="object-cover rounded-2xl shadow-2xl" sizes="(max-width: 640px) 384px, (max-width: 1024px) 448px, 512px" priority />
                <div className="absolute -bottom-2 -right-2 bg-warm-800/90 backdrop-blur border border-warm-600/50 rounded-lg px-3 py-1.5 font-mono text-xs text-primary-400">
                  <span className="text-primary-500">~/daði</span><span className="terminal-caret ml-0.5" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-4"><span className="text-warm-400">{'>'}</span> tölvuviðgerðir á austurlandi</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-50 leading-tight tracking-tight">{t.home.hero.titleMain}<span className="font-mono text-primary-500">.is</span></h1>
              <p className="mt-5 text-lg sm:text-xl text-warm-300 max-w-xl lg:max-w-none leading-relaxed">{t.home.hero.subtitle}</p>
              <p className="mt-3 text-base text-warm-400 max-w-lg lg:max-w-none">{t.home.hero.trustLine}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-500 transition-all duration-200 shadow-lg shadow-primary-600/20 hover:shadow-primary-500/30 hover:-translate-y-0.5">{t.home.cta.primary}<span className="font-mono text-primary-200 group-hover:translate-x-0.5 transition-transform">→</span></Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3.5 bg-warm-800/80 text-warm-200 font-medium rounded-xl border border-warm-600/40 hover:border-primary-500/40 hover:text-primary-300 transition-all duration-200">{t.home.cta.secondary}<span className="font-mono text-warm-400">↓</span></Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href="tel:+3548486755" className="inline-flex items-center gap-1.5 text-sm text-warm-400 hover:text-primary-400 transition-colors font-mono"><span className="text-primary-500">$</span> hringja</a>
                <span className="text-warm-600">·</span>
                <a href="https://wa.me/3548486755" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-warm-400 hover:text-primary-400 transition-colors font-mono"><span className="text-primary-500">$</span> whatsapp</a>
                <span className="text-warm-600">·</span>
                <a href="mailto:hjalp@tolvuhvislarinn.is" className="inline-flex items-center gap-1.5 text-sm text-warm-400 hover:text-primary-400 transition-colors font-mono"><span className="text-primary-500">$</span> netfang</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Grant Announcement ── */}
      <section className="py-10 sm:py-14 bg-warm-950 border-b border-[oklch(19%_0.007_175_/_0.5)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grant-card-enter group relative rounded-2xl bg-gradient-to-br from-[oklch(60%_0.17_156_/_0.4)] via-[oklch(65%_0.13_195_/_0.25)] to-[oklch(42%_0.12_158_/_0.3)] p-px transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <div className="rounded-2xl bg-[oklch(19%_0.007_175_/_0.7)] backdrop-blur-sm p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-7 transition-shadow duration-300 group-hover:shadow-[0_0_28px_-8px_oklch(65%_0.17_158_/_0.35)]">
              <div className="shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[oklch(15%_0.005_180_/_0.6)] border border-[oklch(24%_0.008_170_/_0.4)] p-2.5">
                <Image
                  src="/logos/uppbyggingarsjodur-austurlands.png"
                  alt="Merki Uppbyggingarsjóðs Austurlands"
                  width={48}
                  height={36}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <p className="font-mono text-xs text-primary-500 tracking-wider uppercase mb-3">{`// frétt`}</p>
                <p className="text-warm-100 text-base sm:text-lg leading-relaxed">
                  Tölvuhvíslarinn hlaut styrk úr Uppbyggingarsjóði Austurlands fyrir árið 2026 — eitt af 54 verkefnum sem hlutu styrk af 97 umsóknum sem bárust.
                </p>
                {/* Amount — its own sentence, trivially removable if the figure shouldn't be public */}
                <p className="text-warm-300 text-sm sm:text-base mt-2 leading-relaxed">
                  Styrkurinn nam 800.000 kr.
                </p>
                <p className="text-warm-400 text-sm sm:text-base mt-2 leading-relaxed">
                  Verkefninu er nú lokið og lokaskýrslu hefur verið skilað.
                </p>
                <Link href="/news" className="group/link inline-flex items-center gap-1.5 mt-4 text-sm font-mono text-primary-400 hover:text-primary-300 transition-colors">
                  Lesa meira í fréttum<span className="inline-block group-hover/link:translate-x-0.5 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services / Process ── */}
      <section className="py-14 sm:py-20 bg-warm-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-2">{`// hvernig virkar þetta`}</p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-warm-50">Þrjú skref frá vandamáli<br /><span className="text-primary-400">að lausn</span></h2>
            </div>
            <p className="text-warm-400 max-w-lg text-base leading-relaxed lg:text-right">Ekkert flókið ferli. Þú sendir mér skilaboð, ég greini vandamálið og laga það, eða segi þér heiðarlega ef ekkert þarf að gera.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { num: '01', title: 'Hafðu samband', desc: 'Hringdu, sendu WhatsApp-skilaboð eða tölvupóst. Lýstu vandamálinu á þínu eigin máli. Ég tala ekki tæknimál nema þú viljir það.', cli: '$ senda_skilaboð --þægilegt', accent: true },
              { num: '02', title: 'Greining', desc: 'Ég skoða tölvuna, finn hvað er að og læt þig vita af kostnaðinum áður en vinna hefst. Engin óvænt gjöld.', cli: '$ greina --heiðarlega --án-óvæntra-gjalda', accent: false },
              { num: '03', title: 'Lagað', desc: 'Tölvan er lagfærð, uppfærð eða smíðuð, og þú færð hana til baka með skýrri útskýringu. Engar plásturslausnir.', cli: '$ laga --varanlega  # engin plásturlausn', accent: false },
            ].map((step) => (
              <div key={step.num} className={`rounded-2xl border p-8 lg:p-10 group transition-all duration-300 ${step.accent ? 'bg-warm-800/60 border-primary-500/20 hover:border-primary-500/40' : 'bg-warm-800/40 border-warm-700/30 hover:border-warm-600/50'}`}>
                <span className={`font-display text-5xl font-bold transition-colors ${step.accent ? 'text-primary-500/20 group-hover:text-primary-500/30' : 'text-warm-700/40'}`}>{step.num}</span>
                <h3 className="font-display text-xl font-bold text-warm-100 mt-3">{step.title}</h3>
                <p className="text-warm-400 text-base mt-2 leading-relaxed">{step.desc}</p>
                <div className={`mt-4 font-mono text-xs ${step.accent ? 'text-primary-500' : 'text-warm-500'}`}>{step.cli}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            {[{ href: '/services/tolvuvidgerdir', label: t.home.services.repairs.title }, { href: '/services/sersmidid-bordtolva', label: t.home.services.custom.title }, { href: '/services/taekniaadstod-fyrirtaeki', label: t.home.services.consulting.title }].map((svc) => (
              <Link key={svc.href} href={svc.href} className="font-mono text-sm text-warm-400 hover:text-primary-400 transition-colors border border-warm-700/40 hover:border-primary-500/30 rounded-full px-4 py-1.5"><span className="text-primary-500">/</span>{svc.label.toLowerCase()}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust ── */}
      <section className="py-16 sm:py-20 bg-warm-950 border-y border-warm-800/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-6">{`/* traust */`}</p>
          <blockquote className="font-display text-2xl sm:text-3xl font-medium text-warm-100 leading-relaxed">&ldquo;Persónuleg og heiðarleg tækniaðstoð — engin tæknimál, bara lausnir sem virka.&rdquo;</blockquote>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-warm-400">
            {[{ badge: 'KT', val: '460525-2250' }, { badge: 'VSK', val: '156997' }, { badge: '20+', val: 'ára reynsla' }].map((i) => (
              <div key={i.badge} className="flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center font-mono text-xs text-primary-400">{i.badge}</span><span>{i.val}</span></div>
            ))}
          </div>
          <div className="mt-10 inline-flex items-center gap-2 bg-warm-800/50 border border-primary-500/15 rounded-xl px-5 py-3">
            <span className="font-mono text-primary-400 text-lg">✓</span>
            <span className="text-warm-200 text-sm">Ekkert fast greiningargjald — þú borgar bara fyrir lausnina</span>
          </div>
        </div>
      </section>


      {/* ── Service Area + CTA ── */}
      <section className="py-16 sm:py-24 bg-warm-950 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04] blur-3xl pointer-events-none" style={{ background: 'oklch(60% 0.17 156)' }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-4">{`/* þjónustusvæði */`}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-warm-50 mb-3">{t.home.serviceArea.heading}</h2>
          <p className="text-warm-400 leading-relaxed mb-5 max-w-xl mx-auto">{t.home.serviceArea.description}</p>
          <p className="font-mono text-sm text-primary-400/90 font-medium mb-12">{t.home.serviceArea.areas}</p>
          <Link href="/contact" className="group inline-flex items-center gap-3 px-10 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-500 transition-all duration-200 shadow-xl shadow-primary-600/20 hover:shadow-primary-500/30 hover:-translate-y-0.5 text-lg">{t.home.cta.primary}<span className="font-mono text-primary-200 group-hover:translate-x-1 transition-transform">→</span></Link>
          <p className="mt-6 font-mono text-xs text-warm-600">$ telnet tolvuhvislarinn.is 80 <span className="text-warm-700">{'// þetta er brandari, ekki reyna þetta'}</span></p>
        </div>
      </section>
    </div>
  );
}
