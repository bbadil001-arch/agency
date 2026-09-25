import { NextResponse } from 'next/server';
import { fetchBehanceProjects } from '@/lib/behance';

export const revalidate = 21600;

export async function GET() {
  const projects = await fetchBehanceProjects();

  return NextResponse.json(
    {
      projects,
      source: projects.length ? 'behance-rss' : 'fallback',
      syncedAt: new Date().toISOString(),
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=21600, stale-while-revalidate=86400',
      },
    },
  );
}
