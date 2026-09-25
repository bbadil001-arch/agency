'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/brand-logo';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLocale } from '@/components/i18n';

const navItems = [
  { key: 'expertise' as const, path: '#services' },
  { key: 'about' as const, path: '/about' },
  { key: 'work' as const, path: '#work' },
  { key: 'insights' as const, path: '/blog' },
  { key: 'contact' as const, path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale } = useLocale();
  const pathname = usePathname();
  const prefix = locale === 'en' && pathname === '/' ? '' : `/${locale}`;
  const hrefFor = (path: string) => path.startsWith('#') ? `${prefix || ''}/${path}`.replace('//', '/') : `${prefix}${path}` || path;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[hsl(260,87%,3%)]/80 px-5 pt-5 backdrop-blur-xl supports-[backdrop-filter]:bg-[hsl(260,87%,3%)]/65 sm:px-8">
      <nav className="relative flex w-full items-center justify-between gap-4" aria-label="Main navigation">
        <BrandLogo />

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.key} href={hrefFor(item.path)} className="text-sm text-foreground/90 transition hover:text-foreground">
              {t(item.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a href={hrefFor('/contact')} className="hidden rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-[#0b0610] transition hover:bg-white/90 sm:inline-flex">
            {t('getInTouch')}
          </a>
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground transition hover:border-white/25 md:hidden"
          >
            {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="liquid-glass absolute left-0 right-0 top-[calc(100%+14px)] z-[60] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-[22px] p-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a key={item.key} href={hrefFor(item.path)} onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-sm text-foreground/80 transition hover:bg-white/[0.05] hover:text-foreground">
                  {t(item.key)}
                </a>
              ))}
              <a href={hrefFor('/contact')} onClick={() => setIsOpen(false)} className="mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-medium text-[#0b0610] transition hover:bg-white/90">
                {t('getInTouch')}
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="mt-[19px] h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </header>
  );
}
