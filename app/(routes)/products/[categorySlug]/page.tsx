import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  getProductsByCategory,
  getCategoryBySlug,
  getAllCategories,
} from "@/app/api/inventory/inventoryService";
import ProductView from "../containers/ProductView";

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    categorySlug: category.slug,
  }));
}

interface CategoryPageProps {
  params: { categorySlug: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = params;

  const [category, initialProducts] = await Promise.all([
    getCategoryBySlug(categorySlug),
    getProductsByCategory(categorySlug),
  ]);

  if (!category) {
    return <div>Category not found.</div>;
  }

  return (
    <main className="bg-white">
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
