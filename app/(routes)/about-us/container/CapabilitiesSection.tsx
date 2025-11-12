"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  Beaker,
  Zap,
  Globe,
  Thermometer,
  ShieldAlert,
  Users,
} from "lucide-react";
import {
  capabilitiesHeaderVariants,
  capabilitiesContainerVariants,
  capabilityItemVariants,
} from "../animations/capabilitiesAnimations";

const capabilities = [
  {
    name: "10,000 sq ft Facility",
    description:
      "Climate-controlled zones and hazmat-certified storage in Navi Mumbai.",
    icon: <Building />,
  },
  {
    name: "1,500L Cold Storage",
    description:
      "For adhesives, sealants, and other temperature-sensitive materials.",
    icon: <Thermometer />,
  },
  {
    name: "Authorized Partnerships",
    description:
      "Including exclusive distributor status for composite materials across India.",
    icon: <Users />,
  },
  {
    name: "AOG Priority Response",
    description:
      "Same-day dispatch capability for time-critical aircraft grounding situations.",
    icon: <Zap />,
  },
  {
    name: "Global Sourcing Network",
    description:
      "Spanning North America, Europe, and Asia with verified supplier credentials.",
    icon: <Globe />,
  },
  {
    name: "APU MRO Capabilities",
    description:
      "Partnership with Alpha Aircraft Systems to serve India's aerospace sector.",
    icon: <ShieldAlert />,
  },
];

export default function CapabilitiesSection() {
  return (
    <div className="bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={capabilitiesHeaderVariants}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Our Capabilities Today
          </h2>
        </motion.div>

        {/* Animated Capabilities Grid */}
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={capabilitiesContainerVariants}
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.name}
              className="flex items-start gap-x-4"
              variants={capabilityItemVariants}
            >
              <div className="flex-shrink-0 rounded-lg bg-blue-100 p-3">
                {React.cloneElement(
                  cap.icon as React.ReactElement<{ className?: string }>,
                  {
                    className: "h-6 w-6 text-blue-700",
                  }
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {cap.name}
                </h3>
                <p className="mt-1 text-zinc-600">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
