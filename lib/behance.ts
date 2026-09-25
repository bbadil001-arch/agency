export type ProjectCategory = 'Marketing' | 'Design' | 'Development';

export type Project = {
  title: string;
  client: string;
  category: ProjectCategory;
  tags: string[];
  monogram: string;
  description: string;
  image: string;
  link: string;
};

export const fallbackProjects: Project[] = [
  {
    title: 'Apply / Job Application UI',
    client: 'AGENCY · Product design',
    category: 'Development',
    tags: ['UI / UX', 'Product design'],
    monogram: 'AP',
    description: 'A focused application experience designed to make the next step feel effortless.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/abc552217200329.Y3JvcCw1NzUzLDQ1MDAsODUsMA.jpg',
    link: 'https://www.behance.net/gallery/217200329/apply-for-the-job-application-ui-design',
  },
  {
    title: 'Food & Restaurant App',
    client: 'AGENCY · Mobile experience',
    category: 'Development',
    tags: ['UI / UX', 'Mobile app'],
    monogram: 'FR',
    description: 'A warm, intuitive food discovery flow built around appetite, speed, and clarity.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1a5866217200001.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/217200001/food-and-restaurant-app-ui-design',
  },
  {
    title: 'Music App UI',
    client: 'AGENCY · Digital product',
    category: 'Development',
    tags: ['Interface', 'Interaction'],
    monogram: 'MU',
    description: 'A vivid listening interface that gives discovery and personal taste equal weight.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2ee640217199409.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    link: 'https://www.behance.net/gallery/217199409/UI-Design-Music-app',
  },
  {
    title: 'Obra Marrakech',
    client: 'Obra Marrakech · Campaign design',
    category: 'Marketing',
    tags: ['Social content', 'Art direction'],
    monogram: 'OM',
    description: 'A tactile campaign system made to bring a Marrakech beauty brand into focus.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/98d950152573023.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg',
    link: 'https://www.behance.net/gallery/152573023/Obra-Marrakech-Flayer-And-Instagram-Poste-by-Yhdesign',
  },
  {
    title: 'RC Re Corps',
    client: 'RC Re Corps · Brand identity',
    category: 'Design',
    tags: ['Logo design', 'Identity'],
    monogram: 'RC',
    description: 'A confident mark and identity direction for a brand built around renewal and movement.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/83fb13149843455.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg',
    link: 'https://www.behance.net/gallery/149843455/Rc-Re-Corps-Logo-design-by-Yhdesign',
  },
  {
    title: 'Obra Kech Beauty & Spa',
    client: 'Obra Kech · Visual system',
    category: 'Design',
    tags: ['Branding', 'Print design'],
    monogram: 'OK',
    description: 'An elegant visual world shaped for a beauty and spa experience in Marrakech.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ddf881149843039.Y3JvcCwxMDA3LDc4OCw2ODgsNDQ0.jpg',
    link: 'https://www.behance.net/gallery/149843039/Obra-Kech-Institut-De-Beaute-Spa-Conceptions',
  },
];

const RSS_URL = 'https://www.behance.net/feeds/user/yhdesign1';
const MAX_PROJECTS = 12;

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([\da-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

function tagValue(block: string, tag: string) {
  const match = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i'));
  return match ? decodeXml(match[1]) : '';
}

function attributeValue(block: string, tag: string, attribute: string) {
  const match = block.match(new RegExp(`<${tag}\\b[^>]*\\b${attribute}=["']([^"']+)["']`, 'i'));
  return match ? decodeXml(match[1]) : '';
}

function firstImage(block: string) {
  const candidates = [
    attributeValue(block, 'media:content', 'url'),
    attributeValue(block, 'media:thumbnail', 'url'),
    attributeValue(block, 'enclosure', 'url'),
    attributeValue(block, 'img', 'src'),
    attributeValue(block, 'img', 'data-src'),
  ];
  return candidates.find((value) => /^https:\/\//i.test(value)) ?? '';
}

function titleCase(value: string) {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+by\s+yhdesign\s*$/i, '')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .trim();
}

function inferCategory(title: string): ProjectCategory {
  const normalized = title.toLowerCase();
  if (/(website|web app|app ui|application ui|mobile|music|restaurant)/.test(normalized)) return 'Development';
  if (/(instagram|flayer|campaign|social|marketing|advert)/.test(normalized)) return 'Marketing';
  return 'Design';
}

function parseFeed(xml: string): Project[] {
  const projects: Project[] = [];
  const seen = new Set<string>();
  const entries = xml.match(/<(?:item|entry)\b[\s\S]*?<\/(?:item|entry)>/gi) ?? [];

  for (const entry of entries) {
    const rawLink = tagValue(entry, 'link') || attributeValue(entry, 'link', 'href');
    const link = rawLink.replace(/&amp;/g, '&');
    if (!/^https:\/\/www\.behance\.net\/gallery\//i.test(link) || seen.has(link)) continue;

    const rawTitle = tagValue(entry, 'title') || 'Behance project';
    const title = titleCase(rawTitle);
    const image = firstImage(entry);
    if (!image) continue;

    const category = inferCategory(title);
    projects.push({
      title,
      client: 'YHD Agency · Behance portfolio',
      category,
      tags: ['Behance', category === 'Development' ? 'Digital product' : category],
      monogram: title.split(/\s+/).map((word) => word[0]).join('').slice(0, 2).toUpperCase(),
      description: 'Fresh work from the YHD Agency Behance portfolio.',
      image,
      link,
    });
    seen.add(link);
  }

  return projects.slice(0, MAX_PROJECTS);
}

export function mergeProjects(remoteProjects: Project[]) {
  const remoteLinks = new Set(remoteProjects.map((project) => project.link));
  return [...remoteProjects, ...fallbackProjects.filter((project) => !remoteLinks.has(project.link))];
}

export async function fetchBehanceProjects(): Promise<Project[]> {
  try {
    const response = await fetch(RSS_URL, {
      headers: { 'user-agent': 'YHD-Agency-portfolio-sync/1.0', accept: 'application/rss+xml, application/xml, text/xml' },
      cache: 'force-cache',
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return [];
    return parseFeed(await response.text());
  } catch {
    return [];
  }
}
