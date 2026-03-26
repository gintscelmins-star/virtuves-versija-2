import { translations } from '../lib/translations';
import LandingPageLayout from '../components/landing/LandingPageLayout';

export default function LandingPageRU() {
  return <LandingPageLayout t={translations.ru} lang="ru" />;
}