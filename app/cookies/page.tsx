export const metadata = {
  title: 'Vefkökur - Tölvuhvíslarinn',
  description: 'Vefkökustefna Tölvuhvíslarans',
};

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-8">Vefkökur</h1>
      
      <div className="prose prose-invert max-w-none">
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">1. Hvað eru vefkökur?</h2>
            <p className="mb-4">
              Vefkökur (e. cookies) eru litlar textaskrár sem vefsíður geyma í tölvunni þinni eða tæki þegar þú 
              heimsækir vefsíður. Þær gera vefsíðum kleift að muna upplýsingar um notendur og bæta 
              notendaupplifun.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2. Hvaða vefkökur notum við?</h2>
            <p className="mb-4">
              Á vefsíðu Tölvuhvíslarans notum við aðeins nauðsynlegar vefkökur sem eru mikilvægar fyrir 
              virkni vefsíðunnar:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-100 mb-3">Nauðsynlegar vefkökur</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Málstillingar:</strong> Vefkaka sem geymir valið tungumál (íslenska/enska) 
                  til að muna stillingar þínar milli heimsókna
                </li>
                <li>
                  <strong>Öryggi:</strong> Vefkökur sem tryggja öryggi og stöðugleika vefsíðunnar
                </li>
              </ul>
            </div>

            <p className="mb-4">
              <strong>Við notum ekki:</strong>
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Greiningarvirkni (analytics) eins og Google Analytics</li>
              <li>Auglýsingavirkni eða markvissar auglýsingar</li>
              <li>Samfélagsmiðlavefkökur (social media cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">3. Tilgangur vefkaka</h2>
            <p className="mb-4">
              Vefkökurnar sem við notum eru nauðsynlegar til að:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Muna tungumálsstillingar þínar</li>
              <li>Tryggja öryggi og virkni vefsíðunnar</li>
              <li>Bæta notendaupplifun</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">4. Stjórnun vefkaka</h2>
            <p className="mb-4">
              Þú getur stjórnað eða eytt vefkökum í vafrastillingum þínum. Hér eru leiðbeiningar fyrir 
              algengustu vafrana:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li><strong>Google Chrome:</strong> Stillingsvalmynd → Einkaaðgangur og öryggi → Vefkaka</li>
              <li><strong>Mozilla Firefox:</strong> Valmynd → Stillingar → Einkaaðgangur og öryggi → Vefkaka</li>
              <li><strong>Safari:</strong> Stillingar → Einkaaðgangur → Blokkun vefkaka</li>
              <li><strong>Microsoft Edge:</strong> Stillingsvalmynd → Einkaaðgangur → Vefkaka</li>
            </ul>
            <p className="mb-4">
              <strong>Ábending:</strong> Ef þú eyðir eða blokkar vefkökum getur sum virkni á vefsíðunni ekki 
              virkað eins og búist var við.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">5. Vefkökur frá þriðja aðila</h2>
            <p className="mb-4">
              Vefsíðan notar ekki vefkökur frá þriðja aðila (eins og auglýsinga- eða greiningarvefkökur). 
              Allar vefkökur sem notaðar eru eru eingöngu fyrir virkni vefsíðunnar sjálfrar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">6. Breytingar á stefnu</h2>
            <p className="mb-4">
              Ef við byrjum að nota fleiri vefkaka eða breyta notkun vefkaka, verður þessi síða uppfærð 
              og þú verður tilkynnt um breytingarnar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">7. Hafðu samband</h2>
            <p className="mb-4">
              Ef þú hefur spurningar um notkun vefkaka á vefsíðunni, hafðu samband:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="mb-2"><strong>Tölvuhvíslarinn</strong></p>
              <p className="mb-2">Netfang: <a href="mailto:dadi@tolvuhvislarinn.is" className="text-primary-400 hover:text-primary-300" data-email="si.nilravsluhvlot@idad">dadi&#64;tolvuhvislarinn&#46;is</a></p>
              <p className="mb-2">Sími: <a href="tel:848-6755" className="text-primary-400 hover:text-primary-300">848-6755</a></p>
            </div>
          </section>

          <section className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              Síðast uppfært: {new Date().toLocaleDateString('is-IS', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
