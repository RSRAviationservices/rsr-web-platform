import React from "react";
import Image from "next/image";

export default function ProductHeader() {
  return (
    <div className="relative flex h-[44vh] items-center justify-center text-white">
      {/* Background Image with Dark Overlay */}
      <Image
        src="/images/products.png" // Using a relevant image from your project
        alt="Aerospace materials and components"
        fill
        className="object-contain"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Centered Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="text-base font-semibold uppercase tracking-wider text-zinc-300">
          Products
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Aerospace-Grade Materials Catalog
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-200">
          Browse consumables with complete specs, compliance docs, and
          traceability—add to quote cart for instant RFQ with documentation and
          SLAs.
        </p>
      </div>
    </div>
  );
}
