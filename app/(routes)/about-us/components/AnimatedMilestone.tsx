"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  lineVariants,
  markerVariants,
  contentVariants,
} from "../animations/timelineAnimations";

interface AnimatedMilestoneProps {
  milestone: {
    label: string;
    title: string;
    description: string;
    isComplete: boolean;
  };
  isLast: boolean;
}

export default function AnimatedMilestone({
  milestone,
  isLast,
}: AnimatedMilestoneProps) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.li
      ref={ref}
      className="relative pb-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Connecting Line - Animated */}
      {!isLast && (
        <motion.div
          className="absolute left-3 top-4 -ml-px mt-0.5 h-full w-0.5 bg-zinc-200"
          variants={lineVariants}
          style={{ originY: 0 }} // Scale from top
          aria-hidden="true"
        />
      )}

      <div className="relative flex items-start space-x-4">
        {/* Animated Marker (Dot/Checkmark) */}
        <motion.div className="relative flex-none" variants={markerVariants}>
          {milestone.isComplete ? (
            <CheckCircle2
              className="h-6 w-6 text-blue-600 bg-stone-50"
              aria-hidden="true"
            />
          ) : (
            <div className="relative flex h-6 w-6 items-center justify-center bg-stone-50">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-400 ring-2 ring-zinc-300"></div>
            </div>
          )}
        </motion.div>

        {/* Animated Content */}
        <motion.div className="min-w-0 flex-auto" variants={contentVariants}>
          <p className="font-semibold text-zinc-500">{milestone.label}</p>
          <h3 className="mt-1 text-lg font-semibold text-zinc-900">
            {milestone.title}
          </h3>
          <p className="mt-2 text-zinc-600">{milestone.description}</p>
        </motion.div>
      </div>
    </motion.li>
  );
}
