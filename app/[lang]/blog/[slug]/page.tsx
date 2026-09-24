import type { Metadata } from 'next';
import { BlogPostView } from '@/components/BlogPostView';
import { getAllBlogSlugs, getLocalizedBlogPost } from '@/lib/blog-catalog';
import { locales, isLocale, type Locale } from '@/lib/i18n';

type BlogPageProps = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((lang) => getAllBlogSlugs().map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : 'en';
  const post = getLocalizedBlogPost(slug, locale);
  if (!post) return { title: 'Insight not found | AGENCY' };

  return {
    title: `${post.title} | AGENCY`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/${locale}/blog/${post.slug}`,
      languages: Object.fromEntries(locales.map((item) => [item, `/${item}/blog/${post.slug}`])),
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `/${locale}/blog/${post.slug}`,
    },
  };
}

export default async function LocalizedBlogPost({ params }: BlogPageProps) {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : 'en';
  return <BlogPostView locale={locale} slug={slug} />;
}
