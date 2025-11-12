import { Product } from "@/app/types/category";
import ProductQuoteCTA from "./ProductQuoteCTA";
import { AvailabilityBadge } from "./AvailabilityBadge";

interface QuoteSectionProps {
  product: Product;
}

export function QuoteSection({ product }: QuoteSectionProps) {
  return (
    <div className="rounded-lg bg-stone-50 p-4 ring-1 ring-zinc-200/50">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <AvailabilityBadge status={product.availability.status} />
          {product.availability.leadTime && (
            <p className="mt-1 text-xs text-zinc-500">
              Lead Time: {product.availability.leadTime}
            </p>
          )}
        </div>
        <ProductQuoteCTA product={product} />
      </div>
    </div>
  );
}
