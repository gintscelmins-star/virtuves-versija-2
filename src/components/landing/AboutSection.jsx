export default function AboutSection({ t }) {
  return (
    <section id="par-mums" style={{ background: 'var(--white)' }} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="font-jost text-[10px] font-normal uppercase tracking-[0.26em] mb-3" style={{ color: 'var(--gold)' }}>
              {t.aboutEyebrow}
            </div>
            <h2 className="font-playfair font-normal leading-[1.2] mb-6" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', color: 'var(--charcoal)' }}>
              {t.aboutHeading1}{' '}
              <em className="italic" style={{ color: 'var(--gold)' }}>{t.aboutHeadingEm}</em>
            </h2>
            <p className="font-jost text-[15px] font-light leading-[1.85] mb-8" style={{ color: 'var(--muted-brown)' }}>
              {t.aboutBody}
            </p>
          </div>

          {/* Right: facts */}
          <div className="flex flex-col gap-4">
            {t.aboutFacts.map((fact, i) => (
              <div key={i} className="flex items-start gap-4 p-4" style={{ background: 'var(--linen)' }}>
                <div className="flex-shrink-0 mt-1" style={{ width: 24, height: 1, background: 'var(--gold)', marginTop: 12 }} />
                <span className="font-jost text-[14px] font-light leading-[1.7]" style={{ color: 'var(--muted-brown)' }}>
                  {fact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}