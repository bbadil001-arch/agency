'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/components/i18n';

const logoSrc = '/yhd-logo.png';

export function BrandLogo() {
  const { locale } = useLocale();
  const pathname = usePathname();
  const routeLocale = pathname.match(/^\/(en|fr|ar)(?=\/|$)/)?.[1];
  const href = routeLocale ? `/${routeLocale}` : locale === 'en' ? '/' : `/${locale}`;
  return (
    <Link
      href={href}
      aria-label="AGENCY home"
      className="flex items-center gap-2.5 text-sm font-semibold tracking-[-0.02em] text-foreground"
    >
      <Image
        src={logoSrc}
        alt="AGENCY"
        width={2172}
        height={724}
        sizes="(max-width: 640px) 190px, 220px"
        className="h-9 w-auto max-w-[190px] object-contain drop-shadow-[0_0_18px_rgba(168,85,247,0.22)] sm:h-10 sm:max-w-[220px]"
      />
    </Link>
  );
}
