'use client';

import { useLocale } from '@/components/i18n';

export function AdPlaceholder({ label }: { label?: string }) {
  const { t } = useLocale();

  return (
    <div className="liquid-glass flex min-h-24 items-center justify-center rounded-[22px] px-5 py-6 text-center text-xs uppercase tracking-[0.18em] text-foreground/30">
      {label ?? t('advertisement')}
    </div>
  );
}
