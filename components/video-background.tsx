'use client';

import { useEffect, useRef } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4';

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let frameId = 0;
    let restartTimeout: number | undefined;
    let startedAt = 0;
    let hasStarted = false;

    const setOpacity = (value: number) => {
      video.style.opacity = String(Math.max(0, Math.min(1, value)));
    };

    const playFromStart = () => {
      window.clearTimeout(restartTimeout);
      video.currentTime = 0;
      setOpacity(0);
      startedAt = performance.now();
      hasStarted = true;
      void video.play().catch(() => undefined);
    };

    const animate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;

      if (hasStarted) {
        const elapsed = (performance.now() - startedAt) / 1000;
        const fadeIn = Math.min(1, elapsed / 0.5);
        const fadeOut = Number.isFinite(duration) && duration > 0 && currentTime > duration - 0.5
          ? Math.max(0, (duration - currentTime) / 0.5)
          : 1;
        setOpacity(Math.min(fadeIn, fadeOut));

        if (Number.isFinite(duration) && duration > 0 && currentTime >= duration - 0.04) {
          setOpacity(0);
          window.clearTimeout(restartTimeout);
          restartTimeout = window.setTimeout(playFromStart, 100);
        }
      }

      frameId = window.requestAnimationFrame(animate);
    };

    const handleLoaded = () => playFromStart();
    video.addEventListener('loadedmetadata', handleLoaded);
    frameId = window.requestAnimationFrame(animate);

    if (video.readyState >= 1) playFromStart();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(restartTimeout);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={VIDEO_URL}
      aria-hidden="true"
      autoPlay
      muted
      playsInline
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      style={{ opacity: 0 }}
    />
  );
}
