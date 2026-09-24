import type { MetadataRoute } from 'next';
import { getAllBlogSlugs } from '@/lib/blog-catalog';
import { locales } from '@/lib/i18n';

const baseUrl = 'https://power-ai-agency.bbadil001.chatgpt.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/services', '/about', '/contact', '/blog', '/privacy-policy', '/terms'];
  const localizedPages = locales.flatMap((locale) => pages.map((page) => ({ url: `${baseUrl}/${locale}${page}`, changeFrequency: page === '/blog' ? 'weekly' as const : 'monthly' as const, priority: page === '' ? 1 : 0.7 })));
  const articles = locales.flatMap((locale) => getAllBlogSlugs().map((slug) => ({ url: `${baseUrl}/${locale}/blog/${slug}`, changeFrequency: 'monthly' as const, priority: 0.65 })));
  return [...localizedPages, ...articles, { url: baseUrl, changeFrequency: 'monthly', priority: 1 }];
}
