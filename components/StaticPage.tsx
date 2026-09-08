import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/Footer';

export function StaticPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[hsl(260,87%,3%)] text-[hsl(40,6%,95%)]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
