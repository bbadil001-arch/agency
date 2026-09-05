import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'yHD AGENCY | Digital design & development',
  description: 'Morocco-based creative studio for graphic design, digital experiences, and web development.',
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
