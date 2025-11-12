"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wrench,
  Cog,
  Droplets,
  Paintbrush,
  Spline,
  ArrowRight,
} from "lucide-react";
import ProductShowcaseCard from "../components/ProductShowcaseCard";
import {
  productsHeaderVariants,
  featuredCardsContainerVariants,
  standardCardsContainerVariants,
  productCardVariants,
  productsCTAVariants,
} from "../animations/productsShowcaseAnimations";

// --- Data ---
const productCategories = [
  {
    title: "Lubricants & Oils",
    types: 55,
    slug: "lubricants-oils",
    summary:
      "Powertrain and mechanism fluids engineered for reliability in extreme operating envelopes.",
    includes:
      "Greases, Hydraulic Fluids, Turbine Oils, Anti-Seize Compounds, Penetrating Oils, Dry Film Lubricants",
    cta: "Browse lubricants",
    icon: <Droplets size={20} />,
  },
  {
    title: "Rotables & Expendables",
    types: 120,
    slug: "rotables-expendables",
    summary:
      "Flight-line and depot essentials, from serviceable units to fast-moving replacements.",
    includes:
      "Rotables: Landing Gears, Actuators, Avionics · Expendables: Filters, Gaskets, O-rings, Lamps",
    cta: "Explore rotables",
    icon: <Cog size={20} />,
  },
  {
    title: "Sealants",
    types: 35,
    slug: "sealants",
    summary:
      "Structural and environmental sealing solutions for fuel systems and high-heat zones.",
    includes:
      "Fuel Tank, Firewall, Weather/Environmental, Windshield & Canopy, Access Door, RTV",
    cta: "See sealants",
    icon: <Wrench size={20} />,
  },
  {
    title: "Paints & Coatings",
    types: 68,
    slug: "paints-coatings",
    summary:
      "Protection and finishing systems for corrosion defense, thermal loads, and conductivity.",
    includes:
      "Primer Paints, Top Coats, Anti-Corrosion, Heat-Resistant, Conductive, Fuel-Resistant",
    cta: "View paints & coatings",
    icon: <Paintbrush size={20} />,
  },
  {
    title: "Tapes",
    types: 72,
    slug: "tapes",
    summary:
      "High-performance tapes for masking, bonding, insulation, and surface protection.",
    includes:
      "High-Temp Masking, Double-Sided, PTFE/Teflon, Electrical Insulating, Foil, Structural Bonding",
    cta: "Browse tapes",
    icon: <Spline size={20} />,
  },
];

const featureCards = productCategories.slice(0, 2);
const standardCards = productCategories.slice(2);

export default function ProductsShowcase() {
  return (
    <section className="w-full flex flex-col items-center bg-zinc-100 py-16 sm:py-24 text-zinc-900">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={productsHeaderVariants}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900">
          Precision Materials for Every Mission
        </h2>
        <p className="mt-4 text-lg text-zinc-600">
          A focused range of aerospace consumables covering fluids, structures,
          protection, and installations—documented, dependable, and ready to
          deploy.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Featured Cards (Row 1) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={featuredCardsContainerVariants}
        >
          {featureCards.map((card) => (
            <motion.div key={card.title} variants={productCardVariants}>
              <ProductShowcaseCard card={card} isFeatured />
            </motion.div>
          ))}
        </motion.div>

        {/* Standard Cards (Row 2) */}
        <motion.div
          className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 sm:[&>*:last-child]:col-span-2 md:[&>*:last-child]:col-span-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={standardCardsContainerVariants}
        >
          {standardCards.map((card) => (
            <motion.div key={card.title} variants={productCardVariants}>
              <ProductShowcaseCard card={card} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        className="mt-12 sm:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={productsCTAVariants}
      >
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors"
        >
          Explore All Categories <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}
