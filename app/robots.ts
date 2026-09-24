import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://power-ai-agency.bbadil001.chatgpt.site/sitemap.xml' };
}
