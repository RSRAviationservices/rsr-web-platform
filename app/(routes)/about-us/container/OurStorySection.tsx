"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  storyTextContainerVariants,
  storyTextItemVariants,
  storyImageVariants,
} from "../animations/ourStoryAnimations";

export default function OurStorySection() {
  return (
    <div className="overflow-hidden bg-white py-18 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-16 lg:grid-cols-2">
          {/* Left Column - Animated Text Content */}
          <motion.div
            className="lg:pr-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={storyTextContainerVariants}
          >
            <div className="max-w-xl text-center md:text-left">
              {/* Headline */}
              <motion.p
                className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
                variants={storyTextItemVariants}
              >
                Our Story
              </motion.p>

              {/* First Paragraph */}
              <motion.p
                className="mt-6 text-lg leading-8 text-zinc-600"
                variants={storyTextItemVariants}
              >
                Founded in May 2022 in Navi Mumbai's aerospace corridor, RSR
                Aviation began with a clear mission: provide OEM-authentic
                consumables with the traceability and compliance aerospace
                operations demand.
              </motion.p>

              {/* Second Paragraph */}
              <motion.p
                className="mt-4 text-zinc-600"
                variants={storyTextItemVariants}
              >
                What started as specialized trading has evolved into
                comprehensive supply chain solutions—from precision sourcing to
                temperature-controlled storage and custom coating formulations.
                Our growth reflects the trust placed in us by commercial, MRO,
                defense, and general aviation operators across India and beyond.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Animated Image */}
          <motion.div
            className="relative h-48 md:h-96 w-full rounded-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={storyImageVariants}
          >
            <Image
              src="/images/home/cta/cta-banners1.jpg"
              alt="RSR Aviation facility interior"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
