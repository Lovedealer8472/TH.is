export const metadata = {
  title: 'Persónuverndarstefna - Tölvuhvíslarinn',
  description: 'Persónuverndarstefna Tölvuhvíslarans',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-8">Persónuverndarstefna</h1>
      
      <div className="prose prose-invert max-w-none">
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">1. Almennt</h2>
            <p className="mb-4">
              Tölvuhvíslarinn (KT: 460525-2250) er ábyrgur fyrir vinnslu persónuupplýsinga sem safnast á þessari vefsíðu. 
              Við höfum áhuga á að vernda persónuvernd notenda og fylgjum lögum um persónuvernd, þar á meðal 
              almenna persónuverndarreglugerð Evrópu (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2. Hvaða upplýsingar safnast?</h2>
            <p className="mb-4">
              Við safnum eftirfarandi upplýsingum þegar þú notar síðuna:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li><strong>Nafn og netfang:</strong> Þegar þú sendir skilaboð í gegnum hafðu samband formið</li>
              <li><strong>Skilaboð:</strong> Efni skilaboða sem þú sendir</li>
              <li><strong>Tæknilegar upplýsingar:</strong> IP-tala, vafratýpa og svipaðar upplýsingar (sjá vefkökur)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">3. Tilgangur vinnslu</h2>
            <p className="mb-4">
              Upplýsingarnar eru notaðar til að:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Svara beiðnum og skilaboðum sem send eru í gegnum hafðu samband formið</li>
              <li>Bæta notendaupplifun á vefsíðunni</li>
              <li>Tryggja öryggi og stöðugleika vefsíðunnar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">4. Lagalegur grundvöllur</h2>
            <p className="mb-4">
              Vinnsla persónuupplýsinga byggir á:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li><strong>Samþykki:</strong> Þegar þú sendir skilaboð, gefur þú samþykki fyrir vinnslu upplýsinga</li>
              <li><strong>Lögmætir hagsmunir:</strong> Til að geta svarað beiðnum og veitt þjónustu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">5. Geymslutími</h2>
            <p className="mb-4">
              Upplýsingar sem sendar eru í gegnum hafðu samband formið eru geymdar svo lengi sem nauðsynlegt er 
              til að svara beiðnum og halda skrám. Við eyðum reglubundið gögnum sem ekki eru lengur nauðsynleg.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">6. Deiling upplýsinga</h2>
            <p className="mb-4">
              Við deilum ekki persónuupplýsingum með þriðja aðila nema:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Þegar lög krefjast þess</li>
              <li>Með þínum skýrum samþykki</li>
              <li>Til að tryggja öryggi eða vernda lögmæta hagsmuni</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">7. Réttindi þín</h2>
            <p className="mb-4">
              Samkvæmt GDPR hefur þú eftirfarandi réttindi:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li><strong>Fyrirspurn:</strong> Þú getur beðið um aðgang að persónuupplýsingum sem við höfum um þig</li>
              <li><strong>Leiðrétting:</strong> Þú getur beðið um að leiðrétta rangar upplýsingar</li>
              <li><strong>Eyðing:</strong> Þú getur beðið um að eyða persónuupplýsingum</li>
              <li><strong>Mótmæli:</strong> Þú getur mótmælt vinnslu persónuupplýsinga</li>
              <li><strong>Takmarka vinnslu:</strong> Þú getur beðið um að takmarka vinnslu upplýsinga</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">8. Öryggi</h2>
            <p className="mb-4">
              Við notum viðeigandi tæknileg og skipulagsleg öryggisráðstafanir til að vernda persónuupplýsingar 
              gegn óheimilum aðgangi, tapi eða eyðileggingu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">9. Breytingar á stefnu</h2>
            <p className="mb-4">
              Við höfum rétt til að breyta þessari persónuverndarstefnu. Breytingar verða birtar á þessari síðu 
              með uppfærðri dagsetningu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">10. Hafðu samband</h2>
            <p className="mb-4">
              Ef þú hefur spurningar eða beiðnir varðandi persónuvernd, hafðu samband:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="mb-2"><strong>Tölvuhvíslarinn</strong></p>
              <p className="mb-2">Netfang: <a href="mailto:tolvuhvislarinn@gmail.com" className="text-primary-400 hover:text-primary-300">tolvuhvislarinn@gmail.com</a></p>
              <p className="mb-2">Sími: <a href="tel:848-6755" className="text-primary-400 hover:text-primary-300">848-6755</a></p>
              <p>KT: 460525-2250</p>
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
