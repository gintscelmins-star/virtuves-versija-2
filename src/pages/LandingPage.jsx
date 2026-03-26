import { translations } from '../lib/translations';
import LandingPageLayout from '../components/landing/LandingPageLayout';

export default function LandingPage() {
  return <LandingPageLayout t={translations.lv} lang="lv" />;
}