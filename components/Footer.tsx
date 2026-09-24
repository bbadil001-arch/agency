'use client';

import { Globe2, MessageCircle, Share2 } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { useLocale } from '@/components/i18n';
import { usePathname } from 'next/navigation';

const links = [
  { key: 'expertise' as const, path: '#services' },
  { key: 'about' as const, path: '/about' },
  { key: 'work' as const, path: '#work' },
  { key: 'insights' as const, path: '/blog' },
  { key: 'contact' as const, path: '/contact' },
];

export function Footer() {
  const { t, locale, copy } = useLocale();
  const pathname = usePathname();
  const prefix = locale === 'en' && pathname === '/' ? '' : `/${locale}`;
  const hrefFor = (path: string) => path.startsWith('#') ? `${prefix || ''}/${path}`.replace('//', '/') : `${prefix}${path}` || path;

  return (
    <footer className="relative border-t border-white/10 px-5 pb-8 pt-10 sm:px-8">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:gap-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <BrandLogo />
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/50" aria-label="Footer navigation">
            {links.map((link) => <a key={link.key} href={hrefFor(link.path)} className="transition hover:text-foreground">{t(link.key)}</a>)}
            <a href={`${prefix}/privacy-policy`} className="transition hover:text-foreground">{t('privacy')}</a>
            <a href={`${prefix}/terms`} className="transition hover:text-foreground">{t('terms')}</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" aria-label="Social media" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground/55 transition hover:border-white/25 hover:text-foreground"><Share2 aria-hidden="true" className="h-4 w-4" /></a>
            <a href="#contact" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground/55 transition hover:border-white/25 hover:text-foreground"><MessageCircle aria-hidden="true" className="h-4 w-4" /></a>
            <a href="#contact" aria-label="Website" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground/55 transition hover:border-white/25 hover:text-foreground"><Globe2 aria-hidden="true" className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-foreground/35 sm:flex-row">
          <p>{copy.footer.copyright}</p>
          <p>{copy.footer.disciplines}</p>
        </div>
      </div>
    </footer>
  );
}
