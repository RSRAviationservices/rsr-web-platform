"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Users } from "lucide-react";
import {
  drivesUsHeaderVariants,
  valuesContainerVariants,
  valueCardVariants,
} from "../animations/whatDrivesUsAnimations";

const values = [
  {
    name: "Reliability Over Everything",
    description:
      "Every material, document, and delivery must meet exact specifications and timing commitments.",
    icon: <Target />,
  },
  {
    name: "Compliance as Standard",
    description:
      "Documentation and traceability are embedded in every process, not added later.",
    icon: <ShieldCheck />,
  },
  {
    name: "Partnership Approach",
    description:
      "We align with program needs, not just purchase orders, ensuring operations run smoothly.",
    icon: <Users />,
  },
];

export default function WhatDrivesUsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={drivesUsHeaderVariants}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            What Drives Us
          </h2>
        </motion.div>

        {/* Animated Value Cards */}
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={valuesContainerVariants}
        >
          {values.map((value) => (
            <motion.div
              key={value.name}
              className="flex flex-col items-start rounded-2xl bg-stone-50 p-8 ring-1 ring-zinc-200"
              variants={valueCardVariants}
            >
              <div className="rounded-lg bg-blue-100 p-3 ring-8 ring-stone-50">
                {React.cloneElement(
                  value.icon as React.ReactElement<{ className?: string }>,
                  {
                    className: "h-8 w-8 text-blue-700",
                  }
                )}
              </div>
              <h3 className="mt-6 text-xl font-bold text-zinc-900">
                {value.name}
              </h3>
              <p className="mt-4 text-zinc-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
