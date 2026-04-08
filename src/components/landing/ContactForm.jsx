import { useState } from 'react';

export default function ContactForm({ t }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service_type: '', comment: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = t.serviceOptions;

  const fireFormStart = () => {
    if (formData.name === '' && formData.phone === '' && formData.email === '') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'form_start', form_type: 'contact_request' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await fetch('https://formspree.io/f/mojkjwrp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, service_type: formData.service_type || serviceOptions[0] }),
    });

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'form_submit',
      form_type: 'contact_request',
      service_selected: formData.service_type || serviceOptions[0],
    });

    setSubmitting(false);
    setSubmitted(true);
  };

  const inputStyle = {
    background: 'var(--white)',
    border: '1px solid rgba(138,112,85,0.25)',
    color: 'var(--charcoal)',
    minHeight: 48,
  };

  if (submitted) {
    return (
      <section id="forma" style={{ background: 'var(--linen)' }} className="py-16 md:py-20">
        <div className="px-6 md:px-12 text-center">
          <div className="font-playfair text-[28px] font-normal mb-4" style={{ color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
            {t.contactThanks}
          </div>
          <p className="font-jost text-[15px] font-light" style={{ color: 'var(--muted-brown)' }}>
            {t.contactThanksBody}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="forma" style={{ background: 'var(--linen)' }} className="py-16 md:py-20">
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Info */}
          <div className="flex flex-col justify-center">
            <div className="font-jost text-[10px] font-normal uppercase tracking-[0.26em] mb-3" style={{ color: 'var(--gold)' }}>
              {t.contactEyebrow}
            </div>
            <h2 className="font-playfair font-normal leading-[1.2] mb-5" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
              {t.contactHeading1}{' '}
              <em className="italic" style={{ color: 'var(--gold)' }}>{t.contactHeadingEm}</em>
            </h2>
            <p className="font-jost text-[17px] font-light leading-[1.85] mb-8" style={{ color: 'var(--muted-brown)' }}>
              {t.contactBody}
            </p>
            <div className="flex flex-col gap-4">
              {t.contactReassurance.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0" style={{ width: 20, height: 1, background: 'var(--sage)', marginTop: 12 }} />
                  <span className="font-jost text-[16px] font-light leading-[1.65]" style={{ color: 'var(--muted-brown)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-6 md:p-8" style={{ background: 'var(--white)' }}>
            <form onSubmit={handleSubmit} autoComplete="on" className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-jost text-[10px] font-normal uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--oak)' }}>
                    {t.contactLabelName}
                  </label>
                  <input type="text" required autoComplete="name" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={(e) => { fireFormStart(); e.target.style.borderColor = 'var(--gold)'; }}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(138,112,85,0.25)')}
                    className="w-full font-jost text-[14px] font-normal px-4 py-3.5 outline-none transition-colors"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block font-jost text-[10px] font-normal uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--oak)' }}>
                    {t.contactLabelPhone}
                  </label>
                  <input type="tel" required autoComplete="tel" value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={(e) => { fireFormStart(); e.target.style.borderColor = 'var(--gold)'; }}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(138,112,85,0.25)')}
                    className="w-full font-jost text-[14px] font-normal px-4 py-3.5 outline-none transition-colors"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="block font-jost text-[10px] font-normal uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--oak)' }}>
                  {t.contactLabelEmail}
                </label>
                <input type="email" required autoComplete="email" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={(e) => { fireFormStart(); e.target.style.borderColor = 'var(--gold)'; }}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(138,112,85,0.25)')}
                  className="w-full font-jost text-[14px] font-normal px-4 py-3.5 outline-none transition-colors"
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block font-jost text-[10px] font-normal uppercase tracking-[0.18em] mb-3" style={{ color: 'var(--oak)' }}>
                  {t.contactLabelService}
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((opt) => (
                    <button key={opt} type="button"
                      onClick={() => setFormData({ ...formData, service_type: opt })}
                      className="font-jost text-[12px] font-normal px-4 py-3 transition-all"
                      style={{
                        background: formData.service_type === opt ? 'var(--charcoal)' : 'transparent',
                        color: formData.service_type === opt ? 'var(--ivory)' : 'var(--muted-brown)',
                        border: `1px solid ${formData.service_type === opt ? 'var(--charcoal)' : 'rgba(138,112,85,0.25)'}`,
                        minHeight: 44,
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-jost text-[10px] font-normal uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--oak)' }}>
                  {t.contactLabelComment}
                </label>
                <textarea rows={3} value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder={t.contactCommentPlaceholder}
                  className="w-full font-jost text-[14px] font-normal px-4 py-3.5 outline-none transition-colors resize-none"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(138,112,85,0.25)')}
                />
              </div>

              <div className="flex items-center justify-center gap-2 py-1">
                <span className="font-jost text-[12px] font-light" style={{ color: 'var(--oak)' }}>
                  🕐 Atbildam 2 stundu laikā darba dienās
                </span>
              </div>

              <button type="submit" disabled={submitting}
                className="w-full font-jost text-[12px] font-medium uppercase tracking-[0.18em] py-4 transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: 'var(--charcoal)', color: 'var(--ivory)', minHeight: 56 }}>
                {submitting ? t.contactSubmitting : t.contactSubmit}
              </button>

              <p className="font-jost text-[11px] font-light text-center" style={{ color: 'var(--oak)' }}>
                {t.contactFinePrint}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
