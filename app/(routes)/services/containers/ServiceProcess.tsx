"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import {
  ClipboardList,
  SearchCheck,
  PackageCheck,
  Truck,
  FlaskConical,
  TestTube,
  Paintbrush,
  SprayCan,
  CheckSquare,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import AnimatedServiceTimeline from "../components/AnimatedServiceTimeline";
import AnimatedServiceStep from "../components/AnimatedServiceStep";
import {
  serviceSectionHeaderVariants,
  serviceLeftColumnContainerVariants,
  serviceLeftColumnItemVariants,
  highlightItemVariants,
} from "../animations/serviceProcessAnimations";

const servicesData = [
  {
    eyebrow: "Trading — Precision Supply and Distribution",
    title: "OEM-Authentic Consumables",
    subtitle:
      "Full traceability and on-time delivery to production and maintenance schedules.",
    highlights: [
      "Authorized supplier selection with risk-aware allocation.",
      "AOG priority workflows for time-critical parts.",
      "Standard documentation pack: CoC, SDS/TDS, lot traceability.",
      "End-to-end visibility for inventory and shipments.",
    ],
    steps: [
      {
        title: "Requirement & Planning",
        description:
          "Capture specs, quantities, and delivery needs to trigger a compliant procurement cycle.",
        icon: <ClipboardList />,
      },
      {
        title: "Sourcing & Compliance",
        description:
          "Select authorized lines, verify certifications, and confirm availability with clear terms.",
        icon: <SearchCheck />,
      },
      {
        title: "Quality Control & Logistics",
        description:
          "Inspect, book secure transport, and ensure real-time visibility with track-and-trace.",
        icon: <ShieldCheck />,
      },
      {
        title: "Delivery & Support",
        description:
          "Dispatch on schedule, provide proof of delivery, and maintain post-delivery assistance.",
        icon: <Truck />,
      },
    ],
    bgColor: "bg-white",
  },
  {
    eyebrow: "Paint Manufacturing — Aerospace-Grade Formulations",
    title: "Custom Blends Under Strict QA",
    subtitle:
      "Produced to meet durability, adhesion, and environmental targets for aviation use.",
    highlights: [
      "Batch-level testing to aerospace acceptance criteria.",
      "Tight dispersion/milling control for consistent performance.",
      "Environmental and safety focus with monitored processes.",
      "Shelf-life protocols to preserve performance.",
    ],
    steps: [
      {
        title: "Raw Material Sourcing",
        description:
          "Specify resins, pigments, and solvents with supplier QA and incoming QC checks.",
        icon: <FlaskConical />,
      },
      {
        title: "Blending & Customization",
        description:
          "Control dispersion, milling, and mix ratios to hit target viscosity, color, and film build.",
        icon: <Paintbrush />,
      },
      {
        title: "Testing & Quality Control",
        description:
          "Validate adhesion, curing time, and chemical/UV resistance before release.",
        icon: <TestTube />,
      },
      {
        title: "Packaging & Shelf-Life Management",
        description:
          "Pack under controlled conditions with batch labels, storage guidance, and expiry tracking.",
        icon: <PackageCheck />,
      },
    ],
    bgColor: "bg-stone-50",
  },
  {
    eyebrow: "Paint Application — Certified Processes and Finishes",
    title: "Durable, Compliant Finishes",
    subtitle:
      "Professional prep, prime, and topcoat application under controlled conditions.",
    highlights: [
      "Environmental controls for temperature, humidity, and ventilation.",
      "Technique selection (HVLP/electrostatic) to meet targets.",
      "Rapid touch-up and repair protocols for corrosion protection.",
      "Complete process records for audits and airworthiness.",
    ],
    steps: [
      {
        title: "Surface Preparation",
        description:
          "Clean, degrease, and verify cleanliness to ensure adhesion on metals and composites.",
        icon: <Sparkles />,
      },
      {
        title: "Priming",
        description:
          "Apply corrosion-inhibiting primers selected for substrate and environment.",
        icon: <Paintbrush />,
      },
      {
        title: "Topcoat Application",
        description:
          "Use controlled spray techniques with humidity and temperature management.",
        icon: <SprayCan />,
      },
      {
        title: "Inspection & Handover",
        description:
          "Cure per specification, inspect film quality, and hand over compliance documentation.",
        icon: <CheckSquare />,
      },
    ],
    bgColor: "bg-white",
  },
];

interface ServiceProcessProps {
  service: (typeof servicesData)[0];
}

function ServiceProcess({ service }: ServiceProcessProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 50%"],
  });

  return (
    <section
      className={`w-full py-10 md:py-[10%] px-4 sm:px-6 lg:px-8 ${service.bgColor}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Animated Left Sticky Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={serviceLeftColumnContainerVariants}
        >
          <motion.p
            className="text-xs md:text-sm font-semibold uppercase tracking-wider text-zinc-600"
            variants={serviceLeftColumnItemVariants}
          >
            {service.eyebrow}
          </motion.p>

          <motion.h2
            className="mt-4 text-2xl md:text-4xl font-bold tracking-tight text-zinc-900"
            variants={serviceLeftColumnItemVariants}
          >
            {service.title}
          </motion.h2>

          <motion.p
            className="mt-4 text-base md:text-lg text-zinc-600"
            variants={serviceLeftColumnItemVariants}
          >
            {service.subtitle}
          </motion.p>

          <motion.h4
            className="mt-10 text-base font-semibold text-zinc-800"
            variants={serviceLeftColumnItemVariants}
          >
            Highlights:
          </motion.h4>

          <motion.ul
            role="list"
            className="mt-4 space-y-3"
            variants={serviceLeftColumnContainerVariants}
          >
            {service.highlights.map((highlight) => (
              <motion.li
                key={highlight}
                className="flex gap-x-3"
                variants={highlightItemVariants}
              >
                <ShieldCheck
                  className="mt-1 h-5 w-5 flex-none text-zinc-600"
                  aria-hidden="true"
                />
                <span className="text-zinc-700 text-sm md:text-base">
                  {highlight}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <div ref={timelineRef} className="relative">
          <AnimatedServiceTimeline
            stepsCount={service.steps.length}
            scrollProgress={scrollYProgress}
          />
          <div className="relative flex flex-col space-y-20">
            {service.steps.map((step, index) => (
              <AnimatedServiceStep
                key={step.title}
                step={step}
                index={index}
                isLast={index === service.steps.length - 1}
                bgColor={service.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesSection() {
  return (
    <div>
      {/* Main Section Header */}
      <motion.div
        className="bg-white text-center py-12 md:py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={serviceSectionHeaderVariants}
      >
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          What We Deliver
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base md:text-lg text-zinc-600">
          Integrated supply, controlled handling, and specialist coatings—each
          with a defined, audit-ready process from requirement to dispatch.
        </p>
      </motion.div>

      {/* Render Each Service with Animations */}
      {servicesData.map((service) => (
        <ServiceProcess key={service.eyebrow} service={service} />
      ))}
    </div>
  );
}
