"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

interface ProductImageGalleryProps {
  productName: string;
  images: string[];
}

export default function ProductImageGallery({
  productName,
  images,
}: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageList = images.length > 0 ? images : ["/images/logo.png"];
  const isLogo = images.length === 0;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex items-center justify-center aspect-square w-full overflow-hidden rounded-lg bg-stone-100 ring-1 ring-zinc-200/50">
        <Image
          src={imageList[activeIndex]}
          alt={`${productName} image ${activeIndex + 1}`}
          fill={!isLogo}
          width={isLogo ? 200 : undefined}
          height={isLogo ? 100 : undefined}
          className={cn(
            "transition-opacity duration-300",
            isLogo ? "grayscale object-contain w-2/3 h-auto" : "object-cover"
          )}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {imageList.length > 1 && (
        <div className="grid grid-cols-5 gap-4">
          {imageList.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative aspect-square w-full overflow-hidden rounded-md transition",
                "ring-2 ring-offset-2",
                activeIndex === index
                  ? "ring-blue-500"
                  : "ring-transparent hover:ring-blue-300"
              )}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}