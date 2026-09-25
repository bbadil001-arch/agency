import { StaticPage } from '@/components/StaticPage';
import { Contact } from '@/components/Contact';
import type { Metadata } from 'next';
import { isLocale } from '@/lib/i18n';
import { localizedAlternates } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  const title = { en: 'Contact AGENCY | Start a project', fr: 'Contactez AGENCY | Démarrer un projet', ar: 'اتصل بـ AGENCY | ابدأ مشروعك' };
  const description = {
    en: 'Contact AGENCY in Morocco for web development, graphic design, branding, SEO, and performance marketing.',
    fr: 'Contactez AGENCY au Maroc pour le développement web, le design, le branding, le SEO et le marketing à la performance.',
    ar: 'تواصل مع AGENCY في المغرب لتطوير المواقع والتصميم والهوية البصرية وتحسين SEO والتسويق بالأداء.',
  };
  return { title: title[locale], description: description[locale], alternates: localizedAlternates(locale, '/contact') };
}

export default function ContactPage() {
  return <StaticPage><Contact /></StaticPage>;
}
