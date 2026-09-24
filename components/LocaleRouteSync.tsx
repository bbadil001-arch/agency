'use client';

import { useEffect } from 'react';
import { useLocale } from '@/components/i18n';
import type { Locale } from '@/lib/i18n';

export function LocaleRouteSync({ locale }: { locale: Locale }) {
  const { setLocale } = useLocale();

  useEffect(() => {
    setLocale(locale);
  }, [locale, setLocale]);

  return null;
}
