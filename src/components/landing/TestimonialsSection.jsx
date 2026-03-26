export default function TestimonialsSection({ t }) {
  return (
    <section style={{ background: 'var(--linen)' }} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12 md:mb-14">
          <div className="font-jost text-[10px] font-normal uppercase tracking-[0.26em] mb-3" style={{ color: 'var(--gold)' }}>
            {t.testimonialsEyebrow}
          </div>
          <h2 className="font-playfair font-normal leading-[1.2]" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
            {t.testimonialsHeading1}{' '}
            <em className="italic" style={{ color: 'var(--gold)' }}>{t.testimonialsHeadingEm}</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'var(--linen2)' }}>
          {t.testimonials.map((te, i) => (
            <div key={i} className="p-7 md:p-8" style={{ background: 'var(--white)' }}>
              <div className="font-playfair text-[48px] leading-none mb-2" style={{ color: 'var(--gold)', opacity: 0.4 }}>"</div>
              <p className="font-playfair text-[15px] md:text-[16px] italic font-normal leading-[1.7] mb-6" style={{ color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
                {te.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-jost text-[11px] font-medium tracking-[0.08em]" style={{ background: 'var(--linen)', color: 'var(--oak)' }}>
                  {te.initials}
                </div>
                <div>
                  <div className="font-jost text-[13px] font-normal" style={{ color: 'var(--charcoal)' }}>{te.name}</div>
                  <div className="font-jost text-[11px] font-light" style={{ color: 'var(--oak)' }}>{te.city} · {te.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}