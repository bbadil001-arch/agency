'use client';

import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Metrics } from '@/components/Metrics';
import { useLocale } from '@/components/i18n';

export function About() {
  const { copy } = useLocale();
  return (
    <section id="about" className="relative border-y border-white/[0.06] px-5 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
        <div>
          <SectionHeading eyebrow={copy.sections.studio} title={copy.sections.studioTitle} />
          <div className="mt-8 space-y-5 text-base leading-8 text-foreground/60 sm:text-lg">
            <p>
              {copy.about.paragraphOne}
            </p>
            <p>
              {copy.about.paragraphTwo}
            </p>
          </div>
          <a href="/contact" className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-purple-200">
            {copy.sections.meetTeam} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <Metrics />
      </div>
    </section>
  );
}
