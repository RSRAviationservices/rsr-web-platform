import { Product } from "@/app/types/category";

export type { Product } from "@/app/types/category";
export type { Category } from "@/app/types/category";

export interface PaginatedProducts {
  data: Product[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
