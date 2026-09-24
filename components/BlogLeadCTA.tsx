import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/i18n';

const WHATSAPP_NUMBER = '212643543460';

export function BlogLeadCTA({ locale, title, slug }: { locale: Locale; title: string; slug: string }) {
  const copy = getDictionary(locale).blog;
  const message = locale === 'ar'
    ? `مرحباً AGENCY، قرأت مقال «${title}» وأرغب في الحصول على عرض مجاني لمشروعي.`
    : locale === 'fr'
      ? `Bonjour AGENCY, j’ai lu votre article « ${title} » et je souhaite recevoir une estimation gratuite pour mon projet.`
      : `Hello AGENCY, I read your article about ${title} and I would like to get a free quote for my project.`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const contactHref = `/${locale}/contact?article=${encodeURIComponent(slug)}`;

  return (
    <aside className="liquid-glass my-12 rounded-[26px] p-6 sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-200/70">{copy.buildNextMove}</p>
      <h2 className="mt-3 font-heading text-2xl tracking-[-0.04em] sm:text-3xl">{copy.projectQuestion}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/60">{copy.ctaBody}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-500">
          <MessageCircle aria-hidden="true" className="h-4 w-4" /> {copy.whatsapp} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
        <Link href={contactHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#0b0610] transition hover:bg-white/90">
          {copy.quote} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
