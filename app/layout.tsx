import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Power AI | Talent acquisition, amplified',
  description: 'The most powerful AI ever deployed in talent acquisition.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
