import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getBlogPost, blogPosts } from '@/lib/blog-posts';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { StaticPage } from '@/components/StaticPage';

type BlogPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Insight not found | yHD AGENCY' };

  return {
    title: `${post.title} | yHD AGENCY`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      languages: {
        en: `/blog/${post.slug}?lang=en`,
        ar: `/blog/${post.slug}?lang=ar`,
        fr: `/blog/${post.slug}?lang=fr`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <StaticPage>
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-foreground/55 transition hover:text-foreground">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" /> All insights
        </Link>

        <header className="mt-16 border-b border-white/[0.08] pb-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-200/70">{post.category}</p>
          <h1 className="mt-5 max-w-4xl font-heading text-5xl font-normal leading-[1.05] tracking-[-0.055em] sm:text-7xl">{post.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/60">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/40">
            <span>{post.publishedAt}</span>
            <span>{post.readTime}</span>
            <span>yHD AGENCY</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.keywords.map((keyword) => <span key={keyword} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-foreground/45">{keyword}</span>)}
          </div>
        </header>

        <div className="mt-10"><AdPlaceholder /></div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start">
          <article className="prose-yhd">
            {post.blocks.map((block, index) => (
              <Fragment key={index}>
                {block.type === 'paragraph' && <p>{block.text}</p>}
                {block.type === 'heading' && (block.level === 2 ? <h2>{block.text}</h2> : <h3>{block.text}</h3>)}
                {block.type === 'list' && <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                {block.type === 'callout' && <aside className="liquid-glass my-10 rounded-[22px] px-6 py-5 text-lg leading-8 text-foreground/80">{block.text}</aside>}
                {index === Math.floor(post.blocks.length / 2) && <div className="my-10"><AdPlaceholder /></div>}
              </Fragment>
            ))}
          </article>
          <aside className="space-y-5 lg:sticky lg:top-32">
            <AdPlaceholder label="Sidebar advertisement" />
          </aside>
        </div>

        <div className="liquid-glass mt-16 rounded-[28px] p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-200/70">Build the next move</p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl tracking-[-0.04em] sm:text-4xl">Have a project in mind?</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-foreground/55">Bring us the challenge. yHD AGENCY can help shape the strategy, identity, and digital experience that turns attention into action.</p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#0b0610] transition hover:bg-white/90">
            Start a conversation <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </StaticPage>
  );
}
