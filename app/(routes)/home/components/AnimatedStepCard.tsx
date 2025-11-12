"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  stepCardVariants,
  dotVariants,
} from "../animations/orderingProcessAnimations";

interface AnimatedStepCardProps {
  step: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
  isLast: boolean;
}

export default function AnimatedStepCard({
  step,
  index,
  isLast,
}: AnimatedStepCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative pl-10 md:pl-14"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Cover line below last dot */}
      {isLast && (
        <div
          className="absolute left-4 top-4 h-full w-[2px] bg-white"
          aria-hidden="true"
        />
      )}

      {/* Animated Dot */}
      <motion.div
        className="absolute left-[10px] top-2 h-4 w-4 rounded-full border-4 border-white"
        variants={dotVariants}
        initial="inactive"
        animate={isInView ? "active" : "inactive"}
      />

      {/* Step Content Card */}
      <motion.div
        className="bg-stone-50 border border-stone-200 p-6 rounded-lg hover:shadow-md transition-shadow"
        variants={stepCardVariants}
      >
        {step.icon}
        <h3 className="mt-4 text-xl font-bold text-zinc-900">{step.title}</h3>
        <p className="mt-2 text-zinc-600">{step.description}</p>
      </motion.div>
    </motion.div>
  );
}
