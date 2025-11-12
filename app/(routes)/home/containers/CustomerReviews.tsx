"use client";

import React, { ReactNode, useRef } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { Quote } from "lucide-react";
import {
  reviewsHeaderVariants,
  reviewsMarqueeVariants,
} from "../animations/customerReviewsAnimations";

const testimonials = [
  {
    quote:
      "Great support end-to-end—requirements understood, delivery on time, and product quality on point.",
    company: "TATA Advanced Systems, Noida",
    name: "Shourya",
    title: "Supply Chain Manager",
  },
  {
    quote:
      "Extremely satisfied with the timely delivery, high-quality products, and exceptional support from the team.",
    company: "Air Works India",
    name: "Pravin Nikam",
    title: "Assistant Manager, Supply Chain",
  },
  {
    quote:
      "Appreciate the time and effort invested in our requirements—cooperation and commitment keep operations running smoothly.",
    company: "TATA Advanced Systems, Vadodara",
    name: "Ashish Kumar",
    title: "Manager, Supply Chain",
  },
  {
    quote:
      "Excellent response time and on-time delivery. Keep up the good work.",
    company: "MACREQ Manufacturing Services",
    name: "Creative Studio",
    title: "Designer",
  },
  {
    quote:
      "Reliable AOG coordination and clear updates from dispatch to receipt.",
    company: "Aerospace MRO Partner",
    name: "Maintenance Supervisor",
    title: "",
  },
  {
    quote:
      "Spec-matched alternatives with proper documentation saved both time and cost.",
    company: "Defense Program Supplier",
    name: "Program Manager",
    title: "",
  },
];

interface MarqueeProps {
  children: ReactNode;
  baseVelocity: number;
}

// Simplified Marquee component without external dependencies
function Marquee({ children, baseVelocity = 100 }: MarqueeProps) {
  const baseX = useMotionValue(0);

  // Use the modulo operator to create a seamless loop
  const x = useTransform(baseX, (v) => `${v % -25}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full overflow-hidden flex flex-nowrap py-5">
      <motion.div
        className="flex flex-nowrap gap-8 will-change-transform"
        style={{ x }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section className="w-full bg-stone-50 py-20 md:py-[8%]">
      {/* Animated Header */}
      <motion.div
        className="mx-auto max-w-3xl text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={reviewsHeaderVariants}
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Voices from the Flight Line
        </h2>
        <p className="mt-4 text-base md:text-lg leading-8 text-zinc-600">
          What procurement and MRO teams say about working with us
        </p>
      </motion.div>

      {/* Animated Marquee Container */}
      <motion.div
        className="mt-20 w-full [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reviewsMarqueeVariants}
      >
        <Marquee baseVelocity={-0.75}>
          {testimonials.map((review, index) => (
            <figure key={index} className="flex w-[90vw] max-w-lg">
              <div className="flex h-full flex-col whitespace-normal rounded-2xl bg-white p-6 shadow-sm">
                <Quote className="h-10 w-10 text-zinc-300" aria-hidden="true" />
                <blockquote className="mt-6 flex-grow text-lg text-zinc-700">
                  <p>"{review.quote}"</p>
                </blockquote>
                <figcaption className="mt-8 border-t border-zinc-100 pt-6">
                  <div className="font-bold text-zinc-950">
                    {review.company}
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    {[review.name, review.title].filter(Boolean).join(", ")}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
