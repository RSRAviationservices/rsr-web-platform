import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  card: {
    title: string;
    types: number;
    slug: string;
    summary: string;
    includes: string;
    cta: string;
    icon: React.ReactNode;
  };
  isFeatured?: boolean;
}

export default function ProductShowcaseCard({
  card,
  isFeatured = false,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${card.slug}`}
      className="group block rounded-xl bg-white border border-zinc-200 transition-all duration-300 hover:ring-2 hover:ring-primary/80"
    >
      {/* --- Desktop View: Detailed Card --- */}
      <div className="hidden p-8 md:block">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 border border-zinc-200 mb-6 text-zinc-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
          {card.icon}
        </div>
        <h3
          className={
            isFeatured ? "text-xl font-semibold" : "text-lg font-semibold"
          }
        >
          {card.title}
          <span
            className={
              isFeatured ? "text-zinc-500 text-base" : "text-zinc-500 text-sm"
            }
          >
            — {card.types} Products
          </span>
        </h3>
        <p className="text-zinc-600 mt-3">{card.summary}</p>
        <p className="text-sm text-zinc-500 mt-2">{card.includes}</p>
        <div className="mt-6 text-primary font-semibold text-sm inline-flex items-center gap-1">
          {card.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* --- Mobile View: Simple Card --- */}
      <div className="flex items-center gap-4 p-4 md:hidden">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-600">
          {card.icon}
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900">{card.title}</h3>
          <p className="text-sm text-zinc-500">{card.types} Products</p>
        </div>
      </div>
    </Link>
  );
}
