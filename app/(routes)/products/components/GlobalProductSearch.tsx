"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Loader2 } from "lucide-react";
import { useDebounce } from "use-debounce";
import { useProductSearch } from "@/app/api/inventory/inventoryHooks";

interface GlobalProductSearchProps {
  // Callback to update parent filter state if needed
  onSearchChange?: (value: string) => void;
  initialValue?: string;
}

export function GlobalProductSearch({
  onSearchChange,
  initialValue = "",
}: GlobalProductSearchProps) {
  const [query, setQuery] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const [debouncedQuery] = useDebounce(query, 300);
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const { data: searchResults, isLoading } = useProductSearch(debouncedQuery);
  const products = searchResults?.data || [];

  useEffect(() => {
    setQuery("");
    setIsFocused(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const showResults = isFocused && query.length > 2;

  return (
    <div className="relative flex-grow" ref={searchRef}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
      <input
        type="search"
        placeholder="Search by part number, keyword, or brand"
        className="w-full rounded-md md:rounded-full border border-zinc-300 py-3 pl-12 pr-4 text-zinc-900 md:shadow-sm focus:border-blue-500 focus:ring-blue-500"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
      />

      {showResults && (
        <div className="absolute top-full mt-2 w-full rounded-md border bg-white shadow-lg z-10 max-h-80 overflow-y-auto">
          {isLoading && (
            <div className="p-4 flex items-center justify-center text-zinc-500">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Searching...
            </div>
          )}
          {!isLoading && products.length === 0 && (
            <div className="p-4 text-center text-zinc-500">
              No products found.
            </div>
          )}
          {!isLoading && products.length > 0 && (
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.categorySlug}/${product.slug}`}
                    className="block p-4 hover:bg-zinc-50 border-b last:border-b-0"
                  >
                    <p className="font-semibold text-zinc-800">
                      {product.name}
                    </p>
                    <p className="text-sm text-zinc-500">
                      {product.partNumber}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
