import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Blog } from '@/components/Blog';

export const metadata: Metadata = {
  title: 'Insights | yHD AGENCY',
  description: 'Practical insights on web development, digital marketing, branding, and premium digital experiences in Morocco.',
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[hsl(260,87%,3%)] text-[hsl(40,6%,95%)]">
      <div className="mx-auto max-w-6xl px-5 pb-4 pt-8 sm:px-8">
        <Link href="/#top" className="inline-flex items-center gap-2 text-sm text-foreground/55 transition hover:text-foreground">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to yHD AGENCY
        </Link>
      </div>
      <Blog />
    </main>
  );
}
