import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';

// AI-generated dark minimalist built-in kitchen images
const FALLBACK_IMAGES = [
  {
    url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/b279f7c83_generated_image.png',
    label_lv: 'Rīga · Antracīta minimālisms',
    label_en: 'Riga · Anthracite Minimalism',
    label_ru: 'Рига · Антрацитовый минимализм',
  },
  {
    url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/2bb6ec752_generated_image.png',
    label_lv: 'Premium · Augstās kolonnas',
    label_en: 'Premium · Full-Height Columns',
    label_ru: 'Премиум · Высокие колонны',
  },
  {
    url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/2bdb3d69d_generated_image.png',
    label_lv: 'Jūrmala · Akļens apgaismojums',
    label_en: 'Jūrmala · Accent Lighting',
    label_ru: 'Юрмала · Акцентное освещение',
  },
  {
    url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/f792bf301_generated_image.png',
    label_lv: 'Ekskluzīvs · Balts un melns',
    label_en: 'Exclusive · Black & White',
    label_ru: 'Эксклюзив · Чёрное и белое',
  },
  {
    url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/67058bf63_generated_image.png',
    label_lv: 'Rīga · Tēraudą zila',
    label_en: 'Riga · Steel Blue',
    label_ru: 'Рига · Стальной синий',
  },
  {
    url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/bf3a925bd_generated_image.png',
    label_lv: 'Rīga · Tumšā ozļa finierējums',
    label_en: 'Riga · Dark Oak Veneer',
    label_ru: 'Рига · Тёмный дуб',
  },
];

function getLangKey(t) {
  if (t.galleryHeading1?.includes('Completed')) return 'en';
  if (t.galleryHeading1?.includes('Реализованные')) return 'ru';
  return 'lv';
}

export default function GallerySection({ t }) {
  const [dbImages, setDbImages] = useState(null);
  const lang = getLangKey(t);

  useEffect(() => {
    base44.entities.GalleryImage.filter({ active: true }, 'sort_order', 6)
      .then((data) => setDbImages(data))
      .catch(() => setDbImages([]));
  }, []);

  // Use DB images if available, otherwise fallback
  const items = (dbImages && dbImages.length > 0)
    ? dbImages.slice(0, 6).map((img) => ({ url: img.url, label: img.label }))
    : FALLBACK_IMAGES.map((img) => ({ url: img.url, label: img[`label_${lang}`] }));

  return (
    <section id="galerija" style={{ background: 'var(--charcoal)' }} className="py-16 md:py-20">
      <div className="px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <h2 className="font-playfair font-normal leading-[1.2]" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', color: 'var(--white)', fontFamily: 'Georgia, serif' }}>
            {t.galleryHeading1}{' '}
            <em className="italic" style={{ color: 'var(--gold)' }}>{t.galleryHeadingEm}</em>
          </h2>
          <p className="font-jost text-[16px] font-light leading-[1.8] max-w-[360px]" style={{ color: 'rgba(245,240,230,0.45)' }}>
            {t.gallerySubtitle}
          </p>
        </div>

        {/* 2-column grid, 3 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[4/3] cursor-pointer">
              <img
                src={item.url}
                alt={item.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-5">
                <span
                  className="font-jost text-[11px] font-normal uppercase tracking-[0.14em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0"
                  style={{ color: 'var(--ivory)' }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <span className="font-playfair text-[16px] italic" style={{ color: 'var(--gold-lt)' }}>
            {t.galleryCtaLabel}
          </span>
          <a href="#forma" className="font-jost text-[13px] font-normal pb-0.5 transition-opacity hover:opacity-70"
            style={{ color: 'rgba(245,240,230,0.5)', borderBottom: '1px solid rgba(245,240,230,0.2)' }}>
            {t.galleryCtaLink}
          </a>
        </div>
      </div>
    </section>
  );
}