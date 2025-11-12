import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Layers,
  Droplets,
  Scissors,
  Film,
  GanttChartSquare,
  Package,
  Wrench,
  Paintbrush,
  FlaskConical,
  Grip,
  Flame,
} from "lucide-react";
import { Category } from "@/app/types/category";

interface CategoryCardProps {
  category: Category;
}

const iconMap: { [key: string]: React.ElementType } = {
  adhesives: Grip,
  sealants: Layers,
  "lubricants-oils": Droplets,
  "paints-coatings": Paintbrush,
  tapes: Scissors,
  "chemicals-cleaners": FlaskConical,
  "rotables-expendables": GanttChartSquare,
  hardware: Wrench,
  "shop-consumables": Package,
  "adhesive-films": Film,
  threadlockers: Flame,
  "mold-release-agents": Layers,
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = iconMap[category.slug] || Layers;

  const formatSubTypes = (slugs: string[]) => {
    return slugs
      .map((slug) =>
        slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
      )
      .join(" · ");
  };

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex flex-col justify-between rounded-2xl bg-white p-4 text-left ring-1 ring-zinc-200 transition-all hover:shadow-xl sm:p-8"
    >
      <div className="flex flex-col items-center text-center sm:hidden">
        <div className="rounded-lg bg-zinc-100 p-3 w-fit text-zinc-700">
          <IconComponent size={24} />
        </div>
        <h3 className="mt-4 font-bold text-zinc-900">{category.name}</h3>
        <p className="text-sm text-zinc-500">
          {category.productCount} Products
        </p>
      </div>

      <div className="hidden sm:block">
        <div>
          <div className="mb-6 rounded-lg bg-zinc-100 p-3 w-fit text-zinc-700 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
            <IconComponent size={28} />
          </div>
          <h3 className="text-xl font-bold text-zinc-900">
            {category.name}
            <span className="text-base font-medium text-zinc-500">
              — {category.productCount} Products
            </span>
          </h3>
          <p className="mt-2 text-zinc-600">{category.description}</p>
          <p className="mt-4 text-xs text-zinc-500">
            {formatSubTypes(category.subcategorySlugs)}
          </p>
        </div>
        <div className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
          Explore Category
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
