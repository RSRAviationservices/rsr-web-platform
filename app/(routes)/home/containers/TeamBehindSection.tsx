"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  teamHeaderContainerVariants,
  teamHeaderItemVariants,
  teamMemberVariants,
} from "../animations/teamBehindAnimations";

const teamMembers = [
  {
    name: "Suresh Rahangdale",
    title: "Director",
    quote:
      "My focus is on aligning OEM alliances and global sourcing with program timelines, ensuring availability and cost discipline for our partners.",
    image: "/images/team/directors/directors1.png",
  },
  {
    name: "Reena Paigude",
    title: "Director",
    quote:
      "I lead our operations with a focus on audit-ready documentation and on-time dispatch, ensuring quality through temperature-controlled handling and hazmat compliance.",
    image: "/images/team/directors/directors2.png",
  },
];

export default function TeamBehindSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 px-6 lg:grid-cols-5 lg:px-8">
        <motion.div
          className="lg:col-span-2 lg:self-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={teamHeaderContainerVariants}
        >
          <motion.h2
            className="text-2xl md:text-3xl text-center md:text-left font-bold tracking-tight text-zinc-900 sm:text-4xl"
            variants={teamHeaderItemVariants}
          >
            People behind the promise
          </motion.h2>

          <motion.p
            className="mt-4 text-base text-center md:text-left md:text-lg leading-8 text-zinc-600"
            variants={teamHeaderItemVariants}
          >
            Hands‑on leaders who own sourcing, quality, and delivery from the
            first RFQ to dispatch.
          </motion.p>

          <motion.div variants={teamHeaderItemVariants}>
            <Link
              href="/team"
              className="hidden mt-8 md:inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            >
              Meet the Team
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        {/* --- Scrollable Right Column with Animation --- */}
        <div className="mt-16 space-y-16 lg:col-span-3 lg:mt-0">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-start gap-8 sm:flex-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={teamMemberVariants}
            >
              <div className="relative h-80 md:h-48 w-full md:w-48 flex-shrink-0 sm:h-64 sm:w-64">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  className="rounded-2xl object-cover"
                  fill
                  sizes="(max-width: 640px) 12rem, 16rem"
                />
              </div>
              <div className="flex-grow">
                <blockquote className="text-lg md:text-xl leading-8 text-zinc-800">
                  <p>"{member.quote}"</p>
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-bold text-zinc-900">{member.name}</div>
                  <div className="mt-1 text-zinc-600">{member.title}</div>
                </figcaption>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile CTA */}
      <Link
        href="/team"
        className="mt-16 w-full flex items-center justify-center md:hidden"
      >
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 text-zinc-50 font-medium rounded-full hover:bg-zinc-800 transition">
          Meet Our Team
        </button>
      </Link>
    </section>
  );
}
