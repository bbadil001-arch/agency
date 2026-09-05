import { Globe2, MessageCircle, Share2 } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';

const links = [
  { label: 'Expertise', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 pb-8 pt-10 sm:px-8">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:gap-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <BrandLogo />
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/50" aria-label="Footer navigation">
            {links.map((link) => <a key={link.label} href={link.href} className="transition hover:text-foreground">{link.label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" aria-label="Social media" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground/55 transition hover:border-white/25 hover:text-foreground"><Share2 aria-hidden="true" className="h-4 w-4" /></a>
            <a href="#contact" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground/55 transition hover:border-white/25 hover:text-foreground"><MessageCircle aria-hidden="true" className="h-4 w-4" /></a>
            <a href="#contact" aria-label="Website" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground/55 transition hover:border-white/25 hover:text-foreground"><Globe2 aria-hidden="true" className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-foreground/35 sm:flex-row">
          <p>© 2026 Power AI. Built in Casablanca, made for anywhere.</p>
          <p>Strategy · Design · Development</p>
        </div>
      </div>
    </footer>
  );
}
