export function BrandLogo() {
  return (
    <a
      href="#top"
      aria-label="Power AI home"
      className="flex items-center gap-2.5 text-sm font-semibold tracking-[-0.02em] text-foreground"
    >
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white text-[15px] font-bold text-[#09030f] shadow-[0_0_26px_rgba(168,85,247,0.3)]"
      >
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none">
          <path
            d="M6.25 4.75 12 9.5l5.75-4.75v14.5L12 14.5l-5.75 4.75V4.75Z"
            fill="url(#logo-gradient)"
          />
          <defs>
            <linearGradient id="logo-gradient" x1="5" x2="19" y1="5" y2="19" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" />
              <stop offset="0.55" stopColor="#A855F7" />
              <stop offset="1" stopColor="#FCD34D" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span>Power AI</span>
    </a>
  );
}
