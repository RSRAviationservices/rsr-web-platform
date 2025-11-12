"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// Connect GSAP ScrollTrigger with Lenis
// Call this function in a component that uses both
export function syncGSAPWithLenis(lenis: any) {
  if (!lenis) return;

  // Update ScrollTrigger on Lenis scroll
  lenis.on("scroll", ScrollTrigger.update);

  // Add Lenis raf to GSAP ticker
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Disable lag smoothing
  gsap.ticker.lagSmoothing(0);
}
