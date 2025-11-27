import React from "react";
import { Skeleton } from "@/app/components/ui/skeleton";

export function PostCardSkeleton() {
  return (
    <div className="flex flex-col space-y-4">
      <Skeleton className="aspect-[16/10] w-full rounded-lg" />
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-20" /> {/* Badge */}
          <Skeleton className="h-4 w-24" /> {/* Date */}
        </div>
        <Skeleton className="h-6 w-full" /> {/* Title Line 1 */}
        <Skeleton className="h-6 w-2/3" />  {/* Title Line 2 */}
        <div className="flex items-center gap-3 pt-2">
          <Skeleton className="h-8 w-8 rounded-full" /> {/* Avatar */}
          <Skeleton className="h-4 w-24" /> {/* Author Name */}
        </div>
      </div>
    </div>
  );
}

export function FeaturedPostSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8 space-y-4">
        <Skeleton className="aspect-video w-full rounded-lg" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="lg:col-span-4 space-y-6">
        <Skeleton className="h-6 w-32" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="h-20 w-20 rounded-md" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}