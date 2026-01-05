'use client';

import { useI18n } from '@/lib/i18n';

export default function PricingPage() {
  const { t } = useI18n();

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
            {t.pricing.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {t.pricing.intro}
          </p>
        </div>

        <div className="space-y-12">
          {/* Disclaimer */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p className="text-gray-300 mb-2">
              Allt verð er gefið upp í íslenskum krónum (ISK).
            </p>
            <p className="text-gray-300">
              Íhlutir og varahlutir eru ekki innifaldir nema annað sé tekið fram.
            </p>
          </div>

          {/* Bilanagreining og almenn tölvuþjónusta */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Bilanagreining og almenn tölvuþjónusta</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Bilanagreining (grunn):</h3>
                <p className="text-xl font-bold text-primary-400 mb-2">8.500 kr.</p>
                <p className="text-gray-300 text-sm">Greining á hugbúnaði og algengum vélbúnaðarbilunum.</p>
                <p className="text-gray-400 text-sm italic">Dregst frá heildarverði ef farið er í viðgerð.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Tímagjald (verk):</h3>
                <p className="text-xl font-bold text-primary-400">9.000 kr. / klst</p>
                <p className="text-gray-300 text-sm mt-2">Notað fyrir flóknari bilanir, sérlausnir og óskilgreind verkefni.</p>
              </div>
            </div>
          </section>

          {/* Tölvuviðgerðir og uppfærslur */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Tölvuviðgerðir og uppfærslur</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Hugbúnaðarhreinsun / kerfisviðgerð:</h3>
                <p className="text-xl font-bold text-primary-400 mb-2">12.000 – 18.000 kr.</p>
                <p className="text-gray-300 text-sm">Hæg tölva, villur, frystingar, spilliforrit.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Uppsetning stýrikerfis (Windows / Linux):</h3>
                <p className="text-xl font-bold text-primary-400 mb-2">15.000 kr.</p>
                <p className="text-gray-300 text-sm">Innifelur uppsetningu, uppfærslur og grunnstillingar.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">SSD / HDD skipti (verk):</h3>
                <p className="text-xl font-bold text-primary-400 mb-2">8.000 – 12.000 kr.</p>
                <p className="text-gray-400 text-sm italic">Diskur ekki innifalinn.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">RAM uppfærsla (verk):</h3>
                <p className="text-xl font-bold text-primary-400">5.000 kr.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Hitavandamál / kæling / hreinsun:</h3>
                <p className="text-xl font-bold text-primary-400">8.000 – 15.000 kr.</p>
              </div>
            </div>
          </section>

          {/* Sérsmíði og samsetning tölva */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Sérsmíði og samsetning tölva</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Sérsmíði borðtölvu (ráðgjöf + samsetning):</h3>
                <p className="text-xl font-bold text-primary-400 mb-3">25.000 kr.</p>
                <p className="text-gray-300 text-sm mb-2">Innifelur:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-300 text-sm">
                  <li>Íhlutaval í samráði</li>
                  <li>Samsetningu</li>
                  <li>Próf og grunnstillingar</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Uppfærsla eldri borðtölvu:</h3>
                <p className="text-xl font-bold text-primary-400 mb-2">12.000 – 20.000 kr.</p>
                <p className="text-gray-300 text-sm">Fer eftir umfangi.</p>
              </div>
            </div>
          </section>

          {/* Gögn, afrit og flutningur */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Gögn, afrit og flutningur</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Flutningur gagna milli tölva:</h3>
                <p className="text-xl font-bold text-primary-400">8.000 – 15.000 kr.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Afritun gagna (backup):</h3>
                <p className="text-xl font-bold text-primary-400">7.000 kr.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Endurheimt gagna (einföld):</h3>
                <p className="text-xl font-bold text-primary-400 mb-2">12.000 – 25.000 kr.</p>
                <p className="text-gray-400 text-sm italic">Engin ábyrgð ef gögn eru óendurheimtanleg.</p>
              </div>
            </div>
          </section>

          {/* Öryggi og hugbúnaður */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Öryggi og hugbúnaður</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Veiru- og spilliforritahreinsun:</h3>
                <p className="text-xl font-bold text-primary-400">12.000 – 18.000 kr.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Uppsetning öryggishugbúnaðar:</h3>
                <p className="text-xl font-bold text-primary-400 mb-2">6.000 kr.</p>
                <p className="text-gray-400 text-sm italic">Leyfi ekki innifalið.</p>
              </div>
            </div>
          </section>

          {/* Netkerfi og tæknilausnir */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Netkerfi og tæknilausnir</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Uppsetning heimilisnets / Wi-Fi:</h3>
                <p className="text-xl font-bold text-primary-400">10.000 – 18.000 kr.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Prentarar og nettengd tæki:</h3>
                <p className="text-xl font-bold text-primary-400">6.000 – 10.000 kr.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Smá netkerfi fyrir fyrirtæki:</h3>
                <p className="text-xl font-bold text-primary-400">Verð eftir samkomulagi.</p>
              </div>
            </div>
          </section>

          {/* Tækniráðgjöf */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Tækniráðgjöf</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Persónuleg tækniráðgjöf:</h3>
                <p className="text-xl font-bold text-primary-400 mb-3">9.000 kr. / klst</p>
                <p className="text-gray-300 text-sm mb-2">Hentar meðal annars fyrir:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-300 text-sm">
                  <li>Kaupráðgjöf</li>
                  <li>Skipulag á tölvumálum</li>
                  <li>Skýringar og leiðbeiningar</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Heimsóknarþjónusta */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Heimsóknarþjónusta</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Heimsókn innan bæjar:</h3>
                <p className="text-xl font-bold text-primary-400 mb-2">5.000 kr. + tímagjald</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Utan bæjar:</h3>
                <p className="text-xl font-bold text-primary-400">Samkvæmt samkomulagi.</p>
              </div>
            </div>
          </section>

          {/* Fyrirtækjaþjónusta */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Fyrirtækjaþjónusta</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Tímagjald fyrirtækja:</h3>
                <p className="text-xl font-bold text-primary-400 mb-4">10.000 kr. / klst</p>
                <p className="text-gray-300 text-sm">
                  Reglubundin þjónusta / tæknilegur bakhjarl: <span className="font-semibold">Verð eftir samningi.</span>
                </p>
              </div>
            </div>
          </section>

          {/* Gott að vita */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Gott að vita</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>Engin vinna framkvæmd án samþykkis</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>Heiðarlegt mat á því hvort viðgerð borgi sig</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>Ekki selt óþarfa uppfærslur</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>Skýrar útskýringar á því sem er gert</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">•</span>
                <span>Stundum er besta lausnin að gera ekki neitt – og það segjum við líka.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
