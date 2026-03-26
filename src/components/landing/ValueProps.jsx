import { Ruler, Shield, Star } from 'lucide-react';

const icons = [Ruler, Shield, Star];

export default function ValueProps({ t }) {
  return (
    <section style={{ background: 'var(--white)' }} className="py-16 md:py-20">
      <div className="px-6 md:px-12">
        <div className="mb-12 md:mb-14">
          <div className="font-jost text-[10px] font-normal uppercase tracking-[0.26em] mb-3" style={{ color: 'var(--gold)' }}>
            {t.vpEyebrow}
          </div>
          <h2 className="font-playfair font-normal leading-[1.2]" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
            {t.vpHeading1}
            <br />
            <em className="italic" style={{ color: 'var(--gold)' }}>{t.vpHeadingEm}</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'var(--linen)' }}>
          {t.vpCards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group p-7 md:p-8 transition-all"
                style={{ background: 'var(--white)', borderBottom: '3px solid transparent' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
              >
                <Icon size={28} strokeWidth={1.2} style={{ color: 'var(--gold)' }} className="mb-5" />
                <h3 className="font-playfair text-[18px] md:text-[20px] font-normal mb-3" style={{ color: 'var(--charcoal)' }}>
                  {card.title}
                </h3>
                <p className="font-jost text-[17px] font-light leading-[1.8]" style={{ color: 'var(--muted-brown)' }}>
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}