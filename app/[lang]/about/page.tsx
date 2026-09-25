import { StaticPage } from '@/components/StaticPage';
import { About } from '@/components/About';
import type { Metadata } from 'next';
import { isLocale } from '@/lib/i18n';
import { localizedAlternates } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  const title = { en: 'About AGENCY | Morocco-based digital studio', fr: 'À propos d’AGENCY | Studio digital au Maroc', ar: 'من نحن | AGENCY استوديو رقمي في المغرب' };
  const description = {
    en: 'Learn about AGENCY, a Morocco-based creative studio for brand design, web development, and digital growth.',
    fr: 'Découvrez AGENCY, un studio créatif basé au Maroc pour le branding, le web et la croissance digitale.',
    ar: 'تعرّف على AGENCY، استوديو إبداعي في المغرب لتصميم العلامات وتطوير المواقع والنمو الرقمي.',
  };
  return { title: title[locale], description: description[locale], alternates: localizedAlternates(locale, '/about') };
}

export default function AboutPage() {
  return <StaticPage><About /></StaticPage>;
}
