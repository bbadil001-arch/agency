'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`New Power AI project inquiry from ${data.get('name')}`);
    const body = encodeURIComponent([
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Service: ${data.get('service')}`,
      `Budget: ${data.get('budget')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n'));
    setSubmitted(true);
    window.location.href = `mailto:hello@powerai.example?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-[min(720px,90vw)] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="05 / Start a conversation"
            title="Have a good problem? Let’s make it useful."
            description="Tell us where you want to go. We’ll come back with the clearest next step, not a generic pitch."
          />

          <div className="mt-10 space-y-5 text-sm text-foreground/60">
            <a href="mailto:hello@powerai.example" className="flex items-center gap-3 transition hover:text-foreground">
              <Mail aria-hidden="true" className="h-4 w-4 text-foreground/40" /> hello@powerai.example
            </a>
            <a href="tel:+212522000000" className="flex items-center gap-3 transition hover:text-foreground">
              <Phone aria-hidden="true" className="h-4 w-4 text-foreground/40" /> +212 5 22 00 00 00
            </a>
            <span className="flex items-center gap-3">
              <MapPin aria-hidden="true" className="h-4 w-4 text-foreground/40" /> Casablanca, Morocco
            </span>
          </div>

          <a
            href="https://wa.me/212522000000"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" /> Direct WhatsApp Chat <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="liquid-glass rounded-[28px] p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="text-sm text-foreground/55">
              Name
              <input required name="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-foreground outline-none transition placeholder:text-foreground/25 focus:border-purple-300/60 focus:bg-white/[0.07]" />
            </label>
            <label className="text-sm text-foreground/55">
              Email
              <input required name="email" type="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-foreground outline-none transition placeholder:text-foreground/25 focus:border-purple-300/60 focus:bg-white/[0.07]" />
            </label>
            <label className="text-sm text-foreground/55">
              Service needed
              <select required name="service" defaultValue="" className="mt-2 w-full rounded-xl border border-white/10 bg-[#11091e] px-4 py-3 text-foreground outline-none transition focus:border-purple-300/60">
                <option value="" disabled>Select a service</option>
                <option>Digital Marketing</option>
                <option>Graphic Design</option>
                <option>Web Development</option>
                <option>Full digital partnership</option>
              </select>
            </label>
            <label className="text-sm text-foreground/55">
              Budget range
              <select required name="budget" defaultValue="" className="mt-2 w-full rounded-xl border border-white/10 bg-[#11091e] px-4 py-3 text-foreground outline-none transition focus:border-purple-300/60">
                <option value="" disabled>Select a range</option>
                <option>MAD 10k – 25k</option>
                <option>MAD 25k – 50k</option>
                <option>MAD 50k – 100k</option>
                <option>MAD 100k+</option>
              </select>
            </label>
          </div>
          <label className="mt-6 block text-sm text-foreground/55">
            Message
            <textarea required name="message" rows={5} placeholder="What are you building, changing, or trying to unlock?" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-foreground outline-none transition placeholder:text-foreground/25 focus:border-purple-300/60 focus:bg-white/[0.07]" />
          </label>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-foreground/35">We usually reply within one business day.</p>
            <button type="submit" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0b0610] transition hover:bg-white/90">
              {submitted ? 'Opening your email…' : 'Send inquiry'} <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
