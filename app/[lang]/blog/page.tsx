import type { Metadata } from 'next';
import { StaticPage } from '@/components/StaticPage';
import { Blog } from '@/components/Blog';

export const metadata: Metadata = {
  title: 'Insights | AGENCY',
  description: 'Multilingual insights on web development, branding, digital marketing, and SEO for ambitious businesses.',
};

export default function BlogPage() {
  return <StaticPage><Blog /></StaticPage>;
}
