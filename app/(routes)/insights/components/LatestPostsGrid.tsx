"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteInsights } from "@/app/api/insights/insightsHooks";
import { PostCard } from "./PostCard";
import { PostCardSkeleton } from "./InsightSkeleton";
import { Button } from "@/app/components/ui/button";
import { Loader2 } from "lucide-react";
import type { Insight } from "@/app/api/insights/types";

export function LatestPostsGrid({ initialPosts }: { initialPosts: Insight[] }) {
  const { ref, inView } = useInView();
  
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
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

  const allPosts = data?.pages.flatMap((page) => page.data) || initialPosts;

  if (isError) {
    return (
      <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center">
          <p className="text-zinc-600">Failed to load insights. Please try again later.</p>
        </div>
      </section>
    );
  }

  if (allPosts.length === 0 && !isLoading) {
    return (
      <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center">
          <p className="text-zinc-600">No insights available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tighter text-zinc-900">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        
        {/* Loading skeletons */}
        {isFetchingNextPage &&
          Array.from({ length: 3 }).map((_, i) => (
            <PostCardSkeleton key={`skeleton-${i}`} />
          ))}
      </div>

      {/* Intersection observer trigger */}
      {hasNextPage && (
        <div ref={ref} className="mt-12 flex justify-center">
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            variant="outline"
            size="lg"
          >
            {isFetchingNextPage ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Load More"
            )}
          </Button>
        </div>
      )}
    </section>
  );
}
