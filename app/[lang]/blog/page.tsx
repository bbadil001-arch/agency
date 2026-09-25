import type { Metadata } from 'next';
import { StaticPage } from '@/components/StaticPage';
import { Blog } from '@/components/Blog';
import { isLocale } from '@/lib/i18n';
import { localizedAlternates } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  const titles = { en: 'Insights for Digital Growth', fr: 'Insights pour votre croissance digitale', ar: 'أفكار للنمو الرقمي' };
  const descriptions = {
    en: 'Practical insights on web development, branding, digital marketing, and SEO for ambitious businesses in Morocco and beyond.',
    fr: 'Des conseils pratiques sur le web, le branding, le marketing digital et le SEO pour les entreprises ambitieuses au Maroc et ailleurs.',
    ar: 'مقالات عملية حول تطوير الويب والهوية البصرية والتسويق الرقمي وتحسين الظهور للشركات الطموحة في المغرب والعالم.',
  };
  return { title: titles[locale], description: descriptions[locale], alternates: localizedAlternates(locale, '/blog') };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  return <StaticPage><Blog routeLocale={locale} /></StaticPage>;
}
