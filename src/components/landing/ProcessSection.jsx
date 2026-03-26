export default function ProcessSection({ t }) {
  return (
    <section id="process" style={{ background: 'var(--ivory)' }} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12 md:mb-14">
          <div className="font-jost text-[10px] font-normal uppercase tracking-[0.26em] mb-3" style={{ color: 'var(--gold)' }}>
            {t.processEyebrow}
          </div>
          <h2 className="font-playfair font-normal leading-[1.2]" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
            {t.processHeading1}{' '}
            <em className="italic" style={{ color: 'var(--gold)' }}>{t.processHeadingEm}</em>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'var(--linen)' }}>
          {t.processSteps.map((step) => (
            <div key={step.num} className="p-6 md:p-8 relative" style={{ background: 'var(--ivory)' }}>
              <div
                className="font-playfair font-normal leading-none absolute top-4 right-5 select-none pointer-events-none"
                style={{ fontSize: 'clamp(56px, 6vw, 80px)', color: 'var(--charcoal)', opacity: 0.04 }}
              >
                {step.num}
              </div>
              <div className="font-jost text-[10px] font-normal uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--gold)' }}>
                {t.processEyebrow === 'Kā tas notiek' ? 'Solis' : t.processEyebrow === 'How it works' ? 'Step' : 'Шаг'} {step.num}
              </div>
              <h3 className="font-playfair text-[17px] md:text-[18px] font-normal mb-3" style={{ color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
                {step.title}
              </h3>
              <p className="font-jost text-[13px] font-light leading-[1.75] mb-5" style={{ color: 'var(--muted-brown)' }}>
                {step.body}
              </p>
              <span className="inline-block font-jost text-[9px] font-medium uppercase tracking-[0.14em] px-3 py-1.5"
                style={{ background: 'rgba(201,169,110,0.12)', color: 'var(--gold)', border: '1px solid rgba(201,169,110,0.2)' }}>
                {step.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}