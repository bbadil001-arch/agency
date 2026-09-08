import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Blog } from '@/components/Blog';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { StaticPage } from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'Insights | yHD AGENCY',
  description: 'Practical insights on web development, digital marketing, branding, and premium digital experiences in Morocco.',
};

export default function BlogIndexPage() {
  return (
    <StaticPage>
      <div className="mx-auto max-w-6xl px-5 pb-4 pt-8 sm:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-foreground/55 transition hover:text-foreground">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to yHD AGENCY
        </Link>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-2 sm:px-8"><AdPlaceholder label="Advertisement" /></div>
      <Blog />
    </StaticPage>
  );
}
