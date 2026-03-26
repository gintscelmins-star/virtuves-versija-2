export default function TrustBar({ t }) {
  const stats = t.trust;
  return (
    <section style={{ background: 'var(--charcoal)' }} className="py-5 md:py-6">
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-4 px-3 text-center"
              style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
            >
              <div className="font-playfair font-normal mb-1" style={{ fontSize: 'clamp(44px, 6vw, 64px)', color: 'var(--gold)' }}>
                {s.v}
              </div>
              <div className="font-jost text-[11px] font-normal uppercase tracking-[0.16em]" style={{ color: 'rgba(245,240,230,0.45)' }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}