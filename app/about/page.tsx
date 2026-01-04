'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

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
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-750 transition-colors"
      >
        <h2 className="text-xl font-bold text-gray-100">{title}</h2>
        <span className="text-gray-400 text-2xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-gray-700">
          <div className="text-gray-300 space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
            Hver er Tölvuhvíslarinn
          </h1>
        </div>

        <div className="space-y-4">
          {/* Stutt - Short version */}
          <AccordionSection title="Stutt" defaultOpen={true}>
            <p className="text-base leading-relaxed">
              Ég heiti Daði. Ég er búinn að fikta við og vinna við tölvur í 20 ár.
            </p>
          </AccordionSection>

          {/* Klassík - Classic version */}
          <AccordionSection title="Klassík">
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                Ég heiti Daði og hef unnið með tölvur síðan þær notuðu segulbönd og diskettur.
              </p>
              <p>
                Áhugi minn á tölvum byrjaði snemma með Sinclair spectrum og varð heltekinn og hefur fylgt mér síðan þá – frá heimilistölvum og leikjum yfir í bilanagreiningu, viðgerðir, netkerfi og sérsmíðaðar lausnir.
              </p>
              <p>
                Eftir að hafa unnið við viðgerðir og tæknilega þjónustu hjá fyrirtæki ákvað ég að fara mína eigin leið.
                Ég vildi skapa þjónustu þar sem viðskiptavinurinn fær heiðarlega ráðgjöf, skýrar útskýringar og lausnir sem henta raunverulegum þörfum – ekki bara það sem selst best.
              </p>
              <p>
                Tölvuhvíslarinn þjónustar einstaklinga og smáfyrirtæki með tölvuviðgerðir, uppfærslur, sérsmíði, gagnavernd og tækniráðgjöf.
                Ég legg áherslu á að tala mannamál, ekki tæknimál, og útskýra alltaf hvað er verið að gera og hvers vegna.
              </p>
            </div>
          </AccordionSection>

          {/* Persónulegt - Personal version */}
          <AccordionSection title="Persónulegt">
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                Ég hef verið &ldquo;tölvumaður&rdquo; svo lengi sem ég man eftir mér. Fyrstu kynni mín við tölvur voru á tímum segulbanda og einfaldra kerfa, þar sem maður þurfti að skilja hvernig hlutirnir virkuðu – annars virkaði ekkert.
              </p>
              <p>
                Þessi forvitni hefur aldrei horfið.
              </p>
              <p>
                Í gegnum árin hef ég unnið með:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>viðgerðir á fartölvum og borðtölvum</li>
                <li>bilanagreiningu þegar &ldquo;allt virkar bara ekki&rdquo;</li>
                <li>uppfærslur og lengingu líftíma eldri búnaðar</li>
                <li>netkerfi, hugbúnað og öryggismál</li>
                <li>sérsmíði tölva fyrir mismunandi þarfir</li>
              </ul>
              <p>
                Ég hef líka séð hvernig fólk verður óöruggt gagnvart tækninni þegar hlutirnir flækjast.
                Ein stærsta ástæða þess að ég stofnaði Tölvuhvíslarinn er að breyta því – gera tæknina skiljanlega og aðgengilega, án yfirlætis.
              </p>
              <p>
                Ég trúi því að góð tækniaðstoð snúist ekki bara um að &ldquo;laga hlutinn&rdquo;, heldur:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>að útskýra hvað fór úrskeiðis</li>
                <li>að hjálpa fólki að taka betri ákvarðanir</li>
                <li>og að byggja upp traust til lengri tíma</li>
              </ul>
            </div>
          </AccordionSection>
        </div>
      </div>
    </div>
  );
}
