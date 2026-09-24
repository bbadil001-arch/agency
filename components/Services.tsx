'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  BadgeDollarSign,
  BarChart3,
  Code2,
  Gauge,
  Globe2,
  LayoutTemplate,
  Megaphone,
  Palette,
  PenTool,
  Search,
  Share2,
  ShoppingCart,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useLocale } from '@/components/i18n';

type ServiceItem = { label: string; icon: LucideIcon };
type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  items: ServiceItem[];
};

const services: Service[] = [
  {
    number: '01',
    title: 'Digital Marketing',
    description: 'Turn attention into measurable growth with campaigns built around the way people actually decide.',
    icon: Megaphone,
    accent: '#a855f7',
    items: [
      { label: 'SEO', icon: Search },
      { label: 'Performance Ads', icon: BadgeDollarSign },
      { label: 'Social Media Growth', icon: Share2 },
      { label: 'Content Strategy', icon: BarChart3 },
    ],
  },
  {
    number: '02',
    title: 'Graphic Design',
    description: 'Build a visual system people remember, from the first mark to every motion detail in between.',
    icon: Palette,
    accent: '#f59e0b',
    items: [
      { label: 'Brand Identity', icon: Sparkles },
      { label: 'Logo Design', icon: PenTool },
      { label: 'UI / UX', icon: LayoutTemplate },
      { label: 'Motion Graphics', icon: WandSparkles },
    ],
  },
  {
    number: '03',
    title: 'Web Development',
    description: 'Launch digital experiences that feel effortless to use and are engineered to compound over time.',
    icon: Code2,
    accent: '#38bdf8',
    items: [
      { label: 'Custom Next.js Sites', icon: Globe2 },
      { label: 'E-commerce', icon: ShoppingCart },
      { label: 'Web Apps', icon: Code2 },
      { label: 'Speed & SEO Optimization', icon: Gauge },
    ],
  },
];

export function Services() {
  const { copy } = useLocale();
  const localizedServices: Service[] = [
    { ...services[0], title: copy.services.marketing, description: copy.services.marketingDescription, items: [{ label: copy.services.seo, icon: Search }, { label: copy.services.ads, icon: BadgeDollarSign }, { label: copy.services.social, icon: Share2 }, { label: copy.services.content, icon: BarChart3 }] },
    { ...services[1], title: copy.services.design, description: copy.services.designDescription, items: [{ label: copy.services.identity, icon: Sparkles }, { label: copy.services.logo, icon: PenTool }, { label: copy.services.uiux, icon: LayoutTemplate }, { label: copy.services.motion, icon: WandSparkles }] },
    { ...services[2], title: copy.services.development, description: copy.services.developmentDescription, items: [{ label: copy.services.next, icon: Globe2 }, { label: copy.services.ecommerce, icon: ShoppingCart }, { label: copy.services.apps, icon: Code2 }, { label: copy.services.optimization, icon: Gauge }] },
  ];
  return (
    <section id="services" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={copy.sections.capabilities}
          title={copy.sections.expertiseTitle}
          description={copy.sections.expertiseDescription}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {localizedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="liquid-glass group rounded-[28px] p-7 transition-shadow duration-300 hover:shadow-[0_24px_80px_rgba(168,85,247,0.14)] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.07] text-foreground" style={{ color: service.accent }}>
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-heading text-sm text-foreground/35">{service.number}</span>
                </div>
                <h3 className="mt-10 font-heading text-2xl font-medium tracking-[-0.035em]">{service.title}</h3>
                <p className="mt-4 min-h-20 text-[15px] leading-6 text-foreground/55">{service.description}</p>
                <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
                  {service.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={item.label} className="flex items-center gap-3 text-sm text-foreground/75">
                        <ItemIcon aria-hidden="true" className="h-4 w-4 text-foreground/40" strokeWidth={1.7} />
                        {item.label}
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
