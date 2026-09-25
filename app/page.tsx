import { Hero } from '@/components/hero';
import { About } from '@/components/About';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Portfolio } from '@/components/Portfolio';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { fetchBehanceProjects } from '@/lib/behance';

export const revalidate = 21600;

export default async function Home() {
  const projects = await fetchBehanceProjects();

  return (
    <main className="bg-[hsl(260,87%,3%)] text-[hsl(40,6%,95%)]">
      <Hero />
      <Services />
      <About />
      <Portfolio initialProjects={projects} />
      <Testimonials />
      <Blog limit={3} />
      <Contact />
      <Footer />
    </main>
  );
}
