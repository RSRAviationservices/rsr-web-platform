"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
import {
  heroContainerVariants,
  heroFadeInUp,
  heroScrollIndicatorVariants,
  heroScrollBounceAnimation,
} from "../animations/heroAnimations";

const HeroSection = () => {
  return (
    <section className="relative flex h-[95vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950">
      {/* --- Background Video --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/video/herosection01.webm" type="video/webm" />
          <source src="/video/herosection.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-20 flex w-full min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Animated Content Container */}
          <motion.div
            className="max-w-3xl text-center lg:text-left"
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* --- Main Headline --- */}
            <motion.h1
              className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
              variants={heroFadeInUp}
            >
              Powering Aerospace With
              <br />
              <span className="bg-clip-text text-transparent bg-primary">
                Certified Consumables
              </span>
            </motion.h1>

            {/* --- Subheadline --- */}
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 lg:mx-0 md:text-xl"
              variants={heroFadeInUp}
            >
              Trusted by Aerospace, and Defense programs for mission‑critical
              supply, compliance, and on‑time delivery.
            </motion.p>

            {/* --- CTA Buttons --- */}
            <motion.div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
              variants={heroFadeInUp}
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200"
              >
                <Link href="/contact-us">Request Instant Quote</Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full bg-gray-950 px-6 py-3 font-medium text-white hover:bg-gray-900"
              >
                <Link href="/products">Browse Products</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        variants={heroScrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center gap-3 text-white/80">
          <span className="text-sm font-medium">Discover More</span>
          <motion.div
            className="h-12 w-px bg-gradient-to-b from-blue-100 to-transparent"
            {...heroScrollBounceAnimation}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
