"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Search } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { Category } from "@/app/types/category";
import { FilterPopover } from "./filters/FilterPopover";
import { AppliedFilters } from "./filters/AppliedFilters";
import { GlobalProductSearch } from "./GlobalProductSearch";

// Define the shape of our filters state
export interface Filters {
  search: string;
  availability: string;
  subcategories: string[];
  brands: string[];
  attributes: string[];
}

interface ProductFiltersProps {
  category: Category;
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

export default function ProductFilters({
  category,
  filters,
  setFilters,
}: ProductFiltersProps) {
  const handleSearchChange = useDebouncedCallback((value: string) => {
    setFilters((prev) => ({ ...prev, search: value, page: 1 }));
  }, 500);

  const handleRadioChange = (value: string) => {
    setFilters((prev) => ({ ...prev, availability: value, page: 1 }));
  };

  const handleCheckboxChange = (filterCat: keyof Filters, value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      page: 1,
      [filterCat]: prev[filterCat].includes(value)
        ? prev[filterCat].filter((item: string) => item !== value)
        : [...prev[filterCat], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      availability: "all",
      subcategories: [],
      brands: [],
      attributes: [],
    });
    const searchInput = document.getElementById(
      "product-search"
    ) as HTMLInputElement;
    if (searchInput) searchInput.value = "";
  };

  const activeFilterCount =
    (filters.availability !== "all" ? 1 : 0) +
    filters.subcategories.length +
    filters.brands.length +
    filters.attributes.length;

  return (
    <div className="sticky top-[65px] z-20 border-b border-zinc-200 bg-white/75 py-4 backdrop-blur-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <GlobalProductSearch
          onSearchChange={handleSearchChange}
          initialValue={filters.search}
        />
        <div className="flex items-center gap-4">
          <FilterPopover
            activeFilterCount={activeFilterCount}
            filters={filters}
            subcategorySlugs={category.subcategorySlugs}
            onRadioChange={handleRadioChange}
            onCheckboxChange={handleCheckboxChange}
            onClear={clearFilters}
          />
        </div>
      </div>
      <AppliedFilters
        filters={filters}
        activeFilterCount={activeFilterCount}
        onRadioChange={handleRadioChange}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}
