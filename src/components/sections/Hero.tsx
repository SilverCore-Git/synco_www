"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = section.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / distance, 0), 1);
      layer.style.transform = `translate3d(${progress * 100}%, ${-progress * 100}%, 0)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section
      id="accueil"
      ref={sectionRef}
      className="relative h-[200svh] motion-reduce:h-auto"
    >
      <div className="sticky top-0 h-svh overflow-hidden motion-reduce:static">
        <div
          ref={layerRef}
          className="grid h-full grid-rows-[auto_1fr_auto] will-change-transform md:grid-cols-[25%_1fr] md:grid-rows-[2fr_1fr]"
        >
          <div className="flex items-end bg-brand px-3 py-3 md:py-4">
            <LanguageSwitcher />
          </div>

          <div className="flex items-center justify-center px-3 pt-24 pb-12 md:pt-12">
            <h1 className="w-1/2 max-w-md min-w-40 md:w-[30%]">
              <Image
                src="/logo.svg"
                alt="Synco"
                width={1550}
                height={500}
                priority
                className="h-auto w-full"
              />
            </h1>
          </div>

          <div className="hidden md:block" />

          <div className="flex items-center bg-brand px-6 py-10 md:px-8 lg:px-12">
            <p className="max-w-[15em] text-[clamp(1.75rem,3.75vw,3.5rem)] leading-[1.9] font-semibold tracking-tighter">
              La collaboration d’équipe sans compromis sur la sécurité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
