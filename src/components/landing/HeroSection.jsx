export default function HeroSection({ heroImage, t }) {
  return (
    <section id="hero" style={{ background: 'var(--ivory)' }}>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px] md:min-h-[620px]">
          {/* Left Content */}
          <div className="md:col-span-6 flex flex-col justify-center px-5 md:px-10 py-12 md:py-16 order-2 md:order-1">

            {/* H1 */}
            <h1
              className="font-playfair font-normal leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(34px, 4.8vw, 64px)', color: 'var(--charcoal)', fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              {t.heroTitle1}
              <br />
              <em className="italic" style={{ color: 'var(--gold)' }}>{t.heroTitleEm}</em>
              <br />
              <span className="italic font-normal" style={{ fontSize: '0.52em', color: 'var(--oak)', fontFamily: 'Georgia, serif' }}>
                {t.heroTitleSub}
              </span>
            </h1>

            {/* Body */}
            <p
              className="font-jost font-light text-[17px] md:text-[18px] leading-[1.85] mb-8 max-w-[520px]"
              style={{ color: 'var(--muted-brown)' }}
            >
              {t.heroBody}
            </p>

            {/* CTA only */}
            <div>
              <a
                href="#forma"
                className="inline-flex items-center gap-3 px-8 py-4 font-jost text-[12px] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
                style={{ background: 'var(--charcoal)', color: 'var(--ivory)' }}
              >
                {t.heroCta} →
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-6 relative overflow-hidden order-1 md:order-2 min-h-[340px] md:min-h-full">
            <img
              src={heroImage}
              alt="Premium iebūvējamā virtuve"
              loading="eager"
              fetchpriority="high"
              decoding="sync"
              width="800"
              height="620"
              className="hero-zoom absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, var(--ivory) 0%, transparent 30%), linear-gradient(to right, var(--ivory) 0%, transparent 40%)' }}
            />
            <div
              className="absolute inset-0 pointer-events-none md:hidden"
              style={{ background: 'linear-gradient(to bottom, var(--ivory) 0%, transparent 20%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}