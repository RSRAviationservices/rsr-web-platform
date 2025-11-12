"use client";

import React, { ReactNode, useRef } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

interface MarqueeProps {
  children: ReactNode;
  baseVelocity: number;
}

export default function Marquee({
  children,
  baseVelocity = 100,
}: MarqueeProps) {
  const baseX = useMotionValue(0);

  const x = useTransform(baseX, (v) => `${v % -50}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full overflow-hidden flex flex-nowrap">
      <motion.div
        className="flex flex-nowrap gap-16 will-change-transform"
        style={{ x }}
      >
        <span className="flex-shrink-0 flex items-center gap-16">
          {children}
        </span>
      </motion.div>
    </div>
  );
}
