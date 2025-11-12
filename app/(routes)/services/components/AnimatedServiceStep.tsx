"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  serviceStepCardVariants,
  serviceDotVariants,
} from "../animations/serviceProcessAnimations";

interface AnimatedServiceStepProps {
  step: {
    title: string;
    description: string;
    icon: React.ReactElement;
  };
  index: number;
  isLast: boolean;
  bgColor: string;
}

export default function AnimatedServiceStep({
  step,
  index,
  isLast,
  bgColor,
}: AnimatedServiceStepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative pl-12"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Cover line below last dot */}
      {isLast && (
        <div
          className={`absolute left-4 top-4 h-full w-0.5 ${bgColor}`}
          aria-hidden="true"
        />
      )}

      {/* Animated Dot */}
      <motion.div
        className="absolute left-[9.5px] top-[5px] h-5 w-5 rounded-full border-4 border-white ring-4 ring-zinc-200"
        variants={serviceDotVariants}
        initial="inactive"
        animate={isInView ? "active" : "inactive"}
      />

      {/* Step Content Card */}
      <motion.div
        className="flex items-start gap-4"
        variants={serviceStepCardVariants}
      >
        <span className="mt-1 flex h-8 w-8 items-center justify-center rounded px-1 md:rounded-lg bg-zinc-100">
          {React.cloneElement(
            step.icon as React.ReactElement<{ className?: string }>,
            {
              className: "h-5 w-5 text-zinc-700",
            }
          )}
        </span>
        <div>
          <p className="text-base md:text-lg font-semibold text-zinc-900">
            {step.title}
          </p>
          <p className="mt-1 md:text-xs text-zinc-600">{step.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
