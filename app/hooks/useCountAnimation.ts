"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseCountAnimationProps {
  end: number;
  duration?: number; // in milliseconds
  start?: number;
}

export function useCountAnimation({
  end,
  duration = 2000,
  start = 0,
}: UseCountAnimationProps) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutExpo)
      const easeOutExpo = (t: number): number => {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      };

      const currentCount = start + (end - start) * easeOutExpo(progress);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end exactly at the target
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, start, end, duration]);

  return { count, ref };
}
