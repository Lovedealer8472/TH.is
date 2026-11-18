'use client';

import { useState } from 'react';
import Link from 'next/link';

// Kit order for VHS/MiniDV mail-in. Reuses /api/contact (disk + email + push),
// so the order arrives as a normal, structured message.

const STEPS = [
  {
    title: 'Þú pantar pakka',
    text: 'Þú fyllir út formið hér fyrir neðan og ég sendi þér kassann með rakningu.',
  },
  {
    title: 'Þú merkir spólurnar',
    text: 'Í kassanum eru númeraðir límmiðar, poki fyrir hverja spólu og fylgiseðill. Þú setur einn límmiða á hverja spólu og skrifar á seðilinn hvað er á henni.',
  },
  {
    title: 'Þú skilar kassanum',
    text: 'Þú lokar kassanum og skilar honum á pósthús eða í Póstbox. Sendingin er rakin alla leið til mín.',
  },
  {
    title: 'Ég staðfesti komuna',
    text: 'Þegar kassinn kemur sendi ég þér mynd af spólunum og staðfesti fjöldann. Þá veistu að allt skilaði sér.',
  },
  {
    title: 'Þú færð upptökurnar',
    text: 'Þú færð niðurhalstengil um leið og yfirfærslan er tilbúin. Spólurnar koma svo aftur til þín í sama kassa ásamt USB lyklinum.',
  },
];

const inputClass =
  'w-full px-4 py-3 bg-warm-900/50 border border-warm-700 text-warm-50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all';
const labelClass = 'block text-sm font-medium text-warm-200 mb-2';

type Form = {
  name: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  tapes: string;
  kind: string;
  delivery: string;
  quality: boolean;
  contents: string;
  notes: string;
};

const EMPTY: Form = {
  name: '',
  email: '',
  phone: '',
  address: '',
  postcode: '',
  tapes: '',
  kind: 'VHS',
  delivery: 'Niðurhalstengill og USB lykill',
  quality: false,
  contents: '',
  notes: '',
};

