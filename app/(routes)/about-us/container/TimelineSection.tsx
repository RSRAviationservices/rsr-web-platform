"use client";

import React from "react";
import { motion } from "framer-motion";
import { timelineHeaderVariants } from "../animations/timelineAnimations";
import AnimatedMilestone from "../components/AnimatedMilestone";

const milestones = [
  {
    label: "May 2022",
    title: "Incorporation and Registration",
    description:
      "RSR Aviation Services Pvt. Ltd. was officially incorporated, marking the beginning of our operations.",
    isComplete: true,
  },
  {
    label: "Sept 2022",
    title: "AS 9120 Certification",
    description:
      "Achieved the AS 9120 certification, a key quality standard for aerospace distributors.",
    isComplete: true,
  },
  {
    label: "Sept 2022",
    title: "3Chem Paints Distributorship",
    description:
      "Became an authorized distributor for the renowned 3Chem Paints.",
    isComplete: true,
  },
  {
    label: "April 2023",
    title: "Akzo BEL Authorization",
    description:
      "Received official authorization from Akzo Nobel India for BEL.",
    isComplete: true,
  },
  {
    label: "Aug 2023",
    title: "First Full Livery Painting",
    description:
      "Successfully completed our first full aircraft livery painting project, showcasing our capabilities.",
    isComplete: true,
  },
  {
    label: "Sept 2023",
    title: "First Blending of 3Chem Paints",
    description:
      "Commenced our in-house blending operations for 3Chem Paints to better serve our clients.",
    isComplete: true,
  },
  {
    label: "Feb 2024",
    title: "TESA Distributorship",
    description:
      "Appointed as an official distributor for TESA's advanced adhesive tape solutions.",
    isComplete: true,
  },
  {
    label: "Sept 2024",
    title: "Multiple Distributorships & Certifications",
    description:
      "Achieved AS 9100 Certification and secured distributorships for Sherwin Williams & Sandstorm.",
    isComplete: true,
  },
  {
    label: "Q2 2025",
    title: "Exclusive GRM Systems Distributor",
    description:
      "Appointed exclusive distributor for GRM Systems' advanced composite materials across India.",
    isComplete: false,
  },
  {
    label: "Q3 2025",
    title: "Alpha Aircraft Systems Partnership",
    description:
      "Formed a strategic partnership to establish an APU MRO facility under the 'Make in India' initiative.",
    isComplete: false,
  },
];

export default function TimelineSection() {
  return (
    <div className="bg-stone-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={timelineHeaderVariants}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Key Milestones & Achievements
          </h2>
        </motion.div>
        <div className="mx-auto mt-16 flow-root max-w-3xl">
          <ul role="list" className="-mb-8">
            {milestones.map((milestone, index) => (
              <AnimatedMilestone
                key={milestone.title}
                milestone={milestone}
                isLast={index === milestones.length - 1}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
