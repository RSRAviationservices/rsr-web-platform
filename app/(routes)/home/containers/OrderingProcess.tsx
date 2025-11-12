"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  SearchCheck,
  FileText,
  PackageCheck,
  Box,
  Truck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedTimeline from "../components/AnimatedTimeline";
import AnimatedStepCard from "../components/AnimatedStepCard";
import {
  leftColumnContainerVariants,
  leftColumnItemVariants,
} from "../animations/orderingProcessAnimations";

const steps = [
  {
    title: "Share Requirement",
    description:
      "Part number/spec, quantity, delivery location, and need-by date.",
    icon: <ClipboardList size={28} className="text-zinc-800" />,
  },
  {
    title: "Specification Match",
    description:
      "Primary option plus approved equivalents, with compatibility notes.",
    icon: <SearchCheck size={28} className="text-zinc-800" />,
  },
  {
    title: "Quote and Lead Time",
    description: "In-stock, AOG fast lane, or scheduled delivery windows.",
    icon: <FileText size={28} className="text-zinc-800" />,
  },
  {
    title: "Documentation Pack",
    description:
      "COC, MDS/TDS, batch traceability, shelf-life details, and 8130-3/EASA Form 1 when applicable.",
    icon: <PackageCheck size={28} className="text-zinc-800" />,
  },
  {
    title: "Pick, Preserve, Package",
    description:
      "Temperature-controlled handling and compliant hazmat preparation.",
    icon: <Box size={28} className="text-zinc-800" />,
  },
  {
    title: "Dispatch and Tracking",
    description:
      "Priority carrier booking and real-time status to receipt and POD.",
    icon: <Truck size={28} className="text-zinc-800" />,
  },
];

export default function OrderingProcess() {
  return (
    <section className="w-full bg-white text-zinc-950 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 items-start">
        {/* Left Column: Sticky Header with Animation */}
        <motion.div
          className="max-w-md lg:sticky lg:top-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={leftColumnContainerVariants}
        >
          <motion.div
            className="hidden md:flex items-center gap-3"
            variants={leftColumnItemVariants}
          >
            <span className="h-0.5 w-8 bg-zinc-800"></span>
            <p className="text-xs font-semibold tracking-wider text-zinc-800 uppercase">
              HOW ORDERING WORKS
            </p>
          </motion.div>

          <motion.h1
            className="mt-4 text-center md:text-left text-2xl md:text-4xl font-bold leading-tight text-zinc-900"
            variants={leftColumnItemVariants}
          >
            Our Streamlined Procurement Process
          </motion.h1>

          <motion.p
            className="mt-6 text-center md:text-left text-base md:text-lg text-zinc-600"
            variants={leftColumnItemVariants}
          >
            Clear steps from requirement to delivery, designed for fast
            procurement and maintenance turnarounds.
          </motion.p>

          <motion.div variants={leftColumnItemVariants}>
            <Link href="/contact-us" className="hidden md:flex">
              <button className="mt-2.5 md:mt-10 inline-flex items-center group">
                <span className="bg-zinc-900 text-white font-bold py-3 px-6 rounded-l-md group-hover:bg-zinc-700 transition-colors">
                  Request Instant Quote
                </span>
                <span className="bg-zinc-800 text-white p-3 rounded-r-md group-hover:bg-zinc-600 transition-colors">
                  <ArrowRight className="h-6 w-6" />
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Animated Timeline */}
        <div className="relative">
          {/* Animated Drawing Line */}
          <AnimatedTimeline stepsCount={steps.length} />

          {/* Stepper Items */}
          <div className="relative flex flex-col gap-8">
            {steps.map((step, index) => (
              <AnimatedStepCard
                key={index}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <Link
          href="/contact-us"
          className="w-full flex items-center justify-center md:hidden"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 text-zinc-50 font-medium rounded-full hover:bg-zinc-800 transition">
            Request for Quote
          </button>
        </Link>
      </div>
    </section>
  );
}
