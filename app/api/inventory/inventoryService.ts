// app/api/inventory/inventoryService.ts

import { ApiResponse } from "../axiosClient";
import { Category, PaginatedProducts, Product } from "./types";

// NOTE: No top-level const for API_URL to avoid confusion.

/**
 * SERVER-SIDE FETCHER for all product categories.
 * This is designed to be called from Server Components.
 */
export const getAllCategories = async (): Promise<Category[]> => {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) {
    return [];
  }
  try {
    const res = await fetch(`${apiUrl}/categories`, {
      next: { revalidate: 1800 }, // ISR: Cache for 1 hour.
      // cache: "no-store",
    });
    if (!res.ok) {
      return [];
    }
    const response: ApiResponse<Category[]> = await res.json();
    return response.data || [];
  } catch (error) {
    return [];
  }
};

/**
 * SERVER-SIDE FETCHER for products by category.
 */
export const getProductsByCategory = async (
  slug: string,
  page: number = 1,
  limit: number = 12
): Promise<PaginatedProducts> => {
  const apiUrl = process.env.API_URL;
  const defaultResponse = {
    data: [],
    meta: { total: 0, page: 1, limit, totalPages: 0 },
  };

  if (!apiUrl) return defaultResponse;

  try {
    const res = await fetch(
      `${apiUrl}/products?category=${slug}&page=${page}&limit=${limit}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      console.error("Failed to fetch products");
      return defaultResponse;
    }
    const response: ApiResponse<Product[]> = await res.json();
    return {
      data: response.data || [],
      meta: response.meta || { total: 0, page: 1, limit, totalPages: 0 },
    };
  } catch (error) {
    console.error("Error in getProductsByCategory:", error);
    return defaultResponse;
  }
};

/**
 * SERVER-SIDE FETCHER for a single product by slug.
 */
export const getProductBySlug = async (
  slug: string
): Promise<Product | null> => {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) return null;

  const res = await fetch(`${apiUrl}/products/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  const response: ApiResponse<Product> = await res.json();
  return response.data || null;
};

/**
 * SERVER-SIDE FETCHER for a single category by slug.
 */
export const getCategoryBySlug = async (
  slug: string
): Promise<Category | null> => {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) return null;

  const res = await fetch(`${apiUrl}/categories/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  const response: ApiResponse<Category> = await res.json();
  return response.data || null;
};

/**
 * SERVER-SIDE FETCHER for all product paths for static generation.
 */
export const getAllProductPaths = async (): Promise<
  { slug: string; categorySlug: string }[]
> => {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) return [];

  const res = await fetch(`${apiUrl}/products/static-paths`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  const response: ApiResponse<{ slug: string; categorySlug: string }[]> =
    await res.json();
  return response.data || [];
};