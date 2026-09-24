import type { Metadata } from 'next';
import { BlogPostView } from '@/components/BlogPostView';
import { getAllBlogSlugs, getLocalizedBlogPost } from '@/lib/blog-catalog';

type BlogPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getLocalizedBlogPost(slug, 'en');
  if (!post) return { title: 'Insight not found | AGENCY' };

  return {
    title: `${post.title} | AGENCY`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}`, languages: { en: `/en/blog/${post.slug}`, fr: `/fr/blog/${post.slug}`, ar: `/ar/blog/${post.slug}` } },
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.publishedAt, url: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  return <BlogPostView locale="en" slug={slug} />;
}
