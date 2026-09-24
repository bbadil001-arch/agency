import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/i18n';

export const metadata: Metadata = {
  metadataBase: new URL('https://power-ai-agency.bbadil001.chatgpt.site'),
  title: 'AGENCY | Digital design & development',
  description: 'Morocco-based creative studio for graphic design, digital experiences, and web development.',
  alternates: {
    languages: {
      en: '/?lang=en',
      ar: '/?lang=ar',
      fr: '/?lang=fr',
    },
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
