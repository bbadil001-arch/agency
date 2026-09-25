import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/i18n';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'AGENCY | Digital design & development', template: '%s | AGENCY' },
  description: 'Morocco-based creative studio for graphic design, digital experiences, and web development.',
  alternates: {
    canonical: '/en',
    languages: { en: '/en', fr: '/fr', ar: '/ar' },
  },
  openGraph: {
    type: 'website',
    siteName: 'AGENCY',
    title: 'AGENCY | Digital design & development',
    description: 'Web development, brand design, and performance marketing for ambitious businesses.',
    url: '/en',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
