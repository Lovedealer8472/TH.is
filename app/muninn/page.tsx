import Link from 'next/link';

export default function MuninnPage() {
  return (
    <div className="flex flex-col bg-warm-950">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-warm-950 border-b border-warm-800/50">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(oklch(65% 0.17 158 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(65% 0.17 158 / 0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-28 text-center">
          <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-4">Nýtt frá Tölvuhvíslaranum</p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-warm-50 leading-tight tracking-tight mb-6">
            Muninn
          </h1>
          <p className="text-xl sm:text-2xl text-warm-200 max-w-2xl mx-auto leading-relaxed mb-8">
            Einfalt pöntunarborð fyrir búðir sem bíða eftir vöru — ekki bókhaldskerfi.
          </p>
          <p className="text-lg text-warm-400 max-w-xl mx-auto leading-relaxed mb-10">
            Sameiginlegt borð fyrir allt starfsfólk. Viðskiptavinur flettir upp stöðu með símanúmeri. Sjálfvirkur póstur þegar varan er komin. Opnast í vafra — ekkert að setja upp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://muninn.tolvuhvislarinn.is" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-500 transition-all duration-200 shadow-lg shadow-primary-600/20">
              Skoða prufu <span className="font-mono">→</span>
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-warm-800/80 text-warm-200 font-medium rounded-xl border border-warm-600/40 hover:border-primary-500/40 hover:text-primary-300 transition-all duration-200">
              Prófa frítt í 14 daga
            </Link>
          </div>
          <p className="mt-4 text-sm text-warm-500">Uppsetning tekur ~10 mínútur — við sjáum um allt. Engin binding.</p>
        </div>
      </section>

      {/* ── Hvað er Muninn / er ekki ── */}
      <section className="py-16 sm:py-24 bg-warm-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-6">{`// hvað er muninn?`}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h3 className="font-display text-xl font-bold text-primary-400 mb-4">Muninn er</h3>
              <ul className="space-y-3 text-warm-200">
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">✓</span> Sameiginlegt pöntunarborð</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">✓</span> Birgja-/viðgerðarflæði með stöðum</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">✓</span> Sjálfvirkur og handvirkur póstur til viðskiptavina</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">✓</span> Opinber staða með símanúmeri (/track)</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">✓</span> Hýst, uppfært og backed up af okkur</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-warm-500 mb-4">Muninn er ekki</h3>
              <ul className="space-y-3 text-warm-400">
                <li className="flex items-start gap-2"><span className="text-warm-600 mt-1">✗</span> Kassakerfi (POS)</li>
                <li className="flex items-start gap-2"><span className="text-warm-600 mt-1">✗</span> Bókhaldskerfi (Uniconta, Stólpi)</li>
                <li className="flex items-start gap-2"><span className="text-warm-600 mt-1">✗</span> Lager-/birgðakerfi</li>
                <li className="flex items-start gap-2"><span className="text-warm-600 mt-1">✗</span> ERP fyrir stórar keðjur</li>
                <li className="flex items-start gap-2"><span className="text-warm-600 mt-1">✗</span> &ldquo;Frítt Excel&rdquo; með samvinnu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hvernig virkar ── */}
      <section className="py-16 sm:py-24 bg-warm-950 border-y border-warm-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-6">{`// hvernig virkar það?`}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-50 mb-10">Ferlið í 6 skrefum</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              { status: 'Móttekið', desc: 'Ný beiðni móttekin' },
              { status: 'Í vinnslu', desc: 'Unnið í málinu' },
              { status: 'Pantað', desc: 'Sent til birgja' },
              { status: 'Staðfest', desc: 'Birgir staðfestir' },
              { status: 'Komið', desc: 'Tilbúin — póstur sendur!', accent: true },
              { status: 'Lokið', desc: 'Afhent viðskiptavini' },
            ].map((step) => (
              <div key={step.status} className={`p-4 rounded-lg border text-center ${step.accent ? 'bg-primary-500/10 border-primary-500/30' : 'bg-warm-800/40 border-warm-700/30'}`}>
                <div className={`font-display font-bold text-sm mb-1 ${step.accent ? 'text-primary-400' : 'text-warm-200'}`}>{step.status}</div>
                <div className="text-xs text-warm-400">{step.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-warm-400">Sjálfvirkur póstur fer út þegar staða verður <span className="text-primary-400 font-semibold">Komið</span>. Handvirkur &ldquo;Senda póst&rdquo; hnappur er til fyrir aðrar stöður.</p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 sm:py-24 bg-warm-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-6">{`// hvað færðu?`}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-50 mb-10">Eiginleikar</h2>

          <div className="space-y-10">
            <div>
              <h3 className="font-display text-lg font-bold text-warm-100 mb-4">Kjarninn</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '📬', title: 'Sjálfvirkur póstur', desc: 'Viðskiptavinur fær tölvupóst um leið og varan er Komin' },
                  { icon: '🗂️', title: 'Sameiginlegt borð', desc: 'Engin post-it, engin Excel-skjöl á víð og dreif' },
                  { icon: '📞', title: 'Sjálfsafgreiðsla', desc: 'Viðskiptavinur flettir upp með símanúmeri á /track — færri símtöl' },
                  { icon: '🔄', title: 'Birgjaflæði', desc: 'Smíðað fyrir bið eftir vöru, ekki walk-in kassasölu' },
                ].map((f) => (
                  <div key={f.title} className="bg-warm-800/40 border border-warm-700/30 rounded-xl p-5">
                    <div className="text-2xl mb-2">{f.icon}</div>
                    <div className="font-bold text-warm-100 mb-1">{f.title}</div>
                    <div className="text-sm text-warm-400">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-warm-100 mb-4">Afgreiðsla</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-warm-200">
                {['Drag-and-drop á borði', 'Leit eftir símanúmeri / nafni', 'Merki fyrir gömul mál', 'Komið áberandi sem „til afhendingar"', 'Myndir og viðhengi', 'Ummæli og breytingasaga', 'Prenta pöntun', 'QR-kóði fyrir /track'].map((f) => (
                  <div key={f} className="flex items-center gap-2"><span className="text-primary-500">•</span> {f}</div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-warm-100 mb-4">Tæknilegt</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-warm-200">
                {['📱 Virkar í síma og tölvu (PWA)', '🌓 Ljóst/dökkt þema', '🇮🇸 Alíslenskt viðmót', 'Hýst á okkar neti — ekkert að setja upp', 'Stjóri og Notandi aðgangsstig', 'CSV-útflutningur (Stjóri)'].map((f) => (
                  <div key={f} className="flex items-center gap-2"><span className="text-primary-500">•</span> {f}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-16 sm:py-24 bg-warm-950 border-y border-warm-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-6 text-center">{`// verð`}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-50 mb-10 text-center">Einfalt verð — engin binding</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-warm-800/50 border border-warm-700/30 rounded-xl p-8 text-center">
              <div className="text-sm text-warm-400 mb-1">Mánaðarlega</div>
              <div className="font-display text-4xl font-bold text-warm-50 mb-2">11.900 kr</div>
              <div className="text-sm text-warm-400">/ mánuði</div>
            </div>
            <div className="bg-warm-800/50 border border-primary-500/30 rounded-xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">2 mánuðir frítt</div>
              <div className="text-sm text-warm-400 mb-1 mt-2">Ársáskrift</div>
              <div className="font-display text-4xl font-bold text-warm-50 mb-2">119.000 kr</div>
              <div className="text-sm text-warm-400">/ ár</div>
            </div>
          </div>

          <div className="text-center space-y-2 text-sm text-warm-400 max-w-md mx-auto">
            <p><span className="text-warm-200 font-semibold">Uppsetning:</span> 24.900 kr — frítt fyrir fyrstu búðirnar</p>
            <p><span className="text-warm-200 font-semibold">Prufa:</span> 14 dagar, frítt, ekkert kreditkort</p>
            <p><span className="text-warm-200 font-semibold">Innifalið:</span> Hýsing, uppfærslur, þitt undirlén</p>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-500 transition-all duration-200 shadow-xl shadow-primary-600/20">
              Prófaðu frítt í 14 daga <span className="font-mono">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Samanburður ── */}
      <section className="py-16 sm:py-24 bg-warm-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-6">{`// af hverju muninn?`}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-50 mb-10">Samanburður</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-warm-200">
              <thead className="border-b border-warm-700">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-warm-100">Valkostur</th>
                  <th className="text-left py-3 px-4 font-semibold text-warm-100">Kostnaður</th>
                  <th className="text-left py-3 px-4 font-semibold text-warm-100">Vandinn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-800">
                {[
                  { opt: 'Excel / post-it', cost: '"Frítt"', problem: 'Ekkert sameiginlegt borð, enginn póstur, pantanir týnast' },
                  { opt: 'Erlent viðgerðakerfi', cost: '~7.000–21.000 kr/mán', problem: 'Enska, USD, hentar illa íslensku birgjaflæði' },
                  { opt: 'ERP (Uniconta / Stólpi)', cost: '50.000+ kr/mán', problem: 'Of stórt — þetta er afgreiðsluborð' },
                  { opt: 'Muninn', cost: '11.900 kr/mán', problem: 'Rétt stærð: íslenskt, póstur, símafletting, hýst af okkur', highlight: true },
                ].map((row) => (
                  <tr key={row.opt} className={row.highlight ? 'bg-primary-500/5' : ''}>
                    <td className={`py-3 px-4 ${row.highlight ? 'text-primary-400 font-bold' : ''}`}>{row.opt}</td>
                    <td className="py-3 px-4 text-warm-400">{row.cost}</td>
                    <td className="py-3 px-4 text-warm-400">{row.problem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Fyrir hverja? ── */}
      <section className="py-16 sm:py-24 bg-warm-950 border-y border-warm-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-6">{`// fyrir hverja?`}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-50 mb-6">Fyrir hverja búð?</h2>
          <p className="text-warm-300 leading-relaxed mb-8">
            Tölvuverslanir og viðgerðir · Hjólverslanir · Byggingavörur · Verkfæri og vélar · Heimilistæki með verkstæði · Sérsaumur, skart, gleraugu
          </p>
          <div className="bg-warm-800/30 border border-warm-700/30 rounded-xl p-6 text-sm text-warm-300 leading-relaxed">
            <span className="text-primary-400 font-semibold">Besta líkan:</span> 1–8 starfsmenn · 5–80 opnar pantanir · 3 dagar–12 vikur bið · birgir í millinu · pickup-shelf
          </div>
          <p className="mt-4 text-sm text-warm-500">Hentar illa: ELKO-keðjur, hrein vefverslun, veitingastaðir, verktakar sem lifa í Stólpi.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-24 bg-warm-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <p className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-6">{`// algengar spurningar`}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-50 mb-10">FAQ</h2>

          <div className="space-y-6">
            {[
              { q: 'Þarf að setja eitthvað upp í búðinni?', a: 'Nei. Opnaðu vafra — Chrome eða Edge mælt með. Hægt að festa sem app í heimaskjá (PWA).' },
              { q: 'Getur viðskiptavinurinn séð stöðu án innskráningar?', a: 'Já — símanúmer á /track. Birtir pöntunarnúmer, vöru, stöðu og áætlaða komu — ekki nafn, netfang eða innri athugasemdir.' },
              { q: 'Sendir kerfið reikninga?', a: 'Nei. Muninn er ekki bókhald. CSV-útflutningur er til ef bókhald þarf tölur.' },
              { q: 'Hvað gerist við gögn ef við hættum?', a: 'Ræðum útflutning; við eyðum ekki gögnum án samkomulags.' },
              { q: 'Er þetta öruggt?', a: 'HTTPS, aðskilin aðgangsstig, hýst á okkar neti með öryggisuppfærslum. Engar kreditkortaupplýsingar í kerfinu.' },
              { q: 'Er Muninn sama og Tölvuhvísl (TTS)?', a: 'Nei — Muninn er pöntunarborð fyrir verslanir. Tölvuhvísl er raddgervill (texti í tal). Sama fyrirtæki, mismunandi vörur.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-warm-800/30 border border-warm-700/30 rounded-xl p-5">
                <div className="font-bold text-warm-100 mb-2">{faq.q}</div>
                <div className="text-warm-300 text-sm leading-relaxed">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote + CTA ── */}
      <section className="py-16 sm:py-24 bg-warm-950 border-t border-warm-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <blockquote className="font-display text-2xl sm:text-3xl font-medium text-warm-100 leading-relaxed mb-8">
            &ldquo;Er einhver í búðinni að halda utan um pantanir í Excel eða á post-it? Ég smíðaði kerfi sem sendir sjálfkrafa póst þegar varan er komin.&rdquo;
          </blockquote>
          <p className="text-warm-400 mb-10">— Guðmundur Daði Árnþórsson, Tölvuhvíslarinn</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://muninn.tolvuhvislarinn.is" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-500 transition-all duration-200 shadow-lg shadow-primary-600/20">
              Skoða lifandi prufu <span className="font-mono">→</span>
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-warm-800/80 text-warm-200 font-medium rounded-xl border border-warm-600/40 hover:border-primary-500/40 hover:text-primary-300 transition-all duration-200">
              Prófa frítt í 14 daga
            </Link>
          </div>

          <div className="text-sm text-warm-500 space-y-1">
            <p>dadi@tolvuhvislarinn.is · 848 6755</p>
            <p>Tölvuhvíslarinn ehf. · KT 460525-2250</p>
            <p>Tölvuviðgerðir · Sérsmíði · Tækniráðgjöf · Neskaupstaður / þjóna öllu landi</p>
          </div>

          <div className="mt-12 pt-8 border-t border-warm-800/50">
            <Link href="/" className="font-mono text-sm text-primary-400 hover:text-primary-300 transition-colors">← cd ../heim</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
