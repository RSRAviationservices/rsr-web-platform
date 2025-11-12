"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Target, Users } from "lucide-react";
import {
  howWeWorkHeaderVariants,
  principlesContainerVariants,
  principleCardVariants,
  ctaButtonVariants,
} from "../animations/howWeWorkAnimations";

const principles = [
  {
    name: "Ownership",
    description:
      "Clear functional owners for sourcing, quality, storage, coatings, finance, and dispatch.",
    icon: <Users />,
  },
  {
    name: "Compliance-First",
    description:
      "Documentation, traceability, and handling standards embedded in every step.",
    icon: <ShieldCheck />,
  },
  {
    name: "SLA-Driven",
    description:
      "Defined response times from RFQ to delivery with post-dispatch support.",
    icon: <Target />,
  },
];

export default function HowWeWorkSection() {
  return (
    <div className="bg-stone-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          className="lg:mx-0 lg:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={howWeWorkHeaderVariants}
        >
          <h2 className="text-2xl md:text-3xl text-center md:text-left font-bold tracking-tight text-zinc-900 sm:text-4xl">
            How This Team Works
          </h2>
        </motion.div>

        {/* Animated Principle Cards */}
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={principlesContainerVariants}
        >
          {principles.map((principle) => (
            <motion.div
              key={principle.name}
              className="flex flex-col items-start gap-y-4 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200"
              variants={principleCardVariants}
            >
              <div className="rounded-lg bg-blue-100 p-3 ring-8 ring-white">
                {React.cloneElement(
                  principle.icon as React.ReactElement<{ className?: string }>,
                  {
                    className: "h-8 w-8 text-blue-700",
                  }
                )}
              </div>
              <h3 className="text-xl font-bold text-zinc-900">
                {principle.name}
              </h3>
              <p className="text-zinc-600">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={ctaButtonVariants}
        >
          <a
            href="/careers"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
          >
            Join Our Team
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
