import { Variants } from "framer-motion";

// ========================================
// TIMELINE SECTION ANIMATIONS
// ========================================

// Header fade + slide up
export const timelineHeaderVariants: Variants = {
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

// Connecting line wipe/draw animation
export const lineVariants: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Marker (dot/checkmark) pop animation
export const markerVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3, // After line draws
      ease: [0.34, 1.56, 0.64, 1] as const, // Spring-like ease
    },
  },
};

// Milestone content fade + slide from right
export const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.5, // After marker pops
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
