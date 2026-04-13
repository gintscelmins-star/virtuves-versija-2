const PSEO_PILSETAS = [
  { nosaukums: 'Rīgā', slug: 'riga' },
  { nosaukums: 'Jūrmalā', slug: 'jurmala' },
  { nosaukums: 'Daugavpilī', slug: 'daugavpils' },
  { nosaukums: 'Jelgavā', slug: 'jelgava' },
  { nosaukums: 'Valmieramā', slug: 'valmiera' },
  { nosaukums: 'Ventspilī', slug: 'ventspils' },
  { nosaukums: 'Liepājā', slug: 'liepaja' },
  { nosaukums: 'Rēzeknē', slug: 'rezekne' },
]

const PSEO_TELPAS = [
  { nosaukums: '602. sērija', slug: '602-serija' },
  { nosaukums: 'Privātmāja', slug: 'privatmaja' },
  { nosaukums: 'Jaunbūve', slug: 'jaunbuve' },
  { nosaukums: 'Atvērtais planājums', slug: 'atvertais-planojums' },
  { nosaukums: 'Studijas dzīvoklis', slug: 'studijas-dzivoklis' },
  { nosaukums: 'Hruščovka', slug: '316-serija-hruscovka' },
]

export default function Footer({ t }) {
  return (
    <footer style={{ background: 'var(--charcoal)' }} className="pb-16 md:pb-0">
      <div className="px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="font-playfair text-[16px] font-normal mb-2" style={{ color: 'var(--ivory)', fontFamily: 'Georgia, serif' }}>
              iebūvējāmāsvirtuves.lv
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

        {/* SEO iekšējās saites — diskrēti, Google indeksācijai */}
        <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
            {PSEO_PILSETAS.map(({ nosaukums, slug }) => (
              <a
                key={slug}
                href={`https://pseo.iebuvejamasvirtuves.lv/virtuves/moderna/mdf/602-serija/${slug}`}
                className="font-jost text-[10px] font-light transition-opacity hover:opacity-60"
                style={{ color: 'rgba(245,240,230,0.15)' }}
              >
                Virtuves {nosaukums}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {PSEO_TELPAS.map(({ nosaukums, slug }) => (
              <a
                key={slug}
                href={`https://pseo.iebuvejamasvirtuves.lv/virtuves/moderna/mdf/${slug}/riga`}
                className="font-jost text-[10px] font-light transition-opacity hover:opacity-60"
                style={{ color: 'rgba(245,240,230,0.15)' }}
              >
                Virtuves {nosaukums}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
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