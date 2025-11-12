import { Variants } from "framer-motion";

// ========================================
// ORDERING PROCESS SECTION ANIMATIONS
// ========================================

// Left column container (staggered children)
export const leftColumnContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual elements in left column
export const leftColumnItemVariants: Variants = {
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

// Step card animation (fade + slide from left)
export const stepCardVariants: Variants = {
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
export const dotVariants: Variants = {
  inactive: {
    scale: 1,
    backgroundColor: "#e4e4e7", // zinc-200
  },
  active: {
    scale: 1.3,
    backgroundColor: "#27272a", // zinc-800
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
