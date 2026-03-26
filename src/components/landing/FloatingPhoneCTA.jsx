import { useState, useEffect } from 'react';

export default function FloatingPhoneCTA({ t }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#forma"
      className="fixed bottom-6 right-5 z-[400] flex items-center gap-2 px-6 py-3.5 transition-all duration-500"
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
  );
}