import type { Metadata } from 'next';
import { StaticPage } from '@/components/StaticPage';
import { Blog } from '@/components/Blog';
import { isLocale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Insights | AGENCY',
  description: 'Multilingual insights on web development, branding, digital marketing, and SEO for ambitious businesses.',
};

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  return <StaticPage><Blog routeLocale={locale} /></StaticPage>;
}
