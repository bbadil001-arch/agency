'use client';

import { motion } from 'framer-motion';
import { HeroMarquee } from '@/components/HeroMarquee';
import { Navbar } from '@/components/navbar';
import { VideoBackground } from '@/components/video-background';
import { useLocale } from '@/components/i18n';

export function Hero() {
  const { copy } = useLocale();
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-visible bg-[hsl(260,87%,3%)] text-[hsl(40,6%,95%)]">
      <VideoBackground />

      <Navbar />

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center overflow-visible px-4 pb-20 text-center sm:pb-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[527px] w-[984px] -translate-x-1/2 -translate-y-1/2 bg-gray-950 opacity-90 blur-[82px]" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center"
        >
          <span className="mb-6 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-foreground/55 shadow-[0_0_30px_rgba(168,85,247,0.12)]">
            {copy.hero.eyebrow}
          </span>
          <motion.h1
            className="font-heading text-[clamp(4.75rem,16vw,13.75rem)] font-normal leading-[1.02] tracking-[-0.024em]"
            aria-label="Digital Experiences That Scale"
          >
            {copy.hero.titleBefore}{' '}<span className="bg-[linear-gradient(to_left,#6366f1,#a855f7,#fcd34d)] bg-clip-text text-transparent">{copy.hero.titleAccent}</span>
          </motion.h1>

          <p className="mt-[9px] max-w-md text-lg leading-8 text-[hsl(var(--hero-sub-text))] opacity-80">
            {copy.hero.subtitle}
          </p>

          <motion.a
            id="consult"
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-[25px] rounded-full bg-white px-[29px] py-[24px] font-medium text-[#0b0610] shadow-[0_14px_40px_rgba(255,255,255,0.12)] transition hover:bg-white/90"
          >
            {copy.hero.cta}
          </motion.a>
        </motion.div>
      </section>

      <HeroMarquee />
    </section>
  );
}
