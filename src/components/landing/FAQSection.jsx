import { useState } from 'react';

export default function FAQSection({ t }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section style={{ background: 'var(--white)' }} className="py-16 md:py-20">
      <div className="px-6 md:px-12 max-w-5xl mx-auto">
        <div className="mb-12 md:mb-14">
          <div className="font-jost text-[10px] font-normal uppercase tracking-[0.26em] mb-3" style={{ color: 'var(--gold)' }}>
            {t.faqEyebrow}
          </div>
          <h2 className="font-playfair font-normal leading-[1.2]" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
            {t.faqHeading1}{' '}
            <em className="italic" style={{ color: 'var(--gold)' }}>{t.faqHeadingEm}</em>
          </h2>
        </div>
        <div>
          {t.faq.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(138,112,85,0.15)' }}>
              <button
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="font-playfair text-[16px] md:text-[17px] font-normal pr-4 transition-colors" style={{ color: openIndex === i ? 'var(--gold)' : 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[16px] transition-transform duration-300"
                  style={{ border: '1px solid rgba(138,112,85,0.3)', color: 'var(--gold)', transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <p className="font-jost text-[17px] font-light leading-[1.85] pb-6" style={{ color: 'var(--muted-brown)' }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}