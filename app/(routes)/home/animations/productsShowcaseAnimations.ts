import { Variants } from "framer-motion";

// ========================================
// PRODUCTS SHOWCASE SECTION ANIMATIONS
// ========================================

// Header fade in and slide up
export const productsHeaderVariants: Variants = {
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

// Container for featured cards (row 1)
export const featuredCardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Small delay between the 2 feature cards
      delayChildren: 0.2, // Start after header
    },
  },
};

// Container for standard cards (row 2)
export const standardCardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Small delay between the 3 standard cards
      delayChildren: 0.4, // Start after featured cards
    },
  },
};

// Individual product card animation
export const productCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// CTA button fade in
export const productsCTAVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.9, // Appears after all cards
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
