"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "@/app/components/common/Marquee";
import AnimatedMetricCard from "../components/AnimatedMetricCard";
import {
  metricsHeaderVariants,
  metricsContainerVariants,
  distributorsHeaderVariants,
  blendingPartnerVariants,
  dividerVariants,
  partnerSectionVariants,
  partnerTitleVariants,
  partnerGridVariants,
  partnerLogoVariants,
  clientsTitleVariants,
  marqueeContainerVariants,
} from "../animations/metricsAnimations";

const blendingPartners = [
  {
    src: "/images/home/distributors/blending-partner.png",
    label: "Blending Partner",
    href: "https://3chem.com",
  },
];

const officialDistributors = [
  {
    src: "/images/home/distributors/official-distributors1.png",
    label: "Official Distributor",
    href: "https://sandstromproducts.com/",
  },
  {
    src: "/images/home/distributors/official-distributors2.png",
    label: "Official Distributor",
    href: "https://industrial.sherwin-williams.com/na/us/en/home.html",
  },
  {
    src: "/images/home/distributors/official-distributors3.png",
    label: "Official Distributor",
    href: "https://www.tesa.com/en",
  },
  {
    src: "/images/home/distributors/official-distributors4.png",
    label: "Official Distributor",
    href: "http://www.grm-systems.cz/en/about-us",
  },
];

const majorStockHolders = [
  {
    src: "/images/home/distributors/major-stock-holder1.png",
    label: "Major Stock Holder",
  },
  {
    src: "/images/home/distributors/major-stock-holder2.png",
    label: "Major Stock Holder",
  },
  {
    src: "/images/home/distributors/major-stock-holder3.png",
    label: "Major Stock Holder",
  },
  {
    src: "/images/home/distributors/major-stock-holder4.png",
    label: "Major Stock Holder",
  },
];

const clients = Array.from({ length: 49 }, (_, i) => ({
  src: `/images/home/clients/clients${i + 1}.png`,
}));

const PartnerLogo = ({
  src,
  label,
  href,
}: {
  src: string;
  label: string;
  href?: string;
}) => {
  const content = (
    <motion.div
      className="relative group p-4  aspect-square flex items-center justify-center rounded-lg overflow-hidden h-48 w-full"
      variants={partnerLogoVariants}
    >
      <Image
        src={src}
        alt={label}
        width={200}
        height={200}
        className="object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
      />
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default function MetricsAndPartnerSection() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* --- Metrics Section --- */}
      <section className="w-full max-w-7xl px-4 sm:px-6 md:px-8 py-16 md:py-[10%]">
        <div className="flex flex-col items-center gap-y-16 sm:gap-y-24">
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={metricsHeaderVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Trusted by Aerospace Leaders
            </h2>
            <p className="mt-4 text-base md:text-lg text-zinc-600">
              From commercial fleets to MROs and defense programs, our
              reliability is measured in outcomes and relationships built over
              time.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-y-12 text-center md:grid-cols-3 md:gap-x-8 md:text-left w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={metricsContainerVariants}
          >
            <AnimatedMetricCard
              numericValue={99.8}
              suffix="%"
              value="99.8%"
              description="On-time delivery performance that keeps production schedules on track."
            />
            <AnimatedMetricCard
              numericValue={4}
              prefix="<"
              suffix=" hrs"
              value="<4 hrs"
              description="AOG response window for emergency fulfillment, helping grounded aircraft return to service faster."
            />
            <AnimatedMetricCard
              numericValue={10000}
              suffix=" sq ft"
              value="10,000 sq ft"
              description="Modern warehousing with 1,500L temperature-controlled storage for sensitive materials."
            />
          </motion.div>
        </div>
      </section>

      {/* --- Distributors Section --- */}
      <section className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={distributorsHeaderVariants}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Partnerships That Power Progress
            </h2>
            <p className="mt-4 max-w-3xl text-base md:text-lg text-zinc-600">
              We collaborate with leading distributors, blending partners, and
              stock holders worldwide to ensure trusted access to critical
              aerospace materials.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 w-full max-w-xs sm:max-w-sm"
            variants={blendingPartnerVariants}
          >
            {blendingPartners.map((partner, idx) => (
              <PartnerLogo
                key={idx}
                src={partner.src}
                label={partner.label}
                href={partner.href}
              />
            ))}
          </motion.div>

          <motion.div
            className="my-8 h-12 w-px bg-zinc-200"
            variants={dividerVariants}
          />

          <motion.div
            className="w-full"
            variants={partnerSectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-lg font-semibold text-zinc-800"
              variants={partnerTitleVariants}
            >
              Official Distributors
            </motion.h3>
            <motion.div
              className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={partnerGridVariants}
            >
              {officialDistributors.map((partner, idx) => (
                <PartnerLogo
                  key={idx}
                  src={partner.src}
                  label={partner.label}
                  href={partner.href}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="my-8 h-12 w-px bg-zinc-200"
            variants={dividerVariants}
          />

          <motion.div
            className="w-full"
            variants={partnerSectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-lg font-semibold text-zinc-800"
              variants={partnerTitleVariants}
            >
              Major Stock Holders
            </motion.h3>
            <motion.div
              className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={partnerGridVariants}
            >
              {majorStockHolders.map((partner, idx) => (
                <PartnerLogo
                  key={idx}
                  src={partner.src}
                  label={partner.label}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- Clients Marquee Section --- */}
      <section className="w-full md:w-[70%] py-16 sm:py-24">
        <div className="flex flex-col items-center">
          <motion.p
            className="font-semibold text-base text-zinc-800 mb-8 px-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={clientsTitleVariants}
          >
            Companies We're Proud to Work With
          </motion.p>
          <motion.div
            className="w-full [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={marqueeContainerVariants}
          >
            <Marquee baseVelocity={-0.65}>
              {clients.map((client, idx) => (
                <div
                  key={idx}
                  className="flex min-w-[150px] items-center justify-center"
                >
                  <Image
                    src={client.src}
                    alt={`Client ${idx + 1}`}
                    width={120}
                    height={60}
                    className="object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
