"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import {
  directors,
  vps,
  generalManagers,
  leadsAndSpecialists,
  TeamMember,
} from "../data/teams-data";
import {
  sectionHeaderVariants,
  cardsContainerVariants,
  cardVariants,
  dividerLineVariants,
  dividerDotVariants,
  focusItemsContainerVariants,
  focusItemVariants,
} from "../animations/leadershipAnimations";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => (
  <motion.div
    className="rounded-2xl bg-stone-50 p-6 ring-1 ring-zinc-200 h-full"
    variants={cardVariants}
  >
    <div className="flex items-center gap-6">
      <div className="relative h-20 w-20 flex-shrink-0">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          className="rounded-full object-cover"
          fill
          sizes="5rem"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold text-zinc-900">{member.name}</h3>
        <p className="text-zinc-700">{member.title}</p>
      </div>
    </div>
    {member.bio && (
      <>
        <p className="mt-4 text-zinc-600">{member.bio}</p>
        <motion.ul
          className="mt-4 space-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={focusItemsContainerVariants}
        >
          {member.focus?.map((item: string) => (
            <motion.li
              key={item}
              className="flex items-start gap-x-2"
              variants={focusItemVariants}
            >
              <CheckCircle2
                className="mt-1 h-4 w-4 flex-none text-zinc-600"
                aria-hidden="true"
              />
              <span className="text-sm text-zinc-700">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </>
    )}
  </motion.div>
);

const SectionDivider = () => (
  <motion.div
    className="my-12 flex justify-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <motion.div
      className="relative h-16 w-px bg-zinc-300"
      variants={dividerLineVariants}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-400"
        variants={dividerDotVariants}
      />
    </motion.div>
  </motion.div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <motion.div
    className="mx-auto max-w-2xl lg:mx-0"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={sectionHeaderVariants}
  >
    <h2 className="text-2xl md:text-3xl text-center md:text-left font-bold tracking-tight text-zinc-900">
      {title}
    </h2>
  </motion.div>
);

export default function LeadershipSection() {
  return (
    <div className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* --- Directors --- */}
        <SectionHeader title="Directors" />
        <motion.div
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardsContainerVariants}
        >
          {directors.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </motion.div>

        <SectionDivider />

        {/* --- Vice Presidents --- */}
        <SectionHeader title="Vice Presidents" />
        <motion.div
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardsContainerVariants}
        >
          {vps.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </motion.div>

        <SectionDivider />

        {/* --- General Managers --- */}
        <SectionHeader title="General Managers" />
        <motion.div
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardsContainerVariants}
        >
          {generalManagers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </motion.div>

        <SectionDivider />

        {/* --- Leads & BDM --- */}
        <SectionHeader title="Leads & Business Development" />
        <motion.div
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardsContainerVariants}
        >
          {leadsAndSpecialists.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
