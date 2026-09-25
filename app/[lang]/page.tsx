import { Hero } from '@/components/hero';
import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Portfolio } from '@/components/Portfolio';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { fetchBehanceProjects } from '@/lib/behance';
import { isLocale } from '@/lib/i18n';
import type { Metadata } from 'next';
import { localizedAlternates } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  const titles = {
    en: 'Web Development, Branding & Digital Marketing in Morocco',
    fr: 'Développement web, branding et marketing digital au Maroc',
    ar: 'تطوير الويب والهوية البصرية والتسويق الرقمي في المغرب',
  };
  const descriptions = {
    en: 'AGENCY helps ambitious businesses grow with high-converting websites, memorable brand design, and performance marketing from Morocco to the world.',
    fr: 'AGENCY accompagne les entreprises ambitieuses avec des sites orientés conversion, une identité forte et un marketing à la performance depuis le Maroc.',
    ar: 'تساعد AGENCY الشركات الطموحة على النمو عبر مواقع عالية التحويل وهوية بصرية مميزة وتسويق قائم على الأداء من المغرب إلى العالم.',
  };
  return { title: titles[locale], description: descriptions[locale], alternates: localizedAlternates(locale) };
}

export const revalidate = 21600;

export default async function LocalizedHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const routeLocale = isLocale(lang) ? lang : 'en';
  const projects = await fetchBehanceProjects();

  return (
    <main className="bg-[hsl(260,87%,3%)] text-[hsl(40,6%,95%)]">
      <Hero /><Services /><About /><Portfolio initialProjects={projects} /><Testimonials /><Blog limit={3} routeLocale={routeLocale} /><Contact /><Footer />
    </main>
  );
}
