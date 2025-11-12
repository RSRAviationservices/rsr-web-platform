import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axiosClient, { ApiResponse } from "../axiosClient";
import { PaginatedProducts, Product } from "./types";
import { Filters } from "@/app/(routes)/products/components/ProductFilters";

/**
 * Client-side fetcher for paginated products. Now includes filters.
 */
const fetchProducts = async ({
  pageParam = 1,
  queryKey,
}: any): Promise<PaginatedProducts> => {
  const [, slug, filters] = queryKey as [string, string, Filters];

  const params = new URLSearchParams({
    category: slug,
    page: pageParam.toString(),
  });

  if (filters.search) {
    params.append("search", filters.search);
  }
  if (filters.availability && filters.availability !== "all") {
    params.append("availability", filters.availability);
  }
  if (filters.brands.length > 0) {
    params.append("brands", filters.brands.join(","));
  }
  if (filters.attributes.length > 0) {
    params.append("attributes", filters.attributes.join(","));
  }
  if (filters.subcategories.length > 0) {
    params.append("subcategories", filters.subcategories.join(","));
  }

  const { data: response } = await axiosClient.get<ApiResponse<Product[]>>(
    `/products?${params.toString()}`
  );

  return {
    data: response.data || [],
    meta: response.meta || { total: 0, page: 1, limit: 12, totalPages: 0 },
  };
};

/**
 * Hook for infinite scrolling of products within a category.
 */
export const useInfiniteProducts = (
  slug: string,
  initialData: PaginatedProducts,
  filters: Filters
) => {
  return useInfiniteQuery({
    queryKey: ["products", slug, filters],
    queryFn: fetchProducts,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage?.meta?.page;
      const totalPages = lastPage?.meta?.totalPages;
      if (
        typeof currentPage === "number" &&
        typeof totalPages === "number" &&
        currentPage < totalPages
      ) {
        return currentPage + 1;
      }
      return undefined;
    },
    initialData: {
      pages: [initialData],
      pageParams: [1],
    },
  });
};

/**
 * CLIENT-SIDE FETCHER for global product search.
 * It's now a helper function inside the hooks file.
 */
const searchProducts = async (query: string): Promise<PaginatedProducts> => {
  if (!query || query.length < 3) {
    return { data: [], meta: { total: 0, page: 1, limit: 5, totalPages: 0 } };
  }
  const { data: response } = await axiosClient.get<ApiResponse<Product[]>>(
    `/products/search?q=${query}&limit=5`
  );
  return {
    data: response.data || [],
    meta: response.meta || { total: 0, page: 1, limit: 5, totalPages: 0 },
  };
};

/**
 * Hook for the global predictive search.
 */
export const useProductSearch = (query: string) => {
  return useQuery({
    queryKey: ["productSearch", query],
    queryFn: () => searchProducts(query),
    enabled: query.length > 2,
    placeholderData: (previousData) => previousData,
  });
};
