import { NextResponse } from 'next/server';

const PROFILE_URL = 'https://www.behance.net/yhdesign1';
const GALLERY_URL = 'https://www.behance.net/gallery/';
const IMAGE_HOST = 'https://mir-s3-cdn-cf.behance.net/';

type BehanceProject = {
  title: string;
  client: string;
  category: 'Marketing' | 'Design' | 'Development';
  tags: string[];
  monogram: string;
  description: string;
  image: string;
  link: string;
};

function decodeHtml(value: string) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function titleCase(value: string) {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .trim();
}

function inferCategory(title: string): BehanceProject['category'] {
  const normalized = title.toLowerCase();
  if (/(website|web app|app ui|application ui|mobile|music|restaurant)/.test(normalized)) return 'Development';
  if (/(instagram|flayer|campaign|social|marketing|advert)/.test(normalized)) return 'Marketing';
  return 'Design';
}

function extractProjects(html: string): BehanceProject[] {
  const projects: BehanceProject[] = [];
  const seen = new Set<string>();
  const articlePattern = /<article\b[^>]*>([\s\S]*?)<\/article>/gi;

  for (const match of html.matchAll(articlePattern)) {
    const block = match[1];
    const linkMatch = block.match(/href="(\/gallery\/\d+\/[^"?]+)"/i);
    if (!linkMatch) continue;

    const link = `${GALLERY_URL}${linkMatch[1].replace(/^\/gallery\//, '')}`;
    if (seen.has(link)) continue;

    const titleMatch = block.match(/title="Link to project - ([^"]+)"/i) ?? block.match(/aria-label="([^"]+)"/i);
    const sourceMatch = block.match(/<source[^>]+srcset="([^" ]+)/i);
    const rawTitle = decodeHtml(titleMatch?.[1] ?? linkMatch[1].split('/').pop() ?? 'Behance project');
    const image = sourceMatch ? decodeHtml(sourceMatch[1]) : '';
    if (!image.startsWith(IMAGE_HOST)) continue;

    const title = titleCase(rawTitle.replace(/\s+by\s+yhdesign\s*$/i, ''));
    const category = inferCategory(title);
    projects.push({
      title,
      client: 'yHD AGENCY · Behance portfolio',
      category,
      tags: ['Behance', category === 'Development' ? 'Digital product' : category],
      monogram: title.split(/\s+/).map((word) => word[0]).join('').slice(0, 2).toUpperCase(),
      description: 'Fresh work from the yHD AGENCY Behance portfolio.',
      image,
      link,
    });
    seen.add(link);
  }

  return projects.slice(0, 12);
}

export async function GET() {
  try {
    const response = await fetch(PROFILE_URL, {
      headers: { 'user-agent': 'yHD-AGENCY-portfolio-sync/1.0' },
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json({ projects: [], source: 'fallback', error: 'Behance profile unavailable' }, { status: 502 });
    }

    const projects = extractProjects(await response.text());
    return NextResponse.json(
      { projects, source: 'behance', syncedAt: new Date().toISOString() },
      { headers: { 'Cache-Control': 'public, max-age=0, s-maxage=21600, stale-while-revalidate=86400' } },
    );
  } catch {
    return NextResponse.json({ projects: [], source: 'fallback', error: 'Behance sync failed' }, { status: 502 });
  }
}
