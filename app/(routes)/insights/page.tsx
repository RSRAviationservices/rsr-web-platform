import React from "react";
import { InsightsHeader } from "./components/InsightsHeader";
import { SingleHeroLayout } from "./components/layouts/SingleHeroLayout";
import BentoGridLayout from "./components/layouts/BentoGridLayout";
import { MagazineLayout } from "./components/layouts/MagazineLayout";
import EmptyState from "./components/EmptyState";
import { insightsService } from "@/app/api/insights/insightsService";
import type { Metadata } from "next";

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export const metadata: Metadata = {
  title: "Insights - RSR Aviation",
  description: "Aviation industry trends, product updates, and RSR company news.",
};

export default async function InsightsPage() {
  let insightsData;
  let isError = false;

  // 1. Fetch Data with Error Handling
  try {
    insightsData = await insightsService.getInsights({
      limit: 12, // Fetch slightly more to populate the grid initially
      sortBy: "publishedAt",
      sortOrder: "desc",
    });
  } catch (error) {
    console.error("Failed to fetch insights:", error);
    isError = true;
  }

  const posts = insightsData?.data || [];
  const count = posts.length;

  // 2. Error State
  if (isError) {
    return (
      <div className="bg-white min-h-screen">
        <InsightsHeader />
        <main className="container mx-auto max-w-7xl px-4">
          <EmptyState error />
        </main>
      </div>
    );
  }

  // 3. Render Logic based on Count
  return (
    <div className="bg-white min-h-screen text-zinc-900 pb-20">
      <InsightsHeader />

      <main className="container mx-auto max-w-7xl px-4">
        {/* SCENARIO A: No Content (0) */}
        {count === 0 && <EmptyState />}

        {/* SCENARIO B: Focus Mode (1) */}
        {count === 1 && <SingleHeroLayout post={posts[0]} />}

        {/* SCENARIO C: Bento Grid (2-4) */}
        {count > 1 && count < 5 && <BentoGridLayout posts={posts} />}

        {/* SCENARIO D: Magazine Layout (5+) */}
        {count >= 5 && <MagazineLayout posts={posts} />}
      </main>
    </div>
  );
}