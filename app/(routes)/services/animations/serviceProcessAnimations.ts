import { Variants } from "framer-motion";

// ========================================
// SERVICE PROCESS SECTION ANIMATIONS
// ========================================

// Main section header fade + slide up
export const serviceSectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Left column container (staggered children)
export const serviceLeftColumnContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// Individual elements in left column
export const serviceLeftColumnItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Highlights list items
export const highlightItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Step card animation (fade + slide from left)
export const serviceStepCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Dot animation (scale + color change)
export const serviceDotVariants: Variants = {
  inactive: {
    scale: 1,
    backgroundColor: "transparent",
  },
  active: {
    scale: 1.2,
    backgroundColor: "#27272a", // zinc-800
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
