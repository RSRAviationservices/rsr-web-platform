"use client";

import React, { useState } from "react";
import ProductFilters, { Filters } from "../components/ProductFilters";
import ProductList from "./ProductList";
import { Category } from "@/app/types/category";
import { PaginatedProducts } from "@/app/api/inventory/types";

interface ProductViewProps {
  category: Category;
  initialProducts: PaginatedProducts;
}

export default function ProductView({
  category,
  initialProducts,
}: ProductViewProps) {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    availability: "all",
    subcategories: [],
    brands: [],
    attributes: [],
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ProductFilters
        category={category}
        filters={filters}
        setFilters={setFilters}
      />
      <ProductList
        categorySlug={category.slug}
        initialProducts={initialProducts}
        filters={filters}
      />
    </div>
  );
}
