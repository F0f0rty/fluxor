'use client';

import { useEffect, useState } from 'react';

export default function HeroParallax({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Overlay that fades in to darken background */}
      <div
        className={`absolute inset-0 bg-[#0a1e33]/50 transition-opacity duration-[2500ms] ease-out ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Content that fades in */}
      <div
        className={`transition-all duration-[2000ms] ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </div>
    </>
  );
}
