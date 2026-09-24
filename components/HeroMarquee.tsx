const brands = ['Shopify', 'WordPress', 'Meta', 'Google Partner', 'HubSpot', 'Webflow'];
import { useLocale } from '@/components/i18n';

function BrandItem({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-base font-semibold text-foreground">
      <span className="liquid-glass flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold text-foreground/80">
        {name[0]}
      </span>
      <span>{name}</span>
    </div>
  );
}

export function HeroMarquee() {
  const { copy } = useLocale();
  const loop = [...brands, ...brands];

  return (
    <section
      className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-5 overflow-hidden px-5 pb-10 md:flex-row md:items-center md:gap-12 md:px-0"
      aria-label="Platforms and partners"
    >
      <p className="w-full shrink-0 text-sm leading-5 text-foreground/50 md:w-[165px]">
        {copy.marquee.firstLine}
        <br />
        {copy.marquee.secondLine}
      </p>

      <div className="min-w-0 w-full flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <div className="flex w-max whitespace-nowrap animate-marquee gap-10 pr-10 md:gap-16 md:pr-16">
          {loop.map((brand, index) => (
            <BrandItem key={`${brand}-${index}`} name={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
