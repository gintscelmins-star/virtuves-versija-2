export default function BenefitsSection({ t }) {
  return (
    <section id="ieguvumi" style={{ background: 'var(--charcoal)' }} className="py-16 md:py-20">
      <div className="px-6 md:px-12">
        <div className="mb-12 md:mb-14">
          <div className="font-jost text-[10px] font-normal uppercase tracking-[0.26em] mb-3" style={{ color: 'var(--gold)' }}>
            {t.benefitsEyebrow}
          </div>
          <h2 className="font-playfair font-normal leading-[1.2]" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', color: 'var(--white)', fontFamily: 'Georgia, serif' }}>
            {t.benefitsHeading1}{' '}
            <em className="italic" style={{ color: 'var(--gold)' }}>{t.benefitsHeadingEm}</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {t.benefitsGroups.map((group, i) => (
            <div key={i} className="p-7 md:p-9" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <h3 className="font-playfair text-[18px] italic font-normal mb-5" style={{ color: 'var(--gold-lt)', fontFamily: 'Georgia, serif' }}>
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item, j) => (
                  <li key={j} className="flex gap-3 font-jost text-[16px] font-light leading-[1.75]" style={{ color: 'rgba(245,240,230,0.55)' }}>
                    <span className="flex-shrink-0" style={{ color: 'var(--gold)' }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}