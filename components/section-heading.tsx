type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c084fc] shadow-[0_0_12px_#c084fc]" />
        {eyebrow}
      </span>
      <h2 className="mt-6 font-heading text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-7 text-foreground/55 sm:text-lg">{description}</p>}
    </div>
  );
}
