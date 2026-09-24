'use client';

import { Quote, Star } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useLocale } from '@/components/i18n';

const testimonials = [
  {
    quote: 'Power AI gave our launch the clarity it was missing. The new story travelled from Casablanca to Paris without losing its soul.',
    name: 'Salma El Mansouri',
    role: 'Co-founder, Noura Beauty',
    initials: 'SE',
  },
  {
    quote: 'They are rare in that they can talk acquisition numbers in the morning and obsess over a single pixel in the afternoon.',
    name: 'James Whitaker',
    role: 'Growth Lead, Northline',
    initials: 'JW',
  },
  {
    quote: 'Our website finally feels like the quality of the work we do. The process was direct, thoughtful, and genuinely enjoyable.',
    name: 'Youssef Benali',
    role: 'Managing Director, Atlas House',
    initials: 'YB',
  },
];

export function Testimonials() {
  const { copy } = useLocale();
  const localizedTestimonials = [
    { ...testimonials[0], quote: copy.testimonials.quoteOne },
    { ...testimonials[1], quote: copy.testimonials.quoteTwo },
    { ...testimonials[2], quote: copy.testimonials.quoteThree },
  ];
  return (
    <section className="border-y border-white/[0.06] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={copy.sections.clientPerspective}
          title={copy.sections.clientTitle}
          description={copy.sections.clientDescription}
          align="center"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {localizedTestimonials.map((testimonial) => (
            <article key={testimonial.name} className="liquid-glass rounded-[26px] p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <Quote aria-hidden="true" className="h-6 w-6 text-purple-300/70" strokeWidth={1.5} />
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} aria-hidden="true" className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />)}
                </div>
              </div>
              <p className="mt-9 min-h-36 text-base leading-7 text-foreground/75">“{testimonial.quote}”</p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] text-xs font-semibold text-foreground/70">{testimonial.initials}</span>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="mt-0.5 text-xs text-foreground/45">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
