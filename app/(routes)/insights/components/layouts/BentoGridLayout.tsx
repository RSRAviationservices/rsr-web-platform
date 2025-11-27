import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/app/components/ui/badge";
import { cn } from "@/app/lib/utils";
import type { Insight } from "@/app/api/insights/types";

interface BentoProps {
    posts: Insight[];
}

export default function BentoGridLayout({ posts }: BentoProps) {
    const count = posts.length;

    /**
     * GRID CONFIGURATION LOGIC:
     * 2 Posts: Simple 50/50 split.
     * 3 Posts: 1 Large Main (Left) + 2 Stacked (Right).
     * 4 Posts: 1 Large Hero (Top) + 3 Small (Bottom).
     */
    const gridClassName = cn(
        "grid gap-6 mx-auto",
        // Base mobile layout is always 1 column
        "grid-cols-1",
        // Desktop Layouts
        count === 2 && "md:grid-cols-2",
        count === 3 && "md:grid-cols-3 md:auto-rows-[250px]", // Fixed row height for stacking
        count === 4 && "md:grid-cols-3"
    );

    return (
        <section className="border-b border-zinc-200 pb-16 md:pb-24">
            <h2 className="sr-only">Featured Insights</h2>

            <div className={gridClassName}>
                {posts.map((post, index) => {
                    // Determine the span of each cell based on the layout strategy
                    const cellClass = getBentoCellClass(index, count);

                    return (
                        <BentoCard
                            key={post.slug}
                            post={post}
                            className={cellClass}
                            priority={index === 0} // Load the first image instantly
                        />
                    );
                })}
            </div>
        </section>
    );
}

/**
 * Helper component for individual cards
 */
function BentoCard({
    post,
    className,
    priority = false
}: {
    post: Insight;
    className?: string;
    priority?: boolean
}) {
    const formattedDate = new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });

    return (
        <Link
            href={`/insights/${post.slug}`}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-100 transition-all hover:shadow-lg",
                className
            )}
        >
            {/* Image Container */}
            <div className="relative flex-grow min-h-[200px] w-full overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    priority={priority}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay for text readability on image-heavy cards */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <div className="mb-2 flex items-center gap-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 border-none text-xs">
                        {post.categoryName}
                    </Badge>
                    <span className="text-xs font-medium text-zinc-300 border-l border-zinc-500 pl-2">
                        {formattedDate}
                    </span>
                </div>

                <h3 className="text-xl font-bold leading-tight md:text-2xl">
                    {post.title}
                </h3>

                {/* Only show excerpt on large cells to keep small cells clean */}
                <p className="mt-2 hidden text-sm text-zinc-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:line-clamp-2">
                    {post.excerpt}
                </p>
            </div>
        </Link>
    );
}

/**
 * Logic to calculate spans based on total count and current index
 */
function getBentoCellClass(index: number, totalCount: number): string {
    // Scenario: 2 Posts (Split Screen)
    if (totalCount === 2) {
        return "min-h-[400px]"; // Ensure they are tall enough
    }

    // Scenario: 3 Posts (1 Big Left, 2 Stacked Right)
    if (totalCount === 3) {
        if (index === 0) return "md:col-span-2 md:row-span-2 min-h-[400px]";
        return "md:col-span-1 md:row-span-1 min-h-[200px]";
    }

    // Scenario: 4 Posts (1 Big Top, 3 Below)
    if (totalCount === 4) {
        if (index === 0) return "md:col-span-3 min-h-[400px]"; // Hero Top
        return "md:col-span-1 min-h-[250px]"; // 3 Columns below
    }

    return "min-h-[300px]";
}