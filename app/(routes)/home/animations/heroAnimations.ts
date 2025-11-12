import { Variants } from "framer-motion";

// Container for staggered children
export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Fade in and slide up animation
export const heroFadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Scroll indicator fade in
export const heroScrollIndicatorVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 1,
    },
  },
};

// Bouncing animation for scroll indicator
export const heroScrollBounceAnimation = {
  animate: {
    y: [0, 8, 0],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};
