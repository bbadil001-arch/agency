import type { Metadata } from 'next';
import { About } from '@/components/About';
import { StaticPage } from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'About AGENCY | Morocco-based digital studio',
  description: 'Learn about AGENCY, a Morocco-based creative studio for brand design, web development, and digital growth.',
};

export default function AboutPage() {
  return <StaticPage><About /></StaticPage>;
}
