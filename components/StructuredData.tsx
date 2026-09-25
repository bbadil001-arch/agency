import { absoluteUrl } from '@/lib/site';
import type { Locale } from '@/lib/i18n';

export function StructuredData({ locale }: { locale: Locale }) {
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${absoluteUrl('/')}/#agency`,
      name: 'AGENCY',
      url: absoluteUrl(`/${locale}`),
      image: absoluteUrl('/agency-logo.png'),
      email: 'yhpro.help@gmail.com',
      telephone: '+212643543460',
      priceRange: '$$-$$$',
      description: 'Morocco-based agency for web development, brand design, and performance marketing.',
      areaServed: ['Morocco', 'Casablanca', 'Worldwide'],
      serviceType: ['Web development', 'Graphic design', 'Branding', 'Digital marketing', 'SEO'],
      sameAs: ['https://www.behance.net/yhdesign1'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${absoluteUrl('/')}/#website`,
      name: 'AGENCY | Digital design & development',
      url: absoluteUrl(`/${locale}`),
      inLanguage: locale,
      publisher: { '@id': `${absoluteUrl('/')}/#agency` },
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
