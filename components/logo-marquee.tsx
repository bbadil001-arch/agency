const brands = ['Shopify', 'WordPress', 'Meta', 'Google Partner', 'HubSpot', 'Webflow'];

function BrandItem({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 text-base font-semibold text-foreground">
      <span className="liquid-glass flex h-6 w-6 items-center justify-center rounded-lg text-[11px] font-bold text-foreground/80">
        {name[0]}
      </span>
      <span>{name}</span>
    </div>
  );
}

export function LogoMarquee() {
  const loop = [...brands, ...brands];

  return (
    <section className="relative z-10 mx-auto flex w-full max-w-5xl items-center gap-8 overflow-hidden px-5 pb-10 sm:gap-12 sm:px-0" aria-label="Platforms and partners">
      <p className="w-[130px] shrink-0 text-sm leading-5 text-foreground/50 sm:w-[165px]">
        Powered by World-Class
        <br />
        Tech &amp; Media Platforms
      </p>

      <div className="min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {loop.map((brand, index) => (
            <BrandItem key={`${brand}-${index}`} name={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
