"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import {
  industriesHeaderVariants,
  slideInFromLeft,
  slideInFromRight,
  industryPointsContainerVariants,
  industryPointVariants,
} from "../animations/industriesAnimations";

// Define a type for a single industry object
interface Industry {
  name: string;
  description: string;
  points: string[];
  image: string;
  imagePosition: "left" | "right";
}

// Data for the industries served, now typed
const industries: Industry[] = [
  {
    name: "Commercial Aviation",
    description:
      "Supporting OEMs and tier‑1 suppliers with materials and coatings aligned to production schedules and certification milestones.",
    points: [
      "Program-grade traceability and audit-ready records for every lot.",
      "Lifecycle visibility that strengthens quality assurance.",
      "Regulatory compliance in complex assembly environments.",
    ],
    image: "/images/services/commercial-aviation.jpg",
    imagePosition: "left",
  },
  {
    name: "Aerospace MRO",
    description:
      "Enabling fast turnarounds with documented materials, AOG response, and end‑to‑end traceability for airworthiness.",
    points: [
      "Digital records tying parts and repairs to each installation.",
      "Materials lifecycle tracking to support maintenance planning.",
      "AOG response for time-critical maintenance events.",
    ],
    image: "/images/services/aerospace-mro.jpg",
    imagePosition: "right",
  },
  {
    name: "Defense",
    description:
      "Supplying mission-critical materials and coating solutions built for harsh environments and strict standards.",
    points: [
      "Conformance to aerospace/defense certifications.",
      "Regulated application processes for sensitive components.",
      "Coatings selected to meet OEM and regulatory specifications.",
    ],
    image: "/images/services/services02.jpg",
    imagePosition: "left",
  },
  {
    name: "General Aviation",
    description:
      "Providing premium consumables and maintenance supplies for business jets, private aircraft, and charter fleets.",
    points: [
      "Broad availability for scheduled and unscheduled maintenance.",
      "Reliable documentation and labeling for simplified recordkeeping.",
      "Premium supplies for high-value private and charter aircraft.",
    ],
    image: "/images/services/general-aviation.jpg",
    imagePosition: "right",
  },
];

// Define the props for the IndustryRow component
interface IndustryRowProps {
  industry: Industry;
}

// Reusable component for each industry row with typed props
const IndustryRow = ({ industry }: IndustryRowProps) => {
  // Determine animation direction based on image position
  const imageVariants =
    industry.imagePosition === "left" ? slideInFromLeft : slideInFromRight;
  const textVariants =
    industry.imagePosition === "left" ? slideInFromRight : slideInFromLeft;

  return (
    <motion.div
      className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image Section */}
      <motion.div
        className={`relative h-50 md:h-80 w-full overflow-hidden rounded-2xl ${
          industry.imagePosition === "right" ? "md:order-last" : ""
        }`}
        variants={imageVariants}
      >
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Text Content Section */}
      <motion.div className="flex flex-col" variants={textVariants}>
        <p className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
          {industry.name}
        </p>
        <p className="mt-4 text-base md:text-lg text-zinc-600">
          {industry.description}
        </p>

        {/* Animated List Items */}
        <motion.ul
          className="mt-6 space-y-4"
          variants={industryPointsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {industry.points.map((point) => (
            <motion.li
              key={point}
              className="flex gap-x-3 text-sm md:text-base"
              variants={industryPointVariants}
            >
              <CheckCircle2
                className="mt-1 w-4 h-4 md:h-5 md:w-5 flex-none text-zinc-600"
                aria-hidden="true"
              />
              <span className="text-zinc-700">{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

// Main section component
export default function IndustriesSection() {
  return (
    <section className="bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={industriesHeaderVariants}
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Who We Work With
          </h2>
          <p className="mt-4 text-base md:text-lg text-zinc-600">
            Serving manufacturing, maintenance, defense, and private aviation
            with traceable supply, compliant coatings, and documented delivery
            across the full lifecycle.
          </p>
        </motion.div>

        {/* Animated Industry Rows */}
        <div className="mt-16 space-y-16 sm:mt-24">
          {industries.map((industry) => (
            <IndustryRow key={industry.name} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
