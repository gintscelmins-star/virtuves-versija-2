export default function Footer({ t }) {
  return (
    <footer style={{ background: 'var(--charcoal)' }} className="pb-16 md:pb-0">
      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="font-playfair text-[16px] font-normal mb-2" style={{ color: 'var(--ivory)', fontFamily: 'Georgia, serif' }}>
              iebūvējamāsvirtuves.lv
            </div>
            <p className="font-jost text-[12px] font-light" style={{ color: 'rgba(245,240,230,0.35)' }}>
              {t.footerTagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {t.footerLinks.map((link) => (
              <a key={link} href="#forma"
                className="font-jost text-[11px] font-normal uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
                style={{ color: 'rgba(245,240,230,0.4)' }}>
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="font-jost text-[11px] font-light" style={{ color: 'rgba(245,240,230,0.2)' }}>
            {t.footerCopy}
          </span>
          <a href="#" className="font-jost text-[11px] font-light transition-opacity hover:opacity-70" style={{ color: 'rgba(245,240,230,0.2)' }}>
            {t.footerPrivacy}
          </a>
        </div>
      </div>
    </footer>
  );
}