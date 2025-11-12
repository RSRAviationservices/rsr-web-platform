"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/app/store/useCartStore";
import { useCurrentUser } from "@/app/api/auth/authHooks";
import { useCart } from "@/app/api/cart/cartHooks";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { items, toggleCart } = useCartStore();

  const { data: currentUser } = useCurrentUser();
  const { refetch: fetchCart } = useCart();
  const isLoggedIn = !!currentUser?.data;

  useEffect(() => {
    if (currentUser?.data) {
      fetchCart();
    }
  }, [currentUser, fetchCart]);

  const desktopLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/careers", label: "Careers" },
    { href: "/insights", label: "Insights" },
    { href: "/about-us", label: "About Us" },
  ];

  const mobileLinks = [...desktopLinks, { href: "/contact-us", label: "Contact Us" }];

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white sticky top-0 z-[100] w-full border-b border-zinc-200/75">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex w-full h-16 items-center justify-between">
          <DesktopNav
            links={desktopLinks}
            pathname={pathname}
            cartItemsCount={items.length}
            onCartClick={toggleCart}
          />
          <MobileNav
            links={mobileLinks}
            pathname={pathname}
            isOpen={isMenuOpen}
            setIsOpen={setIsMenuOpen}
            closeMenu={closeMobileMenu}
            cartItemsCount={items.length}
            onCartClick={toggleCart}
            isLoggedIn={isLoggedIn}
          />
        </div>
      </div>
    </nav>
  );
}