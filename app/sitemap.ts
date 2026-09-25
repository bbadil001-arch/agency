import type { MetadataRoute } from 'next';
import { getAllBlogSlugs, getLocalizedBlogPost } from '@/lib/blog-catalog';
import { locales } from '@/lib/i18n';
import { absoluteUrl, localizedPath } from '@/lib/site';

const publicPages = ['', '/services', '/about', '/contact', '/blog', '/privacy-policy', '/terms'];

function languageAlternates(path: string) {
  return Object.fromEntries(locales.map((locale) => [locale, absoluteUrl(localizedPath(locale, path))]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.flatMap((locale) =>
    publicPages.map((path) => ({
      url: absoluteUrl(localizedPath(locale, path)),
      lastModified: new Date(),
      changeFrequency: path === '/blog' ? 'weekly' as const : 'monthly' as const,
      priority: path === '' ? 1 : path === '/blog' ? 0.9 : 0.7,
      alternates: { languages: languageAlternates(path) },
    })),
  );

  const articles = locales.flatMap((locale) =>
    getAllBlogSlugs().map((slug) => {
      const post = getLocalizedBlogPost(slug, locale);
      return {
        url: absoluteUrl(localizedPath(locale, `/blog/${slug}`)),
        lastModified: post ? new Date(post.publishedAt) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
        alternates: { languages: languageAlternates(`/blog/${slug}`) },
      };
    }),
  );

  // Submit canonical localized URLs only. The root URL stays reachable and
  // points search engines to /en through the root metadata.
  return [...pages, ...articles];
}
