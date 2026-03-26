import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

const IMAGES = [
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/b279f7c83_generated_image.png', label: 'Antracīts · Minimālisms', tags: ['Tumšais', 'Minimālisms'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/2bb6ec752_generated_image.png', label: 'Augstās kolonnas · Koks', tags: ['Dabīgs koks', 'Ar salu'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/2bdb3d69d_generated_image.png', label: 'Akcentu apgaismojums', tags: ['Tumšais', 'Ar salu'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/f792bf301_generated_image.png', label: 'Balts un melns', tags: ['Tumšais', 'Minimālisms'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/67058bf63_generated_image.png', label: 'Tēraudzilā', tags: ['Tumšais', 'Lielās'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/bf3a925bd_generated_image.png', label: 'Tumšais ozols', tags: ['Tumšais', 'Dabīgs koks'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/a694da8ef_generated_image.png', label: 'Antracīts · LED', tags: ['Tumšais', 'Minimālisms'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/9dd84752f_generated_image.png', label: 'Silts ozols · Balts', tags: ['Dabīgs koks', 'Gaišais'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/94b33d807_generated_image.png', label: 'Melnais · Zelta akcenti', tags: ['Tumšais', 'Ar salu'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/e021dd5f8_generated_image.png', label: 'Dūmainais ozols', tags: ['Dabīgs koks', 'Minimālisms'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/fa8e60f34_generated_image.png', label: 'Tīrais baltais', tags: ['Gaišais', 'Minimālisms'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/2640d7b1a_generated_image.png', label: 'Tumšais zilas nokrāsas', tags: ['Tumšais', 'Klasika'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/04b0af83d_generated_image.png', label: 'Greige elegance', tags: ['Gaišais', 'Minimālisms'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/fc41dd0c2_generated_image.png', label: 'Valriekstu sala', tags: ['Dabīgs koks', 'Ar salu'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/73e29f2ec_generated_image.png', label: 'Melnais · Dramatiski', tags: ['Tumšais', 'Minimālisms'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/08761ff45_generated_image.png', label: 'Pelēkais · Marmors', tags: ['Gaišais', 'Klasika'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/4f4acf2a5_generated_image.png', label: 'Divtonis · Skaidrs koks', tags: ['Dabīgs koks', 'Tumšais'] },
  { url: 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/e431b0966_generated_image.png', label: 'Melnais · Marmora sala', tags: ['Tumšais', 'Ar salu'] },
];

const CATEGORIES = ['Visi', 'Tumšais', 'Gaišais', 'Dabīgs koks', 'Minimālisms', 'Ar salu', 'Lielās', 'Klasika'];

export default function Inspiration() {
  const [active, setActive] = useState('Visi');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'Visi' ? IMAGES : IMAGES.filter((img) => img.tags.includes(active));

  return (
    <div style={{ background: 'var(--ivory)', minHeight: '100vh' }}>
      {/* Header */}
      <header className="sticky top-0 z-40 border-b" style={{ background: 'rgba(245,240,230,0.96)', backdropFilter: 'blur(12px)', borderColor: 'rgba(138,112,85,0.12)' }}>
        <div className="px-6 md:px-12 flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="flex items-center gap-2 font-jost text-[11px] uppercase tracking-[0.14em] transition-opacity hover:opacity-60" style={{ color: 'var(--muted-brown)' }}>
            <ArrowLeft size={14} strokeWidth={1.5} />
            <span className="hidden sm:inline">Atpakaļ</span>
          </Link>
          <h1 className="font-playfair text-[15px] md:text-[17px] font-normal tracking-[0.02em]" style={{ color: 'var(--charcoal)', fontFamily: 'Georgia, serif' }}>
            Dizaini iedvesmai
          </h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Underline accent */}
      <div className="flex justify-center pt-1">
        <div style={{ width: 80, height: 1, background: 'var(--gold)', opacity: 0.6 }} />
      </div>

      {/* Category Filter Buttons */}
      <div className="px-6 md:px-12 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="font-jost text-[10px] md:text-[11px] font-normal uppercase tracking-[0.12em] px-4 py-1.5 transition-all"
              style={{
                background: active === cat ? 'var(--charcoal)' : 'transparent',
                color: active === cat ? 'var(--ivory)' : 'var(--muted-brown)',
                border: `1px solid ${active === cat ? 'var(--charcoal)' : 'rgba(138,112,85,0.35)'}`,
                borderRadius: 2,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-6 md:px-12 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="group cursor-pointer"
              onClick={() => setLightbox(img)}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="font-jost text-[10px] font-light uppercase tracking-[0.1em] mt-2 text-center" style={{ color: 'var(--oak)' }}>
                {img.label}
              </p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-playfair text-[20px] italic mb-4" style={{ color: 'var(--oak)' }}>Nav atrasts neviens projekts</p>
            <button onClick={() => setActive('Visi')} className="font-jost text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: 2 }}>
              Rādīt visus
            </button>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="px-6 md:px-12 pb-20 text-center border-t pt-16" style={{ borderColor: 'rgba(138,112,85,0.12)' }}>
        <p className="font-playfair text-[20px] md:text-[24px] italic mb-2" style={{ color: 'var(--charcoal)' }}>Patīk kāds dizains?</p>
        <p className="font-jost text-[14px] font-light mb-8" style={{ color: 'var(--muted-brown)' }}>Izveidosim tieši tādu virtuvi jums</p>
        <Link
          to="/#forma"
          className="inline-flex items-center gap-3 px-8 py-4 font-jost text-[11px] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
          style={{ background: 'var(--charcoal)', color: 'var(--ivory)' }}
        >
          Pieteikties konsultācijai →
        </Link>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
          style={{ background: 'rgba(26,23,20,0.93)', backdropFilter: 'blur(8px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 transition-opacity hover:opacity-60"
            style={{ color: 'var(--ivory)' }}
          >
            <X size={22} />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.url} alt={lightbox.label} className="w-full object-contain max-h-[80vh]" />
            <p className="font-jost text-[11px] uppercase tracking-[0.16em] mt-4 text-center" style={{ color: 'rgba(245,240,230,0.5)' }}>
              {lightbox.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}