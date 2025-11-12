"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  teamHeaderContainerVariants,
  teamHeaderTextItemVariants,
} from "../animations/teamHeaderAnimations";

export default function TeamHeader() {
  return (
    <div className="relative flex h-[50vh] md:h-[60vh] items-center justify-center text-white">
      {/* Static Background Image */}
      <Image
        src="/images/team/team.jpeg"
        alt="The RSR Aviation team"
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
        variants={teamHeaderContainerVariants}
      >
        {/* Eyebrow Text */}
        <motion.p
          className="text-sm md:text-base font-semibold uppercase tracking-wider text-blue-300"
          variants={teamHeaderTextItemVariants}
        >
          Team
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl"
          variants={teamHeaderTextItemVariants}
        >
          People Behind the Promise
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-zinc-200"
          variants={teamHeaderTextItemVariants}
        >
          Hands-on leaders and specialists accountable for sourcing, quality,
          coatings, storage, and on-time dispatch.
        </motion.p>
      </motion.div>
    </div>
  );
}
