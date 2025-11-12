import React from "react";
import { InsightsHeader } from "./components/InsightsHeader";
import { FeaturedPostCard } from "./components/FeaturedPostCard";
import { SidebarPostCard } from "./components/SidebarPostCard";
import { LatestPostsGrid } from "./components/LatestPostsGrid";
import { insightsService } from "@/app/api/insights/insightsService";
import type { Metadata } from "next";

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insights - RSR Aviation",
  description:
    "Stay updated with the latest insights, news, and articles from RSR Aviation on aviation industry trends, technology, and best practices.",
  openGraph: {
    title: "Insights - RSR Aviation",
    description:
      "Latest insights and articles from RSR Aviation on aviation industry trends.",
    type: "website",
  },
};

export default async function InsightsPage() {
  // Fetch insights server-side with ISR
  const insightsData = await insightsService.getInsights({
    limit: 20,
    sortBy: "publishedAt",
    sortOrder: "desc",
  });

  const featuredPost = insightsData.data[0];
  const sidebarPosts = insightsData.data.slice(1, 5);
  const latestPosts = insightsData.data.slice(1);

  return (
    <div className="bg-white text-zinc-900">
      <InsightsHeader />
      <section className="container mx-auto max-w-7xl px-4">
        {featuredPost && (
          <div className="grid grid-cols-1 gap-8 border-b border-zinc-200 pb-16 md:grid-cols-3 md:pb-24">
            <div className="md:col-span-2">
              <FeaturedPostCard post={featuredPost} />
            </div>
            <div className="space-y-6 md:col-span-1">
              {sidebarPosts.map((post) => (
                <SidebarPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}
      </section>
      <LatestPostsGrid initialPosts={latestPosts} />
    </div>
  );
}
