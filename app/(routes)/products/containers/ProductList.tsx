"use client";

import { useInfiniteProducts } from "@/app/api/inventory/inventoryHooks";
import { PaginatedProducts } from "@/app/api/inventory/types";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Filters } from "../components/ProductFilters";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

interface ProductListProps {
  categorySlug: string;
  initialProducts: PaginatedProducts;
  filters: Filters;
}

export default function ProductList({
  categorySlug,
  initialProducts,
  filters,
}: ProductListProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteProducts(categorySlug, initialProducts, filters);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  const products = data?.pages.flatMap((page) => page?.data || []) ?? [];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {isFetchingNextPage &&
              [...Array(4)].map((_, i) => <ProductCardSkeleton key={`skeleton-${i}`} />)
            }
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-zinc-800">No Products Found</h3>
            <p className="text-zinc-500 mt-2">
              No products match the current filters. Try adjusting your search.
            </p>
          </div>
        )}
        {hasNextPage && !isFetchingNextPage && <div ref={ref} className="h-10" />}
        {!hasNextPage && products.length > 0 && (
          <div className="mt-12 text-center text-zinc-500">
            You've reached the end of the list.
          </div>
        )}
      </div>
    </section>
  );
}