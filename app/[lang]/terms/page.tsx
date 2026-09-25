import type { Metadata } from 'next';
import { isLocale } from '@/lib/i18n';
import { localizedAlternates } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  const title = { en: 'Terms & Conditions | AGENCY', fr: 'Conditions d’utilisation | AGENCY', ar: 'الشروط والأحكام | AGENCY' };
  const description = {
    en: 'Terms and conditions for using the AGENCY website and contacting our digital studio.',
    fr: 'Conditions d’utilisation du site AGENCY et de contact avec notre studio digital.',
    ar: 'شروط استخدام موقع AGENCY والتواصل مع الاستوديو الرقمي.',
  };
  return { title: title[locale], description: description[locale], alternates: localizedAlternates(locale, '/terms') };
}

export { default } from '@/app/terms/page';
