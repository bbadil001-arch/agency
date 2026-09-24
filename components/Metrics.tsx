import { Layers, MapPin, Sparkles, TrendingUp } from 'lucide-react';
import { useLocale } from '@/components/i18n';

export function Metrics() {
  const { copy } = useLocale();
  const metrics = [
    { value: '50+', label: copy.metrics.projects, icon: Layers },
    { value: '98%', label: copy.metrics.satisfaction, icon: Sparkles },
    { value: '3x', label: copy.metrics.revenue, icon: TrendingUp },
    { value: 'Worldwide', label: copy.metrics.worldwide, icon: MapPin },
  ];
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
