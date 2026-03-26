import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const langMeta = {
  lv: { label: 'LV' },
  en: { label: 'EN' },
  ru: { label: 'RU' },
};

export default function StickyHeader({ t, lang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navHrefs = {
    lv: { Projekti: '#galerija', Iedvesma: '/iedvesma', 'Par mums': '#par-mums', Tehnika: '#tehnika', Sadarbība: '#process' },
    en: { Projects: '#galerija', Inspiration: '/iedvesma', 'About Us': '#par-mums', Appliances: '#tehnika', Cooperation: '#process' },
    ru: { Проекты: '#galerija', Вдохновение: '/iedvesma', 'О нас': '#par-mums', Техника: '#tehnika', Сотрудничество: '#process' },
  };
  const navLinks = navHrefs[lang] || navHrefs.lv;
  const langPaths = { lv: '/', en: '/en', ru: '/ru' };

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: 'rgba(245,240,230,0.96)', backdropFilter: 'blur(12px)', borderColor: 'rgba(138,112,85,0.12)' }}
      >
        <div className="px-6 md:px-12 flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to={langPaths[lang]} className="font-playfair text-sm md:text-[15px] whitespace-nowrap" style={{ color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {t.nav.map((item, i) => {
              const href = Object.values(navLinks)[i];
              const isInternal = href && !href.startsWith('#') && !href.startsWith('http');
              return isInternal ? (
                <Link key={item} to={href}
                  className="font-jost text-[11px] font-normal uppercase tracking-[0.14em] transition-colors hover:opacity-70"
                  style={{ color: 'var(--muted-brown)' }}>
                  {item}
                </Link>
              ) : (
                <a key={item} href={href}
                  className="font-jost text-[11px] font-normal uppercase tracking-[0.14em] transition-colors hover:opacity-70"
                  style={{ color: 'var(--muted-brown)' }}>
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Desktop: lang switcher */}
          <div className="hidden md:flex items-center gap-1">
            {Object.entries(langMeta).map(([code, meta]) => (
              <Link key={code} to={langPaths[code]}
                className="font-jost text-[10px] font-normal uppercase tracking-[0.08em] px-2 py-1 transition-all"
                style={{
                  color: lang === code ? 'var(--charcoal)' : 'var(--oak)',
                  opacity: lang === code ? 1 : 0.5,
                  fontWeight: lang === code ? 500 : 300,
                  borderBottom: lang === code ? '1px solid var(--gold)' : '1px solid transparent',
                }}>
                {meta.label}
              </Link>
            ))}
          </div>

          {/* Mobile: lang + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {Object.entries(langMeta).map(([code, meta]) => (
              <Link key={code} to={langPaths[code]}
                className="font-jost text-[9px] font-normal uppercase tracking-[0.08em] px-1.5 py-0.5"
                style={{
                  color: lang === code ? 'var(--charcoal)' : 'var(--oak)',
                  opacity: lang === code ? 1 : 0.45,
                  fontWeight: lang === code ? 500 : 300,
                }}>
                {meta.label}
              </Link>
            ))}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center justify-center w-10 h-10"
              style={{ color: 'var(--charcoal)' }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay — outside header to avoid stacking context issues */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          style={{ background: 'rgba(26,23,20,0.55)' }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer — outside header */}
      <div
        className="md:hidden fixed top-0 right-0 z-[70] h-full w-[80vw] max-w-[320px] flex flex-col"
        style={{
          background: '#F5F0E6',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: menuOpen ? '-8px 0 40px rgba(26,23,20,0.25)' : 'none',
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid rgba(138,112,85,0.15)' }}>
          <span className="font-playfair text-[15px]" style={{ color: '#1A1714', fontFamily: 'Georgia, serif' }}>Izvēlne</span>
          <button onClick={() => setMenuOpen(false)} className="flex items-center justify-center w-9 h-9" style={{ color: '#1A1714' }}>
            <X size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-6 py-6 gap-1 flex-1">
          {t.nav.map((item, i) => {
            const href = Object.values(navLinks)[i] || '#forma';
            const isInternal = href && !href.startsWith('#') && !href.startsWith('http');
            return isInternal ? (
              <Link key={item} to={href}
                onClick={() => setMenuOpen(false)}
                className="font-jost text-[15px] font-normal uppercase tracking-[0.1em] py-4 block"
                style={{ color: '#5C5248', borderBottom: '1px solid rgba(138,112,85,0.1)' }}>
                {item}
              </Link>
            ) : (
              <a key={item} href={href}
                onClick={() => setMenuOpen(false)}
                className="font-jost text-[15px] font-normal uppercase tracking-[0.1em] py-4 block"
                style={{ color: '#5C5248', borderBottom: '1px solid rgba(138,112,85,0.1)' }}>
                {item}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="px-6 pb-10">
          <a href="#forma" onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center py-4 font-jost text-[12px] font-medium uppercase tracking-[0.18em]"
            style={{ background: '#1A1714', color: '#F5F0E6', borderRadius: 999 }}>
            {t.mobileMenuCta}
          </a>
        </div>
      </div>
    </>
  );
}