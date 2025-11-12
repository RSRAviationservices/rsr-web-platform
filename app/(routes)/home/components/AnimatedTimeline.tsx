"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTimelineProps {
  stepsCount: number;
}

export default function AnimatedTimeline({
  stepsCount,
}: AnimatedTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = (stepsCount - 1) * 200;

  return (
    <div ref={containerRef} className="absolute left-4 top-4 h-full w-[2px]">
      <div className="absolute inset-0 bg-zinc-200" />
      <svg
        className="absolute top-0 left-0 overflow-visible"
        style={{ width: "2px", height: "100%" }}
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2={lineHeight}
          stroke="#27272a" // zinc-800
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{
            pathLength: scrollYProgress,
          }}
        />
      </svg>
    </div>
  );
}
