import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocaleRouteSync } from '@/components/LocaleRouteSync';
import { directionForLocale, isLocale, locales, type Locale } from '@/lib/i18n';

type LocaleLayoutProps = { children: React.ReactNode; params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  return (
    <div lang={locale} dir={directionForLocale(locale)} data-locale={locale} className="min-h-screen">
      <LocaleRouteSync locale={locale} />
      {children}
    </div>
  );
}
