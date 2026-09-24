'use client';

import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { getLocalizedBlogPosts } from '@/lib/blog-catalog';
import { SectionHeading } from '@/components/section-heading';
import { useLocale } from '@/components/i18n';

export function Blog({ limit }: { limit?: number }) {
  const { copy, locale } = useLocale();
  const localizedPosts = getLocalizedBlogPosts(locale);
  const posts = limit ? localizedPosts.slice(-limit) : localizedPosts;
  const blogPrefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <section id="insights" className="relative border-y border-white/[0.06] px-5 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={copy.sections.insights}
            title={copy.sections.insightsTitle}
            description={copy.sections.insightsDescription}
          />
          <Link href={`${blogPrefix}/blog`} className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-purple-200">
            {copy.sections.exploreInsights} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.slug} className="group liquid-glass flex h-full flex-col rounded-[26px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(168,85,247,0.16)] sm:p-7">
              <div className="flex items-center justify-between text-foreground/45">
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.16em]"><BookOpen aria-hidden="true" className="h-4 w-4" /> 0{index + 1}</span>
                <span className="text-xs">{post.readTime}</span>
              </div>
              <p className="mt-9 text-xs font-medium uppercase tracking-[0.16em] text-purple-200/70">{post.category}</p>
              <h3 className="mt-3 font-heading text-2xl font-medium leading-tight tracking-[-0.04em] text-foreground">{post.title}</h3>
              <p className="mt-5 flex-1 text-sm leading-6 text-foreground/55">{post.excerpt}</p>
              <Link href={`${blogPrefix}/blog/${post.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition group-hover:text-purple-200">
                {copy.blog.read} <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
