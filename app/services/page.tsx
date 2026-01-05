'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionSection({ title, children, defaultOpen = false }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-750 transition-colors"
      >
        <h2 className="text-lg font-bold text-gray-100">{title}</h2>
        <span className="text-gray-400 text-xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 border-t border-gray-700">
          <div className="text-gray-300">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
            {t.services.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {t.services.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tölvuviðgerðir & bilanagreining */}
          <AccordionSection title="Tölvuviðgerðir & bilanagreining">
            <p className="text-gray-300 mb-4">
              Viðgerðir og bilanagreining á fartölvum og borðtölvum.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Greining og viðgerðir á borðtölvum og fartölvum</li>
              <li>• Skipti á hörðum diskum / SSD</li>
              <li>• Uppfærslur á vinnsluminni (RAM)</li>
              <li>• Uppfærsla eða viðgerðir vegna kælinga, hitavandamáls og hávaða</li>
              <li>• Stýrikerfisvandamál (Windows / Linux)</li>
            </ul>
          </AccordionSection>

          {/* Sérsmíði & uppfærslur á vélum */}
          <AccordionSection title="Sérsmíði & uppfærslur á vélum">
            <p className="text-gray-300 mb-4">
              Sérsniðin borðtölvusmíði eftir þörfum – leikjatölvur, vinnuvélar eða heimilistölvur.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Sérsmíði borðtölva eftir þörfum (leikjatölvur, vinnuvélar, heimilistölvur)</li>
              <li>• Ráðgjöf um íhluti og kostnað</li>
              <li>• Uppfærsla eldri tölva til að lengja líftíma</li>
              <li>• Samsetning, prófanir og afhending á prófuðum og full uppfærðum tölvum</li>
            </ul>
          </AccordionSection>

          {/* Gögn, afrit og gangabjörgun */}
          <AccordionSection title="Gögn, afrit og gangabjörgun">
            <p className="text-gray-300 mb-4">
              Afritun, flutningur og endurheimt gagna. Er með samstarf við <Link href="https://logurinn.is/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">Lögurinn</Link> sem er með geggað setup fyrir gagnageymslu.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Afritun gagna (backup)</li>
              <li>• Flutningur gagna milli tölva</li>
              <li>• Endurheimt tapaðra gagna (þar sem mögulegt er)</li>
              <li>• Uppsetning á sjálfvirkum afritunarlausnum</li>
              <li>• Ráðgjöf um gagnavernd</li>
            </ul>
          </AccordionSection>

          {/* Öryggi & hugbúnaður */}
          <AccordionSection title="Öryggi & hugbúnaður">
            <p className="text-gray-300 mb-4">
              Veiru- og spilliforritahreinsun, uppsetning öryggislausna og kerfishreinsun.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Veiru- og spilliforritahreinsun</li>
              <li>• Uppsetning vírusvarna og öryggislausna</li>
              <li>• Kerfishreinsun og stillingar</li>
              <li>• Uppfærsla og uppsetning hugbúnaðar</li>
              <li>• Ráðgjöf um örugga notkun tölva og internets</li>
            </ul>
          </AccordionSection>

          {/* Netkerfi & heimila-/fyrirtækjalausnir */}
          <AccordionSection title="Netkerfi & heimila-/fyrirtækjalausnir">
            <p className="text-gray-300 mb-4">
              Uppsetning og bilanagreining á heimilisnetum og smá netkerfum fyrir fyrirtæki.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Uppsetning og bilanagreining á heimilisnetum</li>
              <li>• Beinar, Wi-Fi, prentarar og nettengd tæki</li>
              <li>• Smá netkerfi fyrir fyrirtæki</li>
              <li>• Ráðgjöf um búnað og uppsetningar</li>
            </ul>
          </AccordionSection>

          {/* Tækniráðgjöf & aðstoð */}
          <AccordionSection title="Tækniráðgjöf & aðstoð">
            <p className="text-gray-300 mb-4">
              Persónuleg ráðgjöf og lausnir sérsniðnar að þínum þörfum, án tæknimáls.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Persónuleg tækniráðgjöf</li>
              <li>• Aðstoð við kaup á búnaði</li>
              <li>• Útskýringar og leiðbeiningar (án tæknimáls)</li>
              <li>• Lausnir sérsniðnar að þínum þörfum</li>
              <li>• Stuðningur við einstaklinga og smáfyrirtæki</li>
            </ul>
          </AccordionSection>

          {/* Heimsóknarþjónusta */}
          <AccordionSection title="Heimsóknarþjónusta">
            <p className="text-gray-300 mb-4">
              Aðstoð heima eða á vinnustað. Sérstaklega hentugt fyrir þá sem treysta sér ekki með tækin.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Aðstoð heima eða á vinnustað</li>
              <li>• Uppsetningar, bilanagreining og leiðbeiningar</li>
              <li>• Sérstaklega hentugt fyrir þá sem treysta sér ekki með tækin</li>
            </ul>
          </AccordionSection>

          {/* Fyrirtækjaþjónusta (smáfyrirtæki) */}
          <AccordionSection title="Fyrirtækjaþjónusta (smáfyrirtæki)">
            <p className="text-gray-300 mb-4">
              Reglubundin þjónusta og tæknilegur bakhjarl fyrir smáfyrirtæki.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Reglulegt tæknilegt viðhald</li>
              <li>• Aðstoð við tölvuumhverfi starfsmanna</li>
              <li>• Uppsetning og viðhald á einföldum kerfum</li>
              <li>• Tæknilegur bakhjarl fyrir rekstur</li>
            </ul>
          </AccordionSection>
        </div>
      </div>
    </div>
  );
}
