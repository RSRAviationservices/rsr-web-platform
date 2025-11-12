"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  offerHeaderVariants,
  offerCardsContainerVariants,
  offerCardVariants,
  offerCTAVariants,
} from "../animations/whatWeOfferAnimations";

const pillars = [
  {
    title: "Precision Supply",
    description:
      "OEM-authentic consumables with full traceability and just-in-time delivery—backed by 24/7 AOG support.",
    highlights: [
      "Official OEM products with documentation",
      "JIT fulfillment for production and MRO",
      "AOG response in under four hours",
    ],
  },
  {
    title: "Expert Storage & Handling",
    description:
      "Temperature-controlled preservation and hazardous-materials compliance to protect sensitive adhesives, sealants, and coatings.",
    highlights: [
      "1,500L climate-controlled storage",
      "Shelf-life and condition monitoring",
      "Hazmat handling and audit-ready records",
    ],
  },
  {
    title: "Trusted Technical Partnership",
    description:
      "Specification matching, regulatory documentation, and application guidance from experienced aerospace specialists.",
    highlights: [
      "Compliance packages (ISO/AS/FAA/EASA)",
      "Product selection and compatibility support",
      "SLA-backed service commitments",
    ],
  },
];

export default function WhatWeOfferSection() {
  return (
    <section className="w-full bg-stone-50 py-[20%] md:py-[8%] flex flex-col items-center">
      {/* Title & Subtitle */}
      <motion.div
        className="max-w-3xl text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={offerHeaderVariants}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-black">
          What we deliver for aerospace
        </h2>
        <p className="mt-4 text-base md:text-lg text-stone-600">
          Certified supply, protected storage, and expert support—built for
          mission-critical operations.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-x-2.5 gap-y-4 md:gap-y-0 px-5 md:px-0 w-full max-w-6xl mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={offerCardsContainerVariants}
      >
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-md p-8 transition-all duration-300 shadow flex flex-col justify-between"
            variants={offerCardVariants}
          >
            {/* Title + description */}
            <div>
              <p className="text-lg font-bold text-black mb-2">
                {pillar.title}
              </p>
              <p className="text-stone-600 mb-6">{pillar.description}</p>
            </div>
            {/* Highlights */}
            <ul className="flex flex-col gap-3 mb-6">
              {pillar.highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-stone-700"
                >
                  <Check size={16} className="text-gray-600 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={offerCTAVariants}
      >
        <Link href="/services">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition">
            Explore our services <ArrowRight size={18} />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
