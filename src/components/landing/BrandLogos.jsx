const brands = [
  { name: 'Miele', url: 'https://www.miele.com' },
  { name: 'Gaggenau', url: 'https://www.gaggenau.com' },
  { name: 'V-ZUG', url: 'https://www.vzug.com' },
  { name: 'Liebherr', url: 'https://www.liebherr.com' },
  { name: 'Blum', url: 'https://www.blum.com' },
  { name: 'Hettich', url: 'https://www.hettich.com' },
  { name: 'Kohler', url: 'https://www.kohler.com' },
  { name: 'Dornbracht', url: 'https://www.dornbracht.com' },
];

export default function BrandLogos({ t }) {
  return (
    <section id="markas" style={{ background: 'var(--linen)' }}>
      <div className="px-6 md:px-12 py-6 md:py-7">
        {/* Desktop: static row */}
        <div className="hidden md:flex items-center gap-6">
          <span className="font-jost text-[10px] font-normal uppercase tracking-[0.16em] whitespace-nowrap mr-4" style={{ color: 'var(--oak)' }}>
            {t.brandsLabel}
          </span>
          <div className="flex-1 flex items-center justify-between">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-playfair text-[20px] font-normal tracking-[0.02em] transition-opacity"
                style={{ color: 'var(--charcoal)', opacity: 0.75, textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
              >
                {brand.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile: marquee with links */}
        <div className="md:hidden overflow-hidden">
          <div className="font-jost text-[9px] font-normal uppercase tracking-[0.16em] mb-3 text-center" style={{ color: 'var(--oak)' }}>
            {t.brandsLabel}
          </div>
          <div className="relative overflow-hidden">
            <div className="marquee-track flex items-center gap-10 whitespace-nowrap" style={{ width: 'max-content' }}>
              {[...brands, ...brands].map((brand, i) => (
                <a
                  key={i}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-playfair text-[20px] font-normal tracking-[0.02em]"
                  style={{ color: 'var(--charcoal)', opacity: 0.75, textDecoration: 'none' }}
                >
                  {brand.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}