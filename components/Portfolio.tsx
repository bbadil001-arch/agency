'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

type Category = 'All' | 'Marketing' | 'Design' | 'Development';
export type Project = {
  title: string;
  client: string;
  category: Exclude<Category, 'All'>;
  tags: string[];
  monogram: string;
  description: string;
  image: string;
  link: string;
};

const filters: Category[] = ['All', 'Marketing', 'Design', 'Development'];
const fallbackProjects: Project[] = [
  {
    title: 'Apply / Job Application UI',
    client: 'AGENCY · Product design',
    category: 'Development',
    tags: ['UI / UX', 'Product design'],
    monogram: 'AP',
    description: 'A focused application experience designed to make the next step feel effortless.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/abc552217200329.Y3JvcCw1NzUzLDQ1MDAsODUsMA.jpg',
    link: 'https://www.behance.net/gallery/217200329/apply-for-the-job-application-ui-design',
  },
  {
    title: 'Food & Restaurant App',
    client: 'AGENCY · Mobile experience',
    category: 'Development',
    tags: ['UI / UX', 'Mobile app'],
    monogram: 'FR',
    description: 'A warm, intuitive food discovery flow built around appetite, speed, and clarity.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1a5866217200001.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/217200001/food-and-restaurant-app-ui-design',
  },
  {
    title: 'Music App UI',
    client: 'AGENCY · Digital product',
    category: 'Development',
    tags: ['Interface', 'Interaction'],
    monogram: 'MU',
    description: 'A vivid listening interface that gives discovery and personal taste equal weight.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2ee640217199409.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/217199409/UI-Design-Music-app',
  },
  {
    title: 'Obra Marrakech',
    client: 'Obra Marrakech · Campaign design',
    category: 'Marketing',
    tags: ['Social content', 'Art direction'],
    monogram: 'OM',
    description: 'A tactile campaign system made to bring a Marrakech beauty brand into focus.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/98d950152573023.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg',
    link: 'https://www.behance.net/gallery/152573023/Obra-Marrakech-Flayer-And-Instagram-Poste-by-Yhdesign',
  },
  {
    title: 'RC Re Corps',
    client: 'RC Re Corps · Brand identity',
    category: 'Design',
    tags: ['Logo design', 'Identity'],
    monogram: 'RC',
    description: 'A confident mark and identity direction for a brand built around renewal and movement.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/83fb13149843455.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg',
    link: 'https://www.behance.net/gallery/149843455/Rc-Re-Corps-Logo-design-by-Yhdesign',
  },
  {
    title: 'Obra Kech Beauty & Spa',
    client: 'Obra Kech · Visual system',
    category: 'Design',
    tags: ['Branding', 'Print design'],
    monogram: 'OK',
    description: 'An elegant visual world shaped for a beauty and spa experience in Marrakech.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ddf881149843039.Y3JvcCwxMDA3LDc4OCw2ODgsNDQ0.jpg',
    link: 'https://www.behance.net/gallery/149843039/Obra-Kech-Institut-De-Beaute-Spa-Conceptions',
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [syncState, setSyncState] = useState<'syncing' | 'synced' | 'fallback'>('syncing');

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/behance', { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error('Behance sync failed');
        const payload: { projects?: Project[] } = await response.json();
        const remoteProjects = Array.isArray(payload.projects) ? payload.projects : [];
        if (remoteProjects.length === 0) throw new Error('No Behance projects returned');

        const remoteLinks = new Set(remoteProjects.map((project) => project.link));
        setProjects([
          ...remoteProjects,
          ...fallbackProjects.filter((project) => !remoteLinks.has(project.link)),
        ]);
        setSyncState('synced');
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        setSyncState('fallback');
      });

    return () => controller.abort();
  }, []);

  const visibleProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter, projects],
  );

  return (
    <section id="work" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeading
              eyebrow="03 / Selected work"
              title="Work with a point of view."
              description="A selection of interface, identity, and campaign work from the AGENCY studio."
            />
            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-foreground/35" aria-live="polite">
              {syncState === 'synced' ? 'Live Behance sync · updated automatically' : syncState === 'syncing' ? 'Checking latest Behance work…' : 'Showing curated work · Behance sync unavailable'}
            </p>
          </div>
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
              <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on Behance`}>
                <div className="liquid-glass overflow-hidden rounded-[28px] p-2 transition duration-300 group-hover:shadow-[0_0_42px_rgba(168,85,247,0.18)]">
                  <div className="relative aspect-[1.45] overflow-hidden rounded-[21px] bg-gradient-to-br from-purple-950 to-indigo-950">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08030d]/85 via-transparent to-white/10" />
                    <div className="relative flex h-full flex-col justify-between p-6 text-white sm:p-8">
                      <div className="flex items-start justify-between text-white/75">
                        <span className="font-heading text-sm tracking-[0.2em]">{project.monogram}</span>
                        <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <div>
                        <p className="font-heading text-3xl font-medium tracking-[-0.05em] sm:text-4xl">{project.title}</p>
                        <p className="mt-1 text-sm text-white/65">{project.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex items-start justify-between gap-6 px-2 pt-5">
                <div>
                  <p className="max-w-md text-sm leading-6 text-foreground/55">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="text-xs text-foreground/35">{tag}</span>)}
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="mt-1 shrink-0 text-sm font-medium text-foreground transition hover:text-purple-200">
                  View on Behance <span aria-hidden="true">↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
