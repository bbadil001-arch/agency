import { locales, type Locale } from '@/lib/i18n';

// Set NEXT_PUBLIC_SITE_URL in the hosting environment if the public domain
// changes. The production domain is used as the safe default for SEO URLs.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://yhdagency.com').replace(/\/$/, '');

export function absoluteUrl(path = '/') {
  return new URL(path.startsWith('/') ? path : `/${path}`, SITE_URL).toString();
}

export function localizedAlternates(locale: Locale, path = '') {
  const normalizedPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  return {
    canonical: `/${locale}${normalizedPath}`,
    languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}${normalizedPath}`])),
  };
}

export function localizedPath(locale: Locale, path = '') {
  const normalizedPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  return `/${locale}${normalizedPath}`;
}
