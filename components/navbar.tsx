import { ChevronDown } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';

const navItems = [
  { label: 'Features', hasChevron: true },
  { label: 'Solutions', hasChevron: false },
  { label: 'Plans', hasChevron: false },
  { label: 'Learning', hasChevron: true },
];

export function Navbar() {
  return (
    <header className="relative z-20 px-5 pt-5 sm:px-8">
      <nav className="flex w-full items-center justify-between gap-6" aria-label="Main navigation">
        <BrandLogo />

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              className="flex items-center gap-1.5 text-sm text-foreground/90 transition hover:text-foreground"
            >
              {item.label}
              {item.hasChevron && <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} />}
            </a>
          ))}
        </div>

        <a
          href="#consult"
          className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-[#0b0610] transition hover:bg-white/90"
        >
          Sign Up
        </a>
      </nav>

      <div className="mt-[19px] h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </header>
  );
}
