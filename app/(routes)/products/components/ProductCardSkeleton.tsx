import { Skeleton } from "@/app/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col">
      {/* Image Placeholder */}
      <Skeleton className="h-48 w-full rounded-lg" />
      <div className="mt-4 flex flex-grow flex-col">
        {/* Brand Placeholder */}
        <Skeleton className="h-3 w-1/4" />
        {/* Name Placeholder */}
        <Skeleton className="mt-2 h-5 w-full" />
        {/* Part Number Placeholder */}
        <Skeleton className="mt-1 h-4 w-1/2" />

        {/* Badges Placeholder */}
        <div className="mt-3 flex flex-grow flex-wrap items-end gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>

        {/* Availability Placeholder */}
        <Skeleton className="mt-2 h-4 w-1/3" />
      </div>
      {/* Button Placeholder */}
      <Skeleton className="mt-2.5 h-10 w-full" />
    </div>
  );
}
