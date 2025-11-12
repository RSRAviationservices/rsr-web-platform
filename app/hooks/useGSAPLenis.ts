"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "@/app/lib/animations/gsapConfig";

// Automatically sync GSAP with Lenis
export function useGSAPLenis() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis to GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, [lenis]);

  return lenis;
}
