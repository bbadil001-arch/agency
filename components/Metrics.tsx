import { Layers, MapPin, Sparkles, TrendingUp } from 'lucide-react';

const metrics = [
  { value: '50+', label: 'Digital Projects Delivered', icon: Layers },
  { value: '98%', label: 'Client Satisfaction Rate', icon: Sparkles },
  { value: '3x', label: 'Average Revenue Boost', icon: TrendingUp },
  { value: 'Casablanca', label: 'Morocco-Based Hub', icon: MapPin },
];

export function Metrics() {
  return (
    <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <div
            key={metric.label}
            className="liquid-glass min-w-0 rounded-[24px] p-5 transition-all duration-300 hover:scale-[1.02] sm:p-7"
          >
            <Icon aria-hidden="true" className="h-5 w-5 text-foreground/40" strokeWidth={1.7} />
            <p className="mt-9 max-w-full break-words bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-300 bg-clip-text font-heading text-xl font-semibold leading-tight tracking-tight text-transparent sm:text-2xl md:text-3xl lg:text-4xl">
              {metric.value}
            </p>
            <p className="mt-2 text-sm font-medium leading-5 text-foreground/70">{metric.label}</p>
          </div>
        );
      })}
    </div>
  );
}
