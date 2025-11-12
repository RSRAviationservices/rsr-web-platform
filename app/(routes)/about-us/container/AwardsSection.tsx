"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Presentation, Handshake } from "lucide-react";
import {
  awardsHeaderVariants,
  awardsContainerVariants,
  awardCardVariants,
} from "../animations/awardsAnimations";

const awards = [
  {
    name: "Diamond Partner",
    event: "MRO South Asia Conference 2025",
    awardedBy: "Aerospace Media Group",
    icon: <Presentation />,
  },
  {
    name: "Strategic Collaboration",
    event: "Paris Air Show 2025",
    awardedBy: "Recognized for Indo-US Aerospace Partnership",
    icon: <Handshake />,
  },
  {
    name: "APU MRO",
    event: "Formed a strategic partnership to establish an APU MRO facility under the 'Make in India' initiative.",
    awardedBy: "Make in India",
    icon: <Award />,
  },
];

export default function AwardsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={awardsHeaderVariants}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Awards and Recognition
          </h2>
        </motion.div>

        {/* Animated Award Cards */}
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={awardsContainerVariants}
        >
          {awards.map((award) => (
            <motion.div
              key={award.name}
              className="flex flex-col items-start rounded-2xl bg-stone-50 p-8 ring-1 ring-zinc-200"
              variants={awardCardVariants}
            >
              <div className="rounded-lg bg-blue-100 p-3 ring-8 ring-stone-50">
                {React.cloneElement(
                  award.icon as React.ReactElement<{ className?: string }>,
                  {
                    className: "h-8 w-8 text-blue-700",
                  }
                )}
              </div>
              <h3 className="mt-6 text-xl font-bold text-zinc-900">
                {award.name}
              </h3>
              <p className="mt-2 text-zinc-600">
                {award.awardedBy} at the{" "}
                <span className="font-semibold text-zinc-800">
                  {award.event}
                </span>
                .
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
