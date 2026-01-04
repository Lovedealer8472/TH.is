'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
            {t.services.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {/* Tölvuviðgerðir & bilanagreining */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Tölvuviðgerðir & bilanagreining</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Greining og viðgerðir á borðtölvum og fartölvum</li>
              <li>Skipti á hörðum diskum / SSD</li>
              <li>Uppfærslur á vinnsluminni (RAM)</li>
              <li>Uppfærsla eða viðgerðir vegna Kælinga, hitavandamáls og hávaða</li>
              <li>Stýrikerfisvandamál (Windows / Linux)</li>
            </ul>
          </section>

          {/* Sérsmíði & uppfærslur á vélum */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Sérsmíði & uppfærslur á vélum</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Sérsmíði borðtölva eftir þörfum (leikjatölvur, vinnuvélar, heimilistölvur)</li>
              <li>Ráðgjöf um íhluti og kostnað</li>
              <li>Uppfærsla eldri tölva til að lengja líftíma</li>
              <li>Samsetning, prófanir og afhending á prófuðum og full uppfærðum tölvum</li>
            </ul>
          </section>

          {/* Gögn, afrit og gangabjörgun */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Gögn, afrit og gangabjörgun</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Afritun gagna (backup)</li>
              <li>Flutningur gagna milli tölva</li>
              <li>Endurheimt tapaðra gagna (þar sem mögulegt er)</li>
              <li>Uppsetning á sjálfvirkum afritunarlausnum. Er með samstarf við <Link href="https://logurinn.is/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">Lögurinn</Link> sem er með geggað setup fyrir gagnageymslu.</li>
              <li>Ráðgjöf um gagnavernd</li>
            </ul>
          </section>

          {/* Öryggi & hugbúnaður */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Öryggi & hugbúnaður</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Veiru- og spilliforritahreinsun</li>
              <li>Uppsetning vírusvarna og öryggislausna</li>
              <li>Kerfishreinsun og stillingar</li>
              <li>Uppfærsla og uppsetning hugbúnaðar</li>
              <li>Ráðgjöf um örugga notkun tölva og internets</li>
            </ul>
          </section>

          {/* Netkerfi & heimila-/fyrirtækjalausnir */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Netkerfi & heimila-/fyrirtækjalausnir</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Uppsetning og bilanagreining á heimilisnetum</li>
              <li>Beinar, Wi-Fi, prentarar og nettengd tæki</li>
              <li>Smá netkerfi fyrir fyrirtæki</li>
              <li>Ráðgjöf um búnað og uppsetningar</li>
            </ul>
          </section>

          {/* Tækniráðgjöf & aðstoð */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Tækniráðgjöf & aðstoð</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Persónuleg tækniráðgjöf</li>
              <li>Aðstoð við kaup á búnaði</li>
              <li>Útskýringar og leiðbeiningar (án tæknimáls)</li>
              <li>Lausnir sérsniðnar að þínum þörfum</li>
              <li>Stuðningur við einstaklinga og smáfyrirtæki</li>
            </ul>
          </section>

          {/* Heimsóknarþjónusta */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Heimsóknarþjónusta</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Aðstoð heima eða á vinnustað</li>
              <li>Uppsetningar, bilanagreining og leiðbeiningar</li>
              <li>Sérstaklega hentugt fyrir þá sem treysta sér ekki með tækin</li>
            </ul>
          </section>

          {/* Fyrirtækjaþjónusta (smáfyrirtæki) */}
          <section className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Fyrirtækjaþjónusta (smáfyrirtæki)</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Reglulegt tæknilegt viðhald</li>
              <li>Aðstoð við tölvuumhverfi starfsmanna</li>
              <li>Uppsetning og viðhald á einföldum kerfum</li>
              <li>Tæknilegur bakhjarl fyrir rekstur</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
