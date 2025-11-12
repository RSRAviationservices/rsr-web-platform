import React from "react";
import { PostCard } from "../../components/PostCard";
import type { Insight } from "@/app/api/insights/types";

interface RelatedInsightsProps {
  insights: Insight[];
}

export function RelatedInsights({ insights }: RelatedInsightsProps) {
  if (insights.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tighter text-zinc-900">
        Continue reading
      </h2>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => (
          <PostCard key={insight.slug} post={insight} />
        ))}
      </div>
    </section>
  );
}
