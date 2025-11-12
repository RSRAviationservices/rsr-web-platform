"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  headerContentContainerVariants,
  headerTextItemVariants,
} from "../animations/servicesHeaderAnimations";

export default function ServicesHeader() {
  return (
    <section className="relative flex items-center justify-center h-[50vh] md:h-[60vh] text-white">
      {/* Static Background Image */}
      <Image
        src="/images/home/cta/cta-banners1.jpg"
        alt="Aerospace engineering and supply facility"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated Centered Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={headerContentContainerVariants}
      >
        {/* Eyebrow Text */}
        <motion.p
          className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-300"
          variants={headerTextItemVariants}
        >
          Our Services
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          variants={headerTextItemVariants}
        >
          Integrated Aerospace Supply Solutions
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-zinc-200"
          variants={headerTextItemVariants}
        >
          Precision sourcing, controlled storage, and specialist support to keep
          aircraft flying and programs on schedule.
        </motion.p>
      </motion.div>
    </section>
  );
}
