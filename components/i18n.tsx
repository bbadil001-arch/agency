'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'en' | 'ar' | 'fr';

type CopyKey =
  | 'expertise'
  | 'about'
  | 'work'
  | 'insights'
  | 'contact'
  | 'getInTouch'
  | 'language'
  | 'privacy'
  | 'terms'
  | 'backHome'
  | 'advertisement';

const copy: Record<Locale, Record<CopyKey, string>> = {
  en: {
    expertise: 'Expertise', about: 'About', work: 'Work', insights: 'Insights', contact: 'Contact', getInTouch: 'Get in Touch', language: 'Language', privacy: 'Privacy Policy', terms: 'Terms & Conditions', backHome: 'Back to yHD AGENCY', advertisement: 'Advertisement',
  },
  ar: {
    expertise: 'خدماتنا', about: 'من نحن', work: 'أعمالنا', insights: 'المقالات', contact: 'اتصل بنا', getInTouch: 'تواصل معنا', language: 'اللغة', privacy: 'سياسة الخصوصية', terms: 'الشروط والأحكام', backHome: 'العودة إلى yHD AGENCY', advertisement: 'إعلان',
  },
  fr: {
    expertise: 'Expertise', about: 'À propos', work: 'Réalisations', insights: 'Insights', contact: 'Contact', getInTouch: 'Nous contacter', language: 'Langue', privacy: 'Politique de confidentialité', terms: 'Conditions', backHome: 'Retour à yHD AGENCY', advertisement: 'Publicité',
  },
};

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: CopyKey) => string;
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
    const requested = new URLSearchParams(window.location.search).get('lang') as Locale | null;
    const stored = window.localStorage.getItem('yhd-locale') as Locale | null;
    setLocaleState(requested === 'ar' || requested === 'fr' || requested === 'en'
      ? requested
      : stored === 'ar' || stored === 'fr' || stored === 'en'
        ? stored
        : detectLocale());
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
      window.localStorage.setItem('yhd-locale', nextLocale);
      setLocaleState(nextLocale);
    },
    t: (key) => copy[locale][key],
  }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used inside LanguageProvider');
  return context;
}
