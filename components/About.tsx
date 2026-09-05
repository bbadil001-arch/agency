import { ArrowUpRight, CheckCircle2, Layers, MapPin, Sparkles, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const metrics = [
  { value: '50+', label: 'Digital Projects Delivered', icon: Layers },
  { value: '98%', label: 'Client Satisfaction Rate', icon: Sparkles },
  { value: '3x', label: 'Average Revenue Boost', icon: TrendingUp },
  { value: 'Casablanca', label: 'Morocco-Based Hub', icon: MapPin },
];

export function About() {
  return (
    <section id="about" className="relative border-y border-white/[0.06] px-5 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
        <div>
          <SectionHeading eyebrow="02 / The studio" title="Local instinct. Global standard." />
          <div className="mt-8 space-y-5 text-base leading-8 text-foreground/60 sm:text-lg">
            <p>
              yHD AGENCY is a Morocco-based creative studio for brands ready to move with intent. We bring strategic clarity, expressive design, and dependable engineering into the same room.
            </p>
            <p>
              Our roots keep us close to Morocco’s visual culture and entrepreneurial energy, while our process is built for the standards of the world’s most competitive digital teams.
            </p>
          </div>
          <a href="#contact" className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-purple-200">
            Meet the team <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="liquid-glass rounded-[24px] p-5 transition-all duration-300 hover:scale-[1.02] sm:p-7">
                <Icon aria-hidden="true" className="h-5 w-5 text-foreground/40" strokeWidth={1.7} />
                <p className="mt-9 bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-300 bg-clip-text font-heading text-3xl font-semibold tracking-[-0.05em] text-transparent md:text-4xl">{metric.value}</p>
                <p className="mt-2 text-sm font-medium text-foreground/70">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
