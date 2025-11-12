"use client";

import React from "react";
import CategoryCard from "../components/CategoryCard";
import { ServerCrash } from "lucide-react";
import { Category } from "@/app/types/category";
import { GlobalProductSearch } from "../components/GlobalProductSearch";
interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="mx-auto max-w-7xl px-2.5 py-4 md:py-16 md:px-8">
      <div className="md:mx-auto max-w-2xl">
        <GlobalProductSearch />
      </div>
      {categories && categories.length > 0 ? (
        <div className="mt-6 md:mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <ServerCrash className="h-12 w-12 text-zinc-400" />
          <h3 className="mt-4 text-xl font-semibold text-zinc-800">
            Could Not Load Categories
          </h3>
          <p className="mt-2 text-zinc-500">
            There was an issue fetching the product categories. Please try again
            later.
          </p>
        </div>
      )}
    </div>
  );
}
