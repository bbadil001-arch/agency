import { locales, type Locale } from '@/lib/i18n';

// Set NEXT_PUBLIC_SITE_URL in Vercel/GitHub Pages to the real public domain.
// The fallback keeps the current Sites deployment indexable until a custom
// domain is configured.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://power-ai-agency.bbadil001.chatgpt.site').replace(/\/$/, '');

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
