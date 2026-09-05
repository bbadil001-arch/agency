'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

type Category = 'All' | 'Marketing' | 'Design' | 'Development';
type Project = {
  title: string;
  client: string;
  category: Exclude<Category, 'All'>;
  tags: string[];
  monogram: string;
  description: string;
  gradient: string;
};

const filters: Category[] = ['All', 'Marketing', 'Design', 'Development'];
const projects: Project[] = [
  {
    title: 'Atlas House',
    client: 'Moroccan hospitality',
    category: 'Design',
    tags: ['Identity', 'Art direction'],
    monogram: 'AH',
    description: 'A warmer visual language for a new generation of stays in the Atlas region.',
    gradient: 'linear-gradient(135deg, #3b1d54 0%, #c084fc 100%)',
  },
  {
    title: 'Noura Beauty',
    client: 'Casablanca / Paris',
    category: 'Marketing',
    tags: ['Paid social', 'Growth'],
    monogram: 'NB',
    description: 'A performance engine that turned product discovery into a daily habit.',
    gradient: 'linear-gradient(135deg, #241b4b 0%, #f59e0b 100%)',
  },
  {
    title: 'Northline',
    client: 'International SaaS',
    category: 'Development',
    tags: ['Next.js', 'Web app'],
    monogram: 'NL',
    description: 'A faster, clearer platform experience for teams shipping across time zones.',
    gradient: 'linear-gradient(135deg, #0f3147 0%, #38bdf8 100%)',
  },
  {
    title: 'Mina Market',
    client: 'Moroccan commerce',
    category: 'Development',
    tags: ['E-commerce', 'SEO'],
    monogram: 'MM',
    description: 'A bilingual storefront made for everyday rituals and effortless checkout.',
    gradient: 'linear-gradient(135deg, #422006 0%, #fb7185 100%)',
  },
  {
    title: 'Lumen Capital',
    client: 'London / Dubai',
    category: 'Design',
    tags: ['Brand system', 'Digital'],
    monogram: 'LC',
    description: 'A confident identity system for a fund investing in the next decade of change.',
    gradient: 'linear-gradient(135deg, #172554 0%, #818cf8 100%)',
  },
  {
    title: 'Kasbah Radio',
    client: 'Independent media',
    category: 'Marketing',
    tags: ['Content', 'Community'],
    monogram: 'KR',
    description: 'A sharper editorial rhythm that made local culture impossible to scroll past.',
    gradient: 'linear-gradient(135deg, #451a03 0%, #facc15 100%)',
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const visibleProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  );

  return (
    <section id="work" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="03 / Selected work"
            title="Work with a point of view."
            description="A few recent launches, repositions, and digital systems built to make the next move obvious."
          />
          <div className="flex flex-wrap gap-2" aria-label="Filter case studies">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeFilter === filter
                    ? 'border-white/30 bg-white text-[#0b0610]'
                    : 'border-white/10 text-foreground/55 hover:border-white/25 hover:text-foreground'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              className="group"
            >
              <div className="liquid-glass overflow-hidden rounded-[28px] p-2">
                <div className="relative aspect-[1.45] overflow-hidden rounded-[21px]" style={{ backgroundImage: project.gradient }}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.32),transparent_30%)]" />
                  <div className="relative flex h-full flex-col justify-between p-6 transition duration-500 group-hover:scale-105 sm:p-8">
                    <div className="flex items-start justify-between text-white/70">
                      <span className="font-heading text-sm tracking-[0.2em]">{project.monogram}</span>
                      <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-heading text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">{project.title}</p>
                      <p className="mt-1 text-sm text-white/65">{project.client}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-6 px-2 pt-5">
                <div>
                  <p className="max-w-md text-sm leading-6 text-foreground/55">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="text-xs text-foreground/35">{tag}</span>)}
                  </div>
                </div>
                <a href="#contact" className="mt-1 shrink-0 text-sm font-medium text-foreground transition hover:text-purple-200">
                  View case study <span aria-hidden="true">↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
