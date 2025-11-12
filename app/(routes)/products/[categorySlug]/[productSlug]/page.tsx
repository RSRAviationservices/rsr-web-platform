import React from "react";
import { notFound } from "next/navigation";
import {
  getAllProductPaths,
  getCategoryBySlug,
  getProductBySlug,
} from "@/app/api/inventory/inventoryService";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductImageGallery from "../../components/ProductImageGallery";
import { ProductHeader } from "./components/ProductHeader";
import { SpecificationsTable } from "./components/SpecificationsTable";
import { DetailsAndCompliance } from "./components/DetailsAndCompliance";
import { QuoteSection } from "./components/QuoteSection";

export async function generateStaticParams() {
  const paths = await getAllProductPaths();
  return paths.map((p) => ({
    categorySlug: p.categorySlug,
    productSlug: p.slug,
  }));
}

interface ProductDetailsPageProps {
  params: { categorySlug: string; productSlug: string };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { categorySlug, productSlug } = params;

  const [product, category] = await Promise.all([
    getProductBySlug(productSlug),
    getCategoryBySlug(categorySlug),
  ]);

  if (!product || !category || product.categorySlug !== category.slug) {
    notFound();
  }

  return (
    <main className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: category.name, href: `/products/${category.slug}` },
            {
              label: product.name,
              href: `/products/${category.slug}/${product.slug}`,
            },
          ]}
        />
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductImageGallery
              productName={product.name}
              images={product.images}
            />
          </div>
          <div className="flex flex-col gap-y-10">
            <ProductHeader product={product} category={category} />
            <SpecificationsTable specifications={product.specifications} />
            <DetailsAndCompliance product={product} />
            <QuoteSection product={product} />
            <div>
              <h3 className="text-sm font-semibold text-zinc-600">
                Description
              </h3>
              <p className="mt-4 text-zinc-600">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
