import { translations } from '../lib/translations';
import LandingPageLayout from '../components/landing/LandingPageLayout';

export default function LandingPageEN() {
  return <LandingPageLayout t={translations.en} lang="en" />;
}