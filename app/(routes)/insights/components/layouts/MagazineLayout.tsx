import { FeaturedPostCard } from "../FeaturedPostCard";
import { SidebarPostCard } from "../SidebarPostCard";
import { LatestPostsGrid } from "../LatestPostsGrid";
import type { Insight } from "@/app/api/insights/types";

export function MagazineLayout({ posts }: { posts: Insight[] }) {
    // Safety checks
    if (!posts || posts.length < 5) return null;

    const featuredPost = posts[0];
    const sidebarPosts = posts.slice(1, 5);
    const remainingPostsForGrid = posts.slice(5);

    return (
        <>
            {/* Top Section: Hero + Sidebar */}
            <div className="grid grid-cols-1 gap-12 border-b border-zinc-200 pb-16 lg:grid-cols-12 md:pb-24">
                <div className="lg:col-span-8">
                    <FeaturedPostCard post={featuredPost} />
                </div>

                {/* Sidebar (Takes 4/12 columns) */}
                <div className="flex flex-col gap-6 lg:col-span-4 border-l border-zinc-100 lg:pl-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 pb-2">
                        Trending Now
                    </h3>
                    <div className="flex flex-col gap-6">
                        {sidebarPosts.map((post) => (
                            <SidebarPostCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: Infinite Grid */}
            {/* Only render grid if we actually have more posts or want to allow loading more */}
            <LatestPostsGrid initialPosts={remainingPostsForGrid} />
        </>
    );
}