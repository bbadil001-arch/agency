const logoSrc = '/yhd-logo.png';

export function BrandLogo() {
  return (
    <a
      href="#top"
      aria-label="yHD AGENCY home"
      className="flex items-center gap-2.5 text-sm font-semibold tracking-[-0.02em] text-foreground"
    >
      <img
        src={logoSrc}
        alt="yHD AGENCY"
        className="h-9 w-auto max-w-[190px] object-contain drop-shadow-[0_0_18px_rgba(168,85,247,0.22)] [mix-blend-mode:screen] sm:h-10 sm:max-w-[220px]"
      />
    </a>
  );
}
