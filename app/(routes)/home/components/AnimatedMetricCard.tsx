"use client";

import { motion } from "framer-motion";
import { metricCardVariants } from "../animations/metricsAnimations";
import { useCountAnimation } from "@/app/hooks/useCountAnimation";

interface AnimatedMetricCardProps {
  value: string;
  description: string;
  // For numeric values that should count up
  numericValue?: number;
  // For values with special formatting (like "99.8%" or "<4 hrs")
  prefix?: string;
  suffix?: string;
}

export default function AnimatedMetricCard({
  value,
  description,
  numericValue,
  prefix = "",
  suffix = "",
}: AnimatedMetricCardProps) {
  const { count, ref } = useCountAnimation({
    end: numericValue || 0,
    duration: 2000,
    start: 0,
  });

  const displayValue = numericValue
    ? `${prefix}${Math.round(count * 10) / 10}${suffix}`
    : value;

  return (
    <motion.div
      className="flex flex-col items-center md:items-start gap-y-2"
      variants={metricCardVariants}
    >
      <p ref={ref} className="text-4xl md:text-5xl font-bold text-black">
        {displayValue}
      </p>
      <p className="text-base text-zinc-700 max-w-xs">{description}</p>
    </motion.div>
  );
}
