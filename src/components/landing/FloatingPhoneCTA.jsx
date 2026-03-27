import { useState, useEffect } from 'react';

export default function FloatingPhoneCTA({ t }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const mobileCtaText = {
    lv: 'Saņemt bezmaksas projektu',
    en: 'Get a free project',
    ru: 'Получить бесплатный проект',
  };

  const desktopCtaText = {
    lv: 'Saņemt bezmaksas projektu →',
    en: 'Get a free project →',
    ru: 'Получить бесплатный проект →',
  };

  // Detect lang from t object
  const lang = t.headerCta?.includes('Get') ? 'en' : t.headerCta?.includes('Получить') ? 'ru' : 'lv';
  const mobileText = mobileCtaText[lang];
  const desktopText = desktopCtaText[lang];

  return (
    <>
      {/* Desktop floating pill CTA */}
      <a
        href="#forma"
        className="hidden md:flex fixed bottom-6 right-5 z-[400] items-center gap-2 px-6 py-3.5 transition-all duration-500"
        style={{
          background: 'var(--gold)',
          color: 'var(--charcoal)',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          borderRadius: 999,
          boxShadow: '0 8px 32px rgba(201,169,110,0.45), 0 0 0 1px rgba(201,169,110,0.5)',
        }}
      >
        <span className="font-jost text-[11px] font-medium uppercase tracking-[0.16em]">{desktopText}</span>
      </a>

      {/* Mobile — always visible sticky bottom bar */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-[400]"
        style={{ background: '#F5F0E6', borderTop: '1px solid rgba(138,112,85,0.15)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <a
          href="#forma"
          className="flex items-center justify-center w-full py-4 transition-all active:opacity-80"
          style={{
            background: 'var(--gold)',
            color: '#1A1714',
          }}
        >
          <span className="font-jost text-[12px] font-semibold uppercase tracking-[0.2em]">{mobileText}</span>
        </a>
      </div>
    </>
  );
}