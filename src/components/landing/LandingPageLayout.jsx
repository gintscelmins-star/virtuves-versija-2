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
import AppliancesSection from './AppliancesSection';

const HERO_IMAGE = 'https://media.base44.com/images/public/69c13f658c0c0240c61b00fb/06d26d805_generated_1c0578e3.png';

export default function LandingPageLayout({ t, lang }) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--ivory)' }}>
      <StickyHeader t={t} lang={lang} />
      <HeroSection heroImage={HERO_IMAGE} t={t} />
      <TrustBar t={t} />
      <BrandLogos t={t} />
      <ValueProps t={t} />
      <GallerySection t={t} />
      <StatsSection t={t} />
      <AboutSection t={t} />
      <BenefitsSection t={t} />
      <AppliancesSection t={t} />
      <ProcessSection t={t} />
      <TestimonialsSection t={t} />
      <FAQSection t={t} />
      <ContactForm t={t} />
      <Footer t={t} />
      <FloatingPhoneCTA t={t} />
    </div>
  );
}