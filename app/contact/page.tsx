import type { Metadata } from 'next';
import { Contact } from '@/components/Contact';
import { StaticPage } from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'Contact AGENCY | Start a project',
  description: 'Contact AGENCY in Morocco for web development, graphic design, branding, and performance marketing.',
};

export default function ContactPage() {
  return <StaticPage><Contact /></StaticPage>;
}
