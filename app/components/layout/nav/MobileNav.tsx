"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X, User, LogOut } from "lucide-react"; // Import new icons
import { Button } from "@/app/components/ui/button";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Logo from "@/app/components/ui/logo";
import { useLogout } from "@/app/api/auth/authHooks"; // Import the logout hook

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  links: NavLink[];
  pathname: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  closeMenu: () => void;
  cartItemsCount: number;
  onCartClick: () => void;
  isLoggedIn: boolean; // This prop is key
}

const menuVariants: Variants = {
  closed: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  open: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

export default function MobileNav({
  links,
  pathname,
  isOpen,
  setIsOpen,
  closeMenu,
  cartItemsCount,
  onCartClick,
  isLoggedIn, // Use the prop
}: MobileNavProps) {
  const logoutMutation = useLogout();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLogout = () => {
    closeMenu(); // Close the menu before logging out
    logoutMutation.mutate();
  };

  return (
    <div className="md:hidden flex w-full items-center justify-between">
      {/* --- Header Bar (No changes here) --- */}
      <div className="flex-shrink-0">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center space-x-2 group"
        >
          <Logo />
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <button
          onClick={onCartClick}
          className="relative rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100"
        >
          <ShoppingCart size={22} />
          {cartItemsCount > 0 && (
            <span className="absolute -right-1 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
              {cartItemsCount}
            </span>
          )}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 p-2 text-zinc-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Slide-out Menu Panel --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex h-screen flex-col bg-white py-2.5 px-4"
          >
            <nav className="mt-16 flex-1 p-2.5">
              <ul className="space-y-6 text-left">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block text-xl transition-colors ${
                          isActive
                            ? "font-bold text-zinc-900"
                            : "font-medium text-zinc-600 hover:text-zinc-900"
                        }`}
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* --- FIX: Conditionally Render Footer based on isLoggedIn --- */}
            <div className="mt-auto border-t border-zinc-200 pt-6">
              {isLoggedIn ? (
                <div className="space-y-2">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start py-6 text-base font-semibold"
                  >
                    <Link href="/profile" onClick={closeMenu}>
                      <User className="mr-2 h-5 w-5" />
                      My Profile
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start py-6 text-base font-semibold text-red-600 hover:text-red-600"
                    onClick={handleLogout}
                    disabled={logoutMutation.isPending}
                  >
                    <LogOut className="mr-2 h-5 w-5" />
                    {logoutMutation.isPending ? "Logging out..." : "Logout"}
                  </Button>
                </div>
              ) : (
                <Button
                  asChild
                  variant="default"
                  className="py-6 text-base font-semibold w-full"
                >
                  <Link href="/login" onClick={closeMenu}>
                    Login / Sign Up
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
