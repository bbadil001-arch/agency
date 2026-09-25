'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { SectionHeading } from '@/components/section-heading';
import { useLocale } from '@/components/i18n';
import { fallbackProjects, mergeProjects, type Project } from '@/lib/behance';

type Category = 'All' | 'Marketing' | 'Design' | 'Development';

const filters: Category[] = ['All', 'Marketing', 'Design', 'Development'];
export function Portfolio({ initialProjects = [] }: { initialProjects?: Project[] }) {
  const { copy } = useLocale();
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [projects, setProjects] = useState<Project[]>(() => initialProjects.length ? mergeProjects(initialProjects) : fallbackProjects);
  const [syncState, setSyncState] = useState<'syncing' | 'synced' | 'fallback'>(initialProjects.length ? 'synced' : 'syncing');

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/behance', { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error('Behance sync failed');
        const payload: { projects?: Project[] } = await response.json();
        const remoteProjects = Array.isArray(payload.projects) ? payload.projects : [];
        if (remoteProjects.length === 0) throw new Error('No Behance projects returned');

        setProjects(mergeProjects(remoteProjects));
        setSyncState('synced');
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        setSyncState(initialProjects.length ? 'synced' : 'fallback');
      });

    return () => controller.abort();
  }, [initialProjects.length]);

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
              eyebrow={copy.sections.selectedWork}
              title={copy.sections.selectedWorkTitle}
              description={copy.sections.selectedWorkDescription}
            />
            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-foreground/35" aria-live="polite">
              {syncState === 'synced' ? copy.portfolio.syncLive : syncState === 'syncing' ? copy.portfolio.syncChecking : copy.portfolio.syncFallback}
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
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
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
                  {copy.portfolio.viewBehance} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
