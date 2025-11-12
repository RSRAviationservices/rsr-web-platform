import React from "react";
import { Skeleton } from "@/app/components/ui/skeleton";

export function FeaturedPostSkeleton() {
  return (
    <article className="flex flex-col">
      <Skeleton className="mb-4 h-56 w-full rounded-lg sm:h-72 md:h-96" />
      <div className="flex items-center gap-4">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="mt-4 h-8 w-full" />
      <Skeleton className="mt-2 h-8 w-3/4" />
      <Skeleton className="mt-3 h-20 w-full" />
      <div className="mt-5 flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>
    </article>
  );
}

export function SidebarPostSkeleton() {
  return (
    <article className="grid grid-cols-3 gap-3">
      <Skeleton className="col-span-1 aspect-square w-full rounded-md" />
      <div className="col-span-2 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="mt-1 h-3 w-16" />
      </div>
    </article>
  );
}

export function PostCardSkeleton() {
  return (
    <article className="flex flex-col">
      <Skeleton className="mb-4 aspect-[16/10] w-full rounded-lg" />
      <div className="flex items-center gap-4">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="mt-3 h-6 w-full" />
      <Skeleton className="mt-2 h-6 w-2/3" />
      <div className="mt-4 flex items-center gap-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-24" />
      </div>
    </article>
  );
}
