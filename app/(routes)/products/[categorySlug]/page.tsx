import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  getProductsByCategory,
  getCategoryBySlug,
  getAllCategories,
} from "@/app/api/inventory/inventoryService";
import ProductView from "../containers/ProductView";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { PackageX } from "lucide-react";

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    categorySlug: category.slug,
  }));
}

interface CategoryPageProps {
  params: Promise<{ categorySlug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;

  const [category, initialProducts] = await Promise.all([
    getCategoryBySlug(categorySlug),
    getProductsByCategory(categorySlug),
  ]);

  if (!category) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-zinc-100 p-6">
            <PackageX className="h-12 w-12 text-zinc-400" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900">
            Category Not Found
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            We couldn't find the category you're looking for. It might have been moved or deleted.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 pt-4 md:pt-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: category.name, href: `/products/${category.slug}` },
          ]}
        />
        <div className="hidden md:block pt-8 pb-12 border-b border-zinc-200">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            {category.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600">
            {category.description}
          </p>
        </div>
      </div>
      <ProductView category={category} initialProducts={initialProducts} />
    </main>
  );
}
