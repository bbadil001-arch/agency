import { Fragment } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getLocalizedBlogPost } from '@/lib/blog-catalog';
import { getDictionary, type Locale } from '@/lib/i18n';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { BlogLeadCTA } from '@/components/BlogLeadCTA';
import { StaticPage } from '@/components/StaticPage';

export function BlogPostView({ locale, slug }: { locale: Locale; slug: string }) {
  const post = getLocalizedBlogPost(slug, locale);
  if (!post) notFound();
  const copy = getDictionary(locale).blog;

  return (
    <StaticPage>
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12">
        <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-sm text-foreground/55 transition hover:text-foreground">
          <ArrowLeft aria-hidden="true" className="h-4 w-4 rtl:rotate-180" /> {copy.all}
        </Link>

        <header className="mt-16 border-b border-white/[0.08] pb-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-200/70">{post.category}</p>
          <h1 className="mt-5 max-w-4xl font-heading text-5xl font-normal leading-[1.05] tracking-[-0.055em] sm:text-7xl">{post.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/60">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/40">
            <span>{post.publishedAt}</span><span>{post.readTime}</span><span>AGENCY</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.keywords.map((keyword) => <span key={keyword} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-foreground/45">{keyword}</span>)}
          </div>
        </header>

        <div className="mt-10"><AdPlaceholder label={copy.advertisement} /></div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start">
          <article className="prose-agency">
            {post.blocks.map((block, index) => (
              <Fragment key={index}>
                {block.type === 'paragraph' && <p>{block.text}</p>}
                {block.type === 'heading' && (block.level === 2 ? <h2>{block.text}</h2> : <h3>{block.text}</h3>)}
                {block.type === 'list' && <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                {block.type === 'callout' && <aside className="liquid-glass my-10 rounded-[22px] px-6 py-5 text-lg leading-8 text-foreground/80">{block.text}</aside>}
                {index === Math.floor(post.blocks.length / 2) && <BlogLeadCTA locale={locale} title={post.title} slug={post.slug} />}
              </Fragment>
            ))}
            <BlogLeadCTA locale={locale} title={post.title} slug={post.slug} />
          </article>
          <aside className="space-y-5 lg:sticky lg:top-32">
            <AdPlaceholder label={copy.sidebarAdvertisement} />
          </aside>
        </div>
      </div>
    </StaticPage>
  );
}
