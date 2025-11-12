import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PostHeader } from "./components/PostHeader";
import { Block, PostContent } from "./components/PostContent";
import { RelatedInsights } from "./components/RelatedInsights";
import { insightsService } from "@/app/api/insights/insightsService";
import type { Metadata } from "next";

interface InsightDetailPageProps {
  params: { slug: string };
}

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

// Generate static paths for all insights at build time
export async function generateStaticParams() {
  try {
    const insightsData = await insightsService.getInsights({ limit: 100 });
    return insightsData.data.map((insight) => ({
      slug: insight.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: InsightDetailPageProps): Promise<Metadata> {
  try {
    const insight = await insightsService.getInsightBySlug(params.slug);

    return {
      title: insight.metaTitle || `${insight.title} - Insights | RSR Aviation`,
      description:
        insight.metaDescription ||
        insight.excerpt ||
        `Read ${insight.title} on RSR Aviation Insights.`,
      openGraph: {
        title: insight.metaTitle || insight.title,
        description: insight.metaDescription || insight.excerpt,
        images: [insight.ogImage || insight.coverImage],
        type: "article",
        publishedTime: insight.publishedAt,
        authors: [insight.author.name],
        tags: insight.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: insight.metaTitle || insight.title,
        description: insight.metaDescription || insight.excerpt,
        images: [insight.ogImage || insight.coverImage],
      },
    };
  } catch {
    return {
      title: "Insight Not Found - RSR Aviation",
      description: "The insight you're looking for could not be found.",
    };
  }
}

export default async function InsightDetailPage({
  params,
}: InsightDetailPageProps) {
  let insight;

  try {
    insight = await insightsService.getInsightBySlug(params.slug);
  } catch (error) {
    // If insight not found, show 404
    notFound();
  }

  // Fetch related insights
  let relatedInsights: string | any[] = [];
  try {
    relatedInsights = await insightsService.getRelatedInsights(params.slug, 3);
  } catch (error) {
    console.error("Error fetching related insights:", error);
  }

  return (
    <main className="bg-white text-zinc-900">
      <PostHeader insight={insight} />

      {/* Cover Image Section (Full Width) */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-96 lg:h-[500px]">
          <Image
            src={insight.coverImage}
            alt={insight.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Post Content Section (Centered, max-w-3xl) */}
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
        <PostContent content={insight.content as Block[]} />
      </div>

      {/* Related Insights Section */}
      {relatedInsights.length > 0 && (
        <RelatedInsights insights={relatedInsights} />
      )}
    </main>
  );
}
