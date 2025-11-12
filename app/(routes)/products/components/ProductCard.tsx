"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/app/types/category";
import Link from "next/link";
import ProductQuoteCTA from "../[categorySlug]/[productSlug]/components/ProductQuoteCTA";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <Link
        href={`/products/${product.categorySlug}/${product.slug}`}
        className="group flex flex-col"
      >
        <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg bg-stone-100 p-8 ring-1 ring-zinc-200/50">
          {product.images && product.images.length > 0 ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300"
            />
          ) : (
            <Image
              src="/images/logo.png"
              alt={`${product.name} placeholder`}
              width={120}
              height={60}
              className="h-auto w-3/4 object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
            />
          )}
        </div>
        <div className="mt-4 flex flex-grow flex-col">
          <p className="text-xs font-semibold text-primary/90">{product.brand}</p>
          <h3 className="text-base font-bold text-zinc-900">{product.name}</h3>
          <p className="text-sm text-zinc-500">{product.partNumber}</p>

          {/* Render badges from the new data structure */}
          <div className="mt-3 flex flex-grow flex-wrap items-end gap-2">
            {product.storage.temperatureControlled && (
              <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800">
                Temp-Controlled
              </span>
            )}
            {product.storage.hazmat && (
              <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-800">
                Hazmat
              </span>
            )}
            {product.compliance.hasCoC && (
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                CoC
              </span>
            )}
            {product.compliance.militarySpec && (
              <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800">
                MIL-SPEC
              </span>
            )}
          </div>

          <p className="mt-2 text-sm font-medium text-green-700">
            {product.availability.status.replace("-", " ")}
          </p>
        </div>
      </Link>
      <div className="w-full mt-2.5 flex items-center justify-end">
        <ProductQuoteCTA product={product} />
      </div>
    </div>
  );
}
