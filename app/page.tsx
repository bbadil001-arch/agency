import { Hero } from '@/components/hero';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Portfolio } from '@/components/Portfolio';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="overflow-hidden bg-[hsl(260,87%,3%)] text-[hsl(40,6%,95%)]">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
