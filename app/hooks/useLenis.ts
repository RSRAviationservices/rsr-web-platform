"use client";

import { useLenis } from "lenis/react";

export function useScrollTo() {
  const lenis = useLenis();

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: {
      offset?: number;
      lerp?: number;
      duration?: number;
      immediate?: boolean;
      lock?: boolean;
      force?: boolean;
      onComplete?: () => void;
    }
  ) => {
    lenis?.scrollTo(target, options);
  };

  const stop = () => lenis?.stop();
  const start = () => lenis?.start();

  return { scrollTo, stop, start, lenis };
}
