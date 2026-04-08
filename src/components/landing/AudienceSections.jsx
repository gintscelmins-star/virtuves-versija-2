export default function AudienceSections({ t }) {
  const sections = [
    {
      id: 'privatmajam',
      eyebrow: t.audPrivateEyebrow || 'Privātmājām',
      heading: t.audPrivateHeading || 'Telpa un gaisma bez kompromisiem',
      body: t.audPrivateBody || 'Plašums, kas iedarbojas. Iebūvēta tehnika un masīvas virsmas, kas radītas intensīvai kulinārijas lietoSanai un augstākā līmeņa representācijai.',
      cta: t.audPrivateCta || 'Pieteikties projektam',
      images: [
        'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/fd7849353_generated_image.png',
        'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/c6613f425_generated_image.png',
      ],
      reversed: false,
      bg: 'var(--ivory)',
    },
    {
      id: 'jaunajiem-projektiem',
      eyebrow: t.audNewDevEyebrow || 'Jaunajiem projektiem',
      heading: t.audNewDevHeading || 'Nevainojama pāreja uz dzīvojamo zonu',
      body: t.audNewDevBody || 'Tīras līnijas, inteliģenti integrēts apgaismojums un arhitektonisks minimālisms — radīts, lai papildinātu mūsdienu jauno projektu precīzo ģeometriju.',
      cta: t.audNewDevCta || 'Pieteikties projektam',
      images: [
        'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/c52b86da9_generated_image.png',
        'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/9c260efb9_generated_image.png',
      ],
      reversed: true,
      bg: 'var(--linen)',
    },
    {
      id: 'serijveida',
      eyebrow: t.audCompactEyebrow || 'Kompaktais lukss',
      heading: t.audCompactHeading || 'Ekskluzīvs nenozīmē masīvs',
      body: t.audCompactBody || 'Tas nozīmē milimetra precizitāti. Gudri uzglabāšanas risinājumi un premium mehānismi, kas ierobežotu telpu pārvērš augstas klases darba vietā. Mazāks materiālu apjoms — nekompromitēts standarts.',
      cta: t.audCompactCta || 'Pieteikties projektam',
      images: [
        'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/ffe847060_generated_image.png',
        'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/c302a1c97_generated_image.png',
      ],
      reversed: false,
      bg: 'var(--white)',
    },
  ];

  return (
    <>
      {sections.map((s) => (
        <section key={s.id} id={s.id} style={{ background: s.bg }} className="py-16 md:py-24">
          <div className="px-6 md:px-12">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${s.reversed ? 'md:[&>:first-child]:order-2 md:[&>:last-child]:order-1' : ''}`}>
              {/* Text */}
              <div className="flex flex-col justify-center">
                <div className="font-jost text-[10px] font-normal uppercase tracking-[0.26em] mb-3" style={{ color: 'var(--gold)' }}>
                  {s.eyebrow}
                </div>
                <h2 className="font-playfair font-normal leading-[1.15] mb-5" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
                  {s.heading}
                </h2>
                <p className="font-jost text-[16px] font-light leading-[1.85] mb-8" style={{ color: 'var(--muted-brown)', maxWidth: 480 }}>
                  {s.body}
                </p>
                <a
                  href="#forma"
                  className="self-start inline-flex items-center gap-3 px-7 py-3.5 font-jost text-[11px] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-85"
                  style={{ background: 'var(--charcoal)', color: 'var(--ivory)' }}
                >
                  {s.cta} →
                </a>
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-2">
                <div className="overflow-hidden" style={{ aspectRatio: '2/3' }}>
                  <img
                    src={s.images[0]}
                    alt={s.heading}
                    loading="lazy"
                    decoding="async"
                    width="467"
                    height="700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden mt-8" style={{ aspectRatio: '2/3' }}>
                  <img
                    src={s.images[1]}
                    alt={s.eyebrow}
                    loading="lazy"
                    decoding="async"
                    width="467"
                    height="700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Wardrobes — Full-width cinematic banner */}
      <section id="skapji" style={{ background: 'var(--charcoal)' }} className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px] md:min-h-[600px]">
          {/* Images side */}
          <div className="relative overflow-hidden min-h-[320px] md:min-h-full">
            <img
              src="https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/1c8aa89e4_generated_image.png"
              alt="Premium iebūvējamie skapi"
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, var(--charcoal))' }} />
          </div>
          {/* Text side */}
          <div className="flex flex-col justify-center px-8 md:px-14 py-14 md:py-20 relative z-10">
            <div className="font-jost text-[10px] font-normal uppercase tracking-[0.26em] mb-4" style={{ color: 'var(--gold)' }}>
              {t.wardrobesEyebrow || 'Iebūvējamie skapi'}
            </div>
            <h2 className="font-playfair font-normal leading-[1.15] mb-5" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', color: 'var(--white)', fontFamily: 'Georgia, serif' }}>
              {t.wardrobesHeading || 'Tā pati meistarcilvēku izpildmeistarība'}
              {' '}
              <em className="italic" style={{ color: 'var(--gold)' }}>{t.wardrobesHeadingEm || '— jebkurai telpai'}</em>
            </h2>
            <p className="font-jost text-[16px] font-light leading-[1.85] mb-8" style={{ color: 'rgba(245,240,230,0.65)', maxWidth: 460 }}>
              {t.wardrobesBody || 'No gātavām viesistābām līdz individuāliem sētnieccīu risinājumiem. Tie paši materiāli, tis pašs standarts.'}
            </p>
            <a
              href="#forma"
              className="self-start inline-flex items-center gap-3 px-7 py-3.5 font-jost text-[11px] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-85"
              style={{ background: 'var(--gold)', color: 'var(--charcoal)' }}
            >
              {t.wardrobesCta || 'Pieteikties konsultācijai'} →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
