import { useState, useEffect, useMemo } from 'react';
import { base44 } from '@/api/base44Client';

// Full pool from Inspiration page — rotates per visit
const IMAGE_POOL = [
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/b279f7c83_generated_image.png', label_lv: 'Rīga · Antracīta minimālisms', label_en: 'Riga · Anthracite Minimalism', label_ru: 'Рига · Антрацитовый минимализм' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/2bb6ec752_generated_image.png', label_lv: 'Premium · Augstās kolonnas', label_en: 'Premium · Full-Height Columns', label_ru: 'Премиум · Высокие колонны' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/2bdb3d69d_generated_image.png', label_lv: 'Jūrmala · Akļens apgaismojums', label_en: 'Jūrmala · Accent Lighting', label_ru: 'Юрмала · Акцентное освещение' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/f792bf301_generated_image.png', label_lv: 'Ekskluzīvs · Balts un melns', label_en: 'Exclusive · Black & White', label_ru: 'Эксклюзив · Чёрное и белое' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/67058bf63_generated_image.png', label_lv: 'Rīga · Tēraudā zila', label_en: 'Riga · Steel Blue', label_ru: 'Рига · Стальной синий' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/bf3a925bd_generated_image.png', label_lv: 'Rīga · Tumšā ozļa finierējums', label_en: 'Riga · Dark Oak Veneer', label_ru: 'Рига · Тёмный дуб' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/a694da8ef_generated_image.png', label_lv: 'Antracīts · LED', label_en: 'Anthracite · LED', label_ru: 'Антрацит · LED' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/9dd84752f_generated_image.png', label_lv: 'Silts ozols · Balts', label_en: 'Warm Oak · White', label_ru: 'Тёплый дуб · Белый' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/94b33d807_generated_image.png', label_lv: 'Melnais · Zelta akcenti', label_en: 'Black · Gold Accents', label_ru: 'Чёрный · Золотые акценты' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/e021dd5f8_generated_image.png', label_lv: 'Dūmainais ozols', label_en: 'Smoked Oak', label_ru: 'Дымчатый дуб' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/fa8e60f34_generated_image.png', label_lv: 'Tīrais baltais', label_en: 'Pure White', label_ru: 'Чистый белый' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/2640d7b1a_generated_image.png', label_lv: 'Tumšais zilas nokrāsas', label_en: 'Dark Blue Tone', label_ru: 'Тёмный синий' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/04b0af83d_generated_image.png', label_lv: 'Greige elegance', label_en: 'Greige Elegance', label_ru: 'Greige элегантность' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/fc41dd0c2_generated_image.png', label_lv: 'Valriekstu sala', label_en: 'Walnut Island', label_ru: 'Ореховый остров' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/73e29f2ec_generated_image.png', label_lv: 'Melnais · Dramatiski', label_en: 'Black · Dramatic', label_ru: 'Чёрный · Драматично' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/08761ff45_generated_image.png', label_lv: 'Pelēkais · Marmors', label_en: 'Grey · Marble', label_ru: 'Серый · Мрамор' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/4f4acf2a5_generated_image.png', label_lv: 'Divtonis · Skaidrs koks', label_en: 'Two-tone · Clear Wood', label_ru: 'Двухтон · Светлое дерево' },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/e431b0966_generated_image.png', label_lv: 'Melnais · Marmora sala', label_en: 'Black · Marble Island', label_ru: 'Чёрный · Мраморный остров' },
];

// Get a rotating offset per visit (stored in sessionStorage)
function getVisitOffset() {
  try {
    const stored = sessionStorage.getItem('gal_offset');
    const offset = stored ? (parseInt(stored) + 6) % IMAGE_POOL.length : 0;
    sessionStorage.setItem('gal_offset', String(offset));
    return offset;
  } catch { return 0; }
}

function getLangKey(t) {
  if (t.galleryHeading1?.includes('Completed')) return 'en';
  if (t.galleryHeading1?.includes('Реализованные')) return 'ru';
  return 'lv';
}

export default function GallerySection({ t }) {
  const [dbImages, setDbImages] = useState(null);
  const lang = getLangKey(t);
  const visitOffset = useMemo(() => getVisitOffset(), []);

  useEffect(() => {
    base44.entities.GalleryImage.filter({ active: true }, 'sort_order', 6)
      .then((data) => setDbImages(data))
      .catch(() => setDbImages([]));
  }, []);

  const items = (dbImages && dbImages.length > 0)
    ? dbImages.slice(0, 6).map((img) => ({ url: img.url, label: img.label }))
    : Array.from({ length: 6 }, (_, i) => IMAGE_POOL[(visitOffset + i) % IMAGE_POOL.length]).map((img) => ({ url: img.url, label: img[`label_${lang}`] }));

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