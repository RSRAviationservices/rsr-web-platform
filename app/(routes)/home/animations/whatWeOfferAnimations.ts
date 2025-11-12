import { Variants } from "framer-motion";

// ========================================
// WHAT WE OFFER SECTION ANIMATIONS
// ========================================

// Header fade in and slide up
export const offerHeaderVariants: Variants = {
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

// Container for staggered cards
export const offerCardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 0.2s delay between each card
      delayChildren: 0.3, // Start after header
    },
  },
};

// Individual card animation (fade + slide up)
export const offerCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// CTA button fade in
export const offerCTAVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.9, // Appears after cards finish animating
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
