import { StaticPage } from '@/components/StaticPage';
import { Services } from '@/components/Services';
import type { Metadata } from 'next';
import { isLocale } from '@/lib/i18n';
import { localizedAlternates } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  const title = { en: 'Services | Web Development, Branding & Digital Marketing', fr: 'Services | Web, branding et marketing digital', ar: 'خدمات تطوير الويب والهوية والتسويق الرقمي' };
  const description = {
    en: 'Explore AGENCY services: high-converting websites, graphic design, branding, SEO, and performance marketing for ambitious businesses.',
    fr: 'Découvrez les services AGENCY : sites orientés conversion, design, branding, SEO et marketing à la performance.',
    ar: 'اكتشف خدمات AGENCY: مواقع عالية التحويل وتصميم جرافيكي وهوية بصرية وتحسين SEO وتسويق قائم على الأداء.',
  };
  return { title: title[locale], description: description[locale], alternates: localizedAlternates(locale, '/services') };
}

export default function ServicesPage() {
  return <StaticPage><Services /></StaticPage>;
}
