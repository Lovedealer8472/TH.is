'use client';

import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';

export default function ContactForm() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  // /contact?efni=vhs (from the VHS offer buttons): order mode with tape count + gift certificate
  const [vhs, setVhs] = useState(false);
  const [tapes, setTapes] = useState('');
  const [gift, setGift] = useState(false);
  useEffect(() => {
    try {
      if (new URLSearchParams(window.location.search).get('efni') === 'vhs') setVhs(true);
    } catch { /* ignore */ }
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: [
            vhs ? `[VHS pöntun${gift ? ' / gjafabréf' : ''}]${tapes ? ` Fjöldi spóla: ${tapes}` : ''}` : '',
            formData.phone ? `Sími: ${formData.phone}` : '',
            formData.message,
          ].filter(Boolean).join('\n'),
        }),
      });

      if (response.status === 400) {
        // The customer can fix this one; keep what they typed
        setSubmitStatus('error');
        setErrorMessage('Athugaðu að nafn, netfang og skilaboð séu öll fyllt út og að netfangið sé rétt.');
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTapes('');
      setGift(false);
    } catch {
      // Delivery failed or the server is unreachable: the error box shows phone + WhatsApp
      setSubmitStatus('error');
      setErrorMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-warm-800/50 backdrop-blur-sm rounded-xl border border-warm-700/50 p-8 sm:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        {vhs && (
          <div className="rounded-lg border border-primary-500/40 bg-primary-500/10 p-4 text-sm text-warm-100 leading-relaxed">
            <p className="font-semibold text-primary-300 mb-1">VHS yfirfærsla, jólatilboð til 31. desember</p>
            <p>Segðu mér hvað margar spólur þetta eru og hvort þú komir með þær eða sendir í pósti. Ég svara með verði og heimilisfangi fyrir póstsendingu. Pantanir sem berast fyrir 4. desember eru tilbúnar fyrir jól.</p>
          </div>
        )}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-warm-200 mb-2">
            {t.contact.form.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-warm-900/50 border border-warm-700 text-warm-50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-warm-200 mb-2">
            {t.contact.form.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-warm-900/50 border border-warm-700 text-warm-50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-warm-200 mb-2">
            Sími <span className="text-warm-400 font-normal">(valfrjálst)</span>
          </label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" maxLength={30} className="w-full px-4 py-3 bg-warm-900/50 border border-warm-700 text-warm-50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
        </div>

        {vhs && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <div>
              <label htmlFor="tapes" className="block text-sm font-medium text-warm-200 mb-2">Fjöldi spóla</label>
              <input type="number" id="tapes" min={1} max={500} value={tapes} onChange={(e) => setTapes(e.target.value)} className="w-full px-4 py-3 bg-warm-900/50 border border-warm-700 text-warm-50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
            </div>
            <label htmlFor="gift" className="flex items-center gap-3 text-sm text-warm-200 py-3 cursor-pointer">
              <input type="checkbox" id="gift" checked={gift} onChange={(e) => setGift(e.target.checked)} className="h-5 w-5 accent-primary-600" />
              Ég vil kaupa gjafabréf
            </label>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-warm-200 mb-2">
            {t.contact.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-warm-900/50 border border-warm-700 text-warm-50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-900/30 border border-green-700/50 rounded-lg text-green-300 flex items-start">
            <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Skilaboðin þín voru send. Ég svara eins fljótt og ég get.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-900/30 border border-red-700/50 rounded-lg text-red-300 flex items-start">
            <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              {errorMessage || (
                <>
                  Því miður tókst ekki að senda skilaboðin. Hringdu eða sendu SMS í{' '}
                  <a href="tel:+3548486755" className="underline font-medium text-red-200">848-6755</a>, eða sendu mér{' '}
                  <a href="https://wa.me/3548486755" target="_blank" rel="noopener noreferrer" className="underline font-medium text-red-200">WhatsApp</a>.
                </>
              )}
            </span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-primary-500/20 hover:-translate-y-0.5"
        >
          {isSubmitting ? 'Sendi...' : t.contact.form.submit}
        </button>
      </form>
    </div>
  );
}
