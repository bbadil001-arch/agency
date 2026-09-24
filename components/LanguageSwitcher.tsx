'use client';

import { useLocale, type Locale } from '@/components/i18n';
import { usePathname, useRouter } from 'next/navigation';

const options: Array<{ value: Locale; label: string }> = [
  { value: 'en', label: 'EN' },
  { value: 'ar', label: 'ع' },
  { value: 'fr', label: 'FR' },
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function changeLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    const localePrefix = /^\/(en|fr|ar)(?=\/|$)/;
    const nextPath = localePrefix.test(pathname)
      ? pathname.replace(localePrefix, `/${nextLocale}`)
      : `/${nextLocale}${pathname === '/' ? '' : pathname}`;
    router.push(nextPath || `/${nextLocale}`);
  }

  return (
    <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-foreground/60 transition hover:border-white/25 hover:text-foreground">
      <span className="sr-only">{t('language')}</span>
      <select
        aria-label={t('language')}
        value={locale}
        onChange={(event) => changeLocale(event.target.value as Locale)}
        className="cursor-pointer appearance-none bg-transparent text-xs font-medium outline-none"
      >
        {options.map((option) => <option key={option.value} value={option.value} className="bg-[#0b0610] text-foreground">{option.label}</option>)}
      </select>
    </label>
  );
}
