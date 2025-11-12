"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  aboutHeaderContainerVariants,
  aboutHeaderTextItemVariants,
} from "../animations/aboutHeaderAnimations";

export default function AboutHeader() {
  return (
    <div className="relative bg-zinc-900">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/cta-service.jpg"
          alt="RSR Aviation facility"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Animated Text Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={aboutHeaderContainerVariants}
        >
          {/* Eyebrow Text */}
          <motion.p
            className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-300"
            variants={aboutHeaderTextItemVariants}
          >
            About Us
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            className="mt-2 text-2xl md:text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            variants={aboutHeaderTextItemVariants}
          >
            Built for Aerospace Reliability
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-zinc-200"
            variants={aboutHeaderTextItemVariants}
          >
            Since 2022, RSR Aviation has grown from aerospace consumables
            trading to integrated supply, storage, and coating solutions that
            keep programs on track and aircraft flying.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
