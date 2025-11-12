import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import UserProfile from "./UserProfile";
import Logo from "../../ui/logo";

interface NavLink {
  href: string;
  label: string;
}

interface DesktopNavProps {
  links: NavLink[];
  pathname: string;
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function DesktopNav({
  links,
  pathname,
  cartItemsCount,
  onCartClick,
}: DesktopNavProps) {
  return (
    <div className="hidden w-full md:flex md:items-center justify-between md:gap-x-8">
      <div className="flex-shrink-0">
        <Link href="/" className="flex items-center space-x-2 group">
          <Logo />
        </Link>
      </div>
      <div className="flex items-baseline space-x-4">
        {links.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(link.href + "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:text-zinc-950 group ${
                isActive ? "text-zinc-950 font-bold" : ""
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-zinc-800 transition-all duration-300 group-hover:w-full ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </Link>
          );
        })}
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={onCartClick}
          className="relative rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
        >
          <span className="sr-only">Quote Cart</span>
          <ShoppingCart size={20} />
          {cartItemsCount > 0 && (
            <span className="absolute -right-1 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/90 text-xs font-medium text-white">
              {cartItemsCount}
            </span>
          )}
        </button>
        <UserProfile />
        <Button asChild className="rounded-full font-semibold">
          <Link href="/contact-us">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
