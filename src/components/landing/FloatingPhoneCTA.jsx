import { useState, useEffect } from 'react';

export default function FloatingPhoneCTA({ t }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating CTA */}
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
        <span className="font-jost text-[11px] font-medium uppercase tracking-[0.16em]">{t.headerCta}</span>
        <span style={{ color: 'var(--charcoal)', opacity: 0.7 }}>→</span>
      </a>

      {/* Mobile sticky bottom CTA - always visible */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-[400] px-5 pb-6 pt-3"
        style={{ background: 'linear-gradient(to top, rgba(245,240,230,0.98) 70%, transparent)' }}
      >
        <a
          href="#forma"
          className="flex items-center justify-center gap-2 w-full py-4 transition-all active:scale-95"
          style={{
            background: 'var(--gold)',
            color: 'var(--charcoal)',
            borderRadius: 999,
            boxShadow: '0 4px 24px rgba(201,169,110,0.4)',
          }}
        >
          <span className="font-jost text-[12px] font-medium uppercase tracking-[0.16em]">{t.headerCta}</span>
        </a>
      </div>
    </>
  );
}