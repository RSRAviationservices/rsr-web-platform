"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteInsights } from "@/app/api/insights/insightsHooks";
import { PostCard } from "./PostCard";
import { PostCardSkeleton } from "./InsightSkeleton";
import { Loader2 } from "lucide-react";
import type { Insight } from "@/app/api/insights/types";

interface LatestPostsGridProps {
  initialPosts: Insight[];
}

export function LatestPostsGrid({ initialPosts }: LatestPostsGridProps) {
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteInsights({
    limit: 9,
    sortBy: "publishedAt",
    sortOrder: "desc",
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const postsToRender = data?.pages.flatMap((page) => page.data) || initialPosts;

  if (isError) return null;

  if (postsToRender.length === 0) return null;

  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tighter text-zinc-900">
          Latest Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {postsToRender.map((post) => (
          <PostCard key={`${post.id}-${post.slug}`} post={post} />
        ))}

        {/* Loading Skeletons for Infinite Scroll */}
        {isFetchingNextPage &&
          Array.from({ length: 3 }).map((_, i) => (
            <PostCardSkeleton key={`skeleton-${i}`} />
          ))}
      </div>

      {/* Infinite Scroll Trigger */}
      <div ref={ref} className="mt-12 flex justify-center w-full h-10">
        {isFetchingNextPage && (
          <Loader2 className="h-6 w-6 animate-spin text-zinc-400" />
        )}
      </div>
    </section>
  );
}