import { useEffect, useRef } from 'react';
import StickyHeader from './StickyHeader';
import HeroSection from './HeroSection';
import TrustBar from './TrustBar';
import BrandLogos from './BrandLogos';
import ValueProps from './ValueProps';
import GallerySection from './GallerySection';
import StatsSection from './StatsSection';
import BenefitsSection from './BenefitsSection';
import ProcessSection from './ProcessSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import FloatingPhoneCTA from './FloatingPhoneCTA';
import AboutSection from './AboutSection';
import AudienceSections from './AudienceSections';
import AppliancesSection from './AppliancesSection';

const HERO_IMAGE = 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/06d26d805_generated_1c0578e3.png';

const META = {
  lv: {
    title: 'Iebūvējamās virtuves Rīgā — Individuāli projekti | iebuvejamasvirtuves.lv',
    description: 'Individuāli iebūvējamās virtuves Latvijā. Bezmaksas vizīte ar dizaineri. 984 realizēti projekti. 25+ gadi Latvijā. 10 gadu garantija. Sazināmies 2 stundu laikā.',
    lang: 'lv',
  },
  en: {
    title: 'Custom Built-in Kitchens in Riga — Individual Projects | iebuvejamasvirtuves.lv',
    description: 'Custom built-in kitchens in Latvia. Free designer visit. 984 completed projects. 25+ years in Latvia. 10-year warranty. We respond within 2 hours on working days.',
    lang: 'en',
  },
  ru: {
    title: 'Индивидуальные встроенные кухни в Риге | iebuvejamasvirtuves.lv',
    description: 'Встроенные кухни на заказ в Латвии. Бесплатный визит дизайнера. 984 реализованных проекта. 25+ лет в Латвии. Гарантия 10 лет. Отвечаем в течение 2 часов.',
    lang: 'ru',
  },
};

export default function LandingPageLayout({ t, lang }) {
  const firedDepths = useRef(new Set());

  // Dynamic meta / title / html lang
  useEffect(() => {
    const m = META[lang] || META.lv;
    document.title = m.title;
    document.documentElement.lang = m.lang;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.name = 'description';
      document.head.appendChild(desc);
    }
    desc.content = m.description;
  }, [lang]);

  // Scroll depth GTM events — 25 / 50 / 75 / 100
  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const fired = firedDepths.current;

    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = Math.round((scrolled / total) * 100);

      thresholds.forEach((t) => {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'scroll_depth',
            scroll_threshold: t,
            page_lang: lang,
          });
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lang]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--ivory)' }}>
      <StickyHeader t={t} lang={lang} />
      <HeroSection heroImage={HERO_IMAGE} t={t} />
      <TrustBar t={t} />
      <BrandLogos t={t} />
      <ValueProps t={t} />
      <GallerySection t={t} />
      <div className="below-fold"><StatsSection t={t} /></div>
      <div className="below-fold"><AboutSection t={t} /></div>
      <div className="below-fold"><AudienceSections t={t} /></div>
      <div className="below-fold"><BenefitsSection t={t} /></div>
      <div className="below-fold"><AppliancesSection t={t} /></div>
      <div className="below-fold"><ProcessSection t={t} /></div>
      <div className="below-fold"><TestimonialsSection t={t} /></div>
      <div className="below-fold"><FAQSection t={t} /></div>
      <div className="below-fold"><ContactForm t={t} /></div>
      <Footer t={t} />
      <FloatingPhoneCTA t={t} />
    </div>
  );
}
