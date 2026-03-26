export default function StatsSection({ t }) {
  return (
    <section style={{ background: 'var(--linen)' }} className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="group p-8 md:p-10 text-center transition-all"
              style={{ background: 'var(--white)', borderBottom: '3px solid transparent' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
            >
              <div className="font-playfair font-normal leading-none mb-3" style={{ fontSize: 'clamp(48px, 5vw, 64px)', color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
                {stat.number}
              </div>
              <div className="font-jost text-[10px] font-medium uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--gold)' }}>
                {stat.title}
              </div>
              <p className="font-jost text-[13px] font-light leading-[1.75] max-w-[280px] mx-auto" style={{ color: 'var(--muted-brown)' }}>
                {stat.story}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}