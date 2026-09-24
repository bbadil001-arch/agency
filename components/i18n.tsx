'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { dictionaries, type Dictionary, type Locale, isLocale } from '@/lib/i18n';

export type { Locale } from '@/lib/i18n';

type CopyKey = keyof Dictionary['nav'] | 'privacy' | 'terms' | 'backHome' | 'advertisement';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: CopyKey) => string;
  copy: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  const language = navigator.language.toLowerCase();
  if (language.startsWith('ar')) return 'ar';
  if (language.startsWith('fr')) return 'fr';
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('lang');
    const stored = window.localStorage.getItem('agency-locale');
    const routeMatch = window.location.pathname.match(/^\/(en|fr|ar)(?=\/|$)/)?.[1] ?? null;
    const routeLocale = isLocale(routeMatch ?? '') ? (routeMatch as Locale) : undefined;
    const requestedLocale = isLocale(requested ?? '') ? (requested as Locale) : undefined;
    const storedLocale = isLocale(stored ?? '') ? (stored as Locale) : undefined;
    setLocaleState(routeLocale ?? requestedLocale ?? storedLocale ?? detectLocale());
  }, []);

  useEffect(() => {
    const direction = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => ({
    locale,
    setLocale: (nextLocale) => {
      window.localStorage.setItem('agency-locale', nextLocale);
      setLocaleState(nextLocale);
    },
    t: (key) => {
      if (key === 'privacy') return dictionaries[locale].footer.privacy;
      if (key === 'terms') return dictionaries[locale].footer.terms;
      if (key === 'backHome') return dictionaries[locale].legal.backHome;
      if (key === 'advertisement') return dictionaries[locale].blog.advertisement;
      return dictionaries[locale].nav[key];
    },
    copy: dictionaries[locale],
  }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used inside LanguageProvider');
  return context;
}
