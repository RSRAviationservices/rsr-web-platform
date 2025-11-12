"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface AnimatedServiceTimelineProps {
  stepsCount: number;
  scrollProgress: MotionValue<number>;
}

export default function AnimatedServiceTimeline({
  stepsCount,
  scrollProgress,
}: AnimatedServiceTimelineProps) {
  // EXACT calculation: space-y-20 = 5rem = 80px per gap
  const STEP_SPACING = 92; // Matches space-y-20 from Tailwind
  const lineHeight = (stepsCount) * STEP_SPACING;

  return (
    <>
      {/* Static background line - STOPS at last step */}
      <div
        className="absolute left-4 top-4 w-0.5 bg-zinc-200"
        style={{ height: `${lineHeight}px` }}
      />

      {/* Animated drawing line - STOPS at last step */}
      <svg
        className="absolute left-4 top-4"
        style={{
          width: "2px",
          height: `${lineHeight}px`,
          overflow: "visible",
        }}
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2={lineHeight}
          stroke="#27272a"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            pathLength: scrollProgress,
          }}
        />
      </svg>
    </>
  );
}
