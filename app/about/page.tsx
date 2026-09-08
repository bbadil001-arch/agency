import type { Metadata } from 'next';
import { About } from '@/components/About';
import { StaticPage } from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'About yHD AGENCY | Morocco-based digital studio',
  description: 'Learn about yHD AGENCY, a Morocco-based creative studio for brand design, web development, and digital growth.',
};

export default function AboutPage() {
  return <StaticPage><About /></StaticPage>;
}