export default function VhsSendingPage() {
  const [form, setForm] = useState<Form>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'invalid'>('idle');

  const set = (key: keyof Form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const message = [
      'PÖNTUN Á SENDINGARPAKKA (VHS / MiniDV)',
      '',
      `Sími: ${form.phone}`,
      `Heimilisfang: ${form.address}`,
      `Póstnúmer og staður: ${form.postcode}`,
      '',
      `Fjöldi spóla (u.þ.b.): ${form.tapes}`,
      `Tegund: ${form.kind}`,
      `Afhending: ${form.delivery}`,
      `Vönduð myndvinnsla: ${form.quality ? 'Já' : 'Nei'}`,
      '',
      'Hvað er á spólunum:',
      form.contents || '(ekkert skrifað)',
      '',
      'Annað:',
      form.notes || '(ekkert skrifað)',
    ].join('\n');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message }),
      });
      if (res.status === 400) {
        setStatus('invalid');
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-warm-50 mb-5">Sendu spólurnar örugglega</h1>
          <p className="text-xl text-warm-200 leading-relaxed max-w-3xl mx-auto">
            Margir eru hikandi við að setja gamlar fjölskylduupptökur í póst. Það skil ég vel. Þess vegna sendi ég
            þér sterkan kassa með öllu sem þarf. Þú setur spólurnar í hann, fyllir út blaðið og skilar honum á
            pósthúsið.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="bg-warm-800/50 rounded-xl border border-warm-700/50 p-6"
            >
              <div className="w-9 h-9 rounded-full bg-primary-500/15 text-primary-300 font-semibold flex items-center justify-center mb-3">
                {i + 1}
              </div>
              <h2 className="text-lg font-semibold text-warm-50 mb-2">{step.title}</h2>
              <p className="text-warm-200 leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="bg-warm-800/30 rounded-xl border border-warm-700/50 p-6 sm:p-8 mb-14">
          <h2 className="text-xl font-semibold text-warm-50 mb-3">Er óhætt að senda spólur í pósti?</h2>
          <p className="text-warm-200 leading-relaxed mb-3">
            Já. Póstflutningur og gegnumlýsing skemma ekki segulbönd. Til þess þarf sterkan segul alveg upp við
            spóluna. Það sem fer verst með gamlar spólur er tíminn sjálfur og þess vegna er betra að bjarga þeim
            núna.
          </p>
          <p className="text-warm-200 leading-relaxed">
            Ég fer varlega með hverja spólu og skoða hana áður en hún fer í tækið. Ef þú býrð nálægt Neskaupstað
            geturðu líka komið með spólurnar til mín. Viltu frekar hringja fyrst? Síminn er{' '}
            <a href="tel:+3548486755" className="text-primary-400 hover:text-primary-300 font-medium">
              848-6755
            </a>
            .
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-warm-800/50 backdrop-blur-sm rounded-xl border border-warm-700/50 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-warm-50 mb-6">Panta sendingarpakka</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={labelClass}>Nafn</label>
              <input id="name" required value={form.name} onChange={set('name')} className={inputClass} autoComplete="name" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className={labelClass}>Netfang</label>
                <input id="email" type="email" required value={form.email} onChange={set('email')} className={inputClass} autoComplete="email" />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Sími</label>
                <input id="phone" type="tel" required value={form.phone} onChange={set('phone')} className={inputClass} autoComplete="tel" />
              </div>
            </div>
            <div>
              <label htmlFor="address" className={labelClass}>Heimilisfang (hvert á ég að senda kassann?)</label>
              <input id="address" required value={form.address} onChange={set('address')} className={inputClass} autoComplete="street-address" />
            </div>
            <div>
              <label htmlFor="postcode" className={labelClass}>Póstnúmer og staður</label>
              <input id="postcode" required value={form.postcode} onChange={set('postcode')} className={inputClass} placeholder="t.d. 740 Neskaupstaður" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="tapes" className={labelClass}>Hvað eru spólurnar margar?</label>
                <input id="tapes" required inputMode="numeric" value={form.tapes} onChange={set('tapes')} className={inputClass} placeholder="Ágiskun dugar" />
              </div>
              <div>
                <label htmlFor="kind" className={labelClass}>Tegund</label>
                <select id="kind" value={form.kind} onChange={set('kind')} className={inputClass}>
                  <option>VHS</option>
                  <option>MiniDV</option>
                  <option>Bæði VHS og MiniDV</option>
                  <option>Veit ekki</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className={labelClass}>Hvernig viltu fá upptökurnar?</label>
              <select id="delivery" value={form.delivery} onChange={set('delivery')} className={inputClass}>
                <option>Niðurhalstengill og USB lykill</option>
                <option>Aðeins niðurhalstengill</option>
              </select>
            </div>
            <label className="flex items-start gap-3 text-warm-200">
              <input type="checkbox" checked={form.quality} onChange={set('quality')} className="mt-1 h-5 w-5 accent-primary-500" />
              <span>
                Ég vil vandaða myndvinnslu (hreinni mynd í 1080p, 1.500 kr. á spólu).{' '}
                <Link href="/services/vhs-minidv" className="text-primary-400 hover:text-primary-300">Nánar</Link>
              </span>
            </label>
            <div>
              <label htmlFor="contents" className={labelClass}>Veistu hvað er á spólunum? (má sleppa)</label>
              <textarea id="contents" rows={4} value={form.contents} onChange={set('contents')} className={`${inputClass} resize-none`} placeholder="t.d. brúðkaup 1994, jólin hjá ömmu, fótboltamót" />
            </div>
            <div>
              <label htmlFor="notes" className={labelClass}>Eitthvað annað sem ég ætti að vita? (má sleppa)</label>
              <textarea id="notes" rows={3} value={form.notes} onChange={set('notes')} className={`${inputClass} resize-none`} placeholder="t.d. ein spólan er sérstaklega dýrmæt eða hefur skemmst" />
            </div>

            {status === 'success' && (
              <div className="p-4 bg-green-900/30 border border-green-700/50 rounded-lg text-green-300">
                Takk fyrir. Pöntunin er komin til mín og ég hef samband fljótlega til að staðfesta.
              </div>
            )}
            {status === 'invalid' && (
              <div className="p-4 bg-red-900/30 border border-red-700/50 rounded-lg text-red-300">
                Athugaðu að nafn og netfang séu fyllt út og að netfangið sé rétt.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-900/30 border border-red-700/50 rounded-lg text-red-300">
                Því miður tókst ekki að senda pöntunina. Hringdu eða sendu SMS í{' '}
                <a href="tel:+3548486755" className="underline font-medium text-red-200">848-6755</a> eða sendu mér{' '}
                <a href="https://wa.me/3548486755" target="_blank" rel="noopener noreferrer" className="underline font-medium text-red-200">WhatsApp</a>.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {status === 'sending' ? 'Sendi...' : 'Panta sendingarpakka'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
