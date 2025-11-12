import { Variants } from "framer-motion";

// ========================================
// SERVICES HEADER ANIMATIONS
// ========================================

// Text content container (staggered children)
export const headerContentContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3, // Small delay after page load
    },
  },
};

// Individual text elements fade + slide up
export const headerTextItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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
