import type { Metadata } from 'next';
import { isLocale } from '@/lib/i18n';
import { localizedAlternates } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  const title = { en: 'Privacy Policy | AGENCY', fr: 'Politique de confidentialité | AGENCY', ar: 'سياسة الخصوصية | AGENCY' };
  const description = {
    en: 'Privacy policy for the AGENCY website, including cookies, analytics, contact forms, and advertising services.',
    fr: 'Politique de confidentialité du site AGENCY, y compris les cookies, analytics, formulaires et services publicitaires.',
    ar: 'سياسة الخصوصية لموقع AGENCY، بما في ذلك ملفات تعريف الارتباط والتحليلات ونماذج الاتصال والإعلانات.',
  };
  return { title: title[locale], description: description[locale], alternates: localizedAlternates(locale, '/privacy-policy') };
}

export { default } from '@/app/privacy-policy/page';
