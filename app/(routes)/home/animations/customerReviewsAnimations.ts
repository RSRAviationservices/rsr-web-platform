import { Variants } from "framer-motion";

// ========================================
// CUSTOMER REVIEWS SECTION ANIMATIONS
// ========================================

// Header fade in and slide up
export const reviewsHeaderVariants: Variants = {
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

// Marquee container fade in
export const reviewsMarqueeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.3, // Slight delay after header
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
