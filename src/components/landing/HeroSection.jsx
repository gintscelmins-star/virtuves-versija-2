export default function HeroSection({ heroImage, t }) {
  return (
    <section id="hero" style={{ background: 'var(--ivory)' }}>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px] md:min-h-[620px]">
          {/* Left Content */}
          <div className="md:col-span-6 flex flex-col justify-center px-5 md:px-10 py-12 md:py-16 order-2 md:order-1">
            <h1
              className="font-playfair font-normal leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(28px, 4.8vw, 64px)', color: 'var(--charcoal)', fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              {t.heroTitle1}
              <br />
              <em className="italic" style={{ color: 'var(--gold)' }}>{t.heroTitleEm}</em>
              <br />
              <span className="italic font-normal" style={{ fontSize: '0.52em', color: 'var(--oak)', fontFamily: 'Georgia, serif' }}>
                {t.heroTitleSub}
              </span>
            </h1>

            <p
              className="font-jost font-light text-[17px] md:text-[18px] leading-[1.85] mb-8 max-w-[520px]"
              style={{ color: 'var(--muted-brown)' }}
            >
              {t.heroBody}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="#forma"
                className="inline-flex items-center gap-3 px-8 py-4 font-jost text-[12px] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
                style={{ background: 'var(--charcoal)', color: 'var(--ivory)', minHeight: 52 }}
              >
                {t.heroCta}
              </a>
              <a
                href="#galerija"
                className="inline-flex items-center gap-2 font-jost text-[12px] font-normal uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
                style={{ color: 'var(--oak)', borderBottom: '1px solid var(--oak)', paddingBottom: 2 }}
              >
                {t.heroCtaSecondary || 'Skatīt mūsu darbus ↓'}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-6 relative overflow-hidden order-1 md:order-2 min-h-[420px] md:min-h-full">
            <img
              src="/images/hero.webp"
              alt="Premium iebūvējamā virtuve"
              loading="eager"
              fetchpriority="high"
              decoding="sync"
              width="800"
              height="620"
              sizes="(max-width: 768px) 100vw, 50vw"
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
}import { useEffect, useRef } from "react";

export default function HeroSection() {
  const imgRef = useRef(null);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh', background: '#0F1117' }}
    >
      {/* Background attēls */}
      <img
        ref={imgRef}
        src="/images/hero1.webp"
        alt="Premium iebūvējamā virtuve"
        loading="eager"
        fetchpriority="high"
        decoding="sync"
        width="1500"
        height="900"
        className="hero-zoom absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.55 }}
      />

      {/* Overlay — gradient no apakšas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0F1117 0%, #0F1117 15%, rgba(15,17,23,0.55) 55%, rgba(15,17,23,0.2) 100%)'
        }}
      />

      {/* Saturs */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[100svh] px-5 md:px-16 pb-16 md:pb-24 pt-32">

        {/* Label */}
        <p
          className="mb-4 uppercase tracking-[0.22em] font-medium"
          style={{ fontSize: 11, color: '#B8935A', fontFamily: 'Inter, sans-serif' }}
        >
          Individuāli mēbeļu projekti · Rīga
        </p>

        {/* H1 */}
        <h1
          className="leading-[1.06] mb-4 max-w-[720px]"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 76px)',
            color: '#FFFFFF',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 500
          }}
        >
          Mēbeles, kas dzimst
          <br />
          <em style={{ color: '#B8935A', fontStyle: 'italic' }}>
            no jūsu telpas.
          </em>
        </h1>

        {/* H2 */}
        <p
          className="mb-6 max-w-[560px] leading-[1.7]"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'rgba(255,255,255,0.72)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 400
          }}
        >
          Precīza pielāgošana. Nekompromitēts rezultāts.
        </p>

        {/* Body */}
        <p
          className="mb-10 max-w-[500px] leading-[1.9]"
          style={{
            fontSize: 15,
            color: 'rgba(255,255,255,0.58)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300
          }}
        >
          25 gadi Latvijas tirgū. Bezmaksas dizainera konsultācija
          mūsu birojā. Cenas aprēķins 24 stundu laikā. 10 gadu garantija.
        </p>

        {/* CTA pogas */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
          <a
            href="#forma"
            className="inline-flex items-center gap-3 px-8 py-4 transition-opacity hover:opacity-90"
            style={{
              background: '#B8935A',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              minHeight: 52
            }}
          >
            Piesakīties bezmaksas konsultācijai →
          </a>
          <a
            href="#galerija"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              paddingBottom: 2,
              alignSelf: 'center'
            }}
          >
            Skatīt mūsu darbus ↓
          </a>
        </div>

        {/* Trust signāli */}
        <div
          className="flex flex-wrap gap-x-8 gap-y-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 20 }}
        >
          {[
            { num: '25', label: 'Gadi tirgū' },
            { num: '984', label: 'Realizēti projekti' },
            { num: '10g', label: 'Garantija' },
            { num: '24h', label: 'Cenas aprēķins' },
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-2">
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#B8935A',
                  fontFamily: 'Cormorant Garamond, serif'
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.45)',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}