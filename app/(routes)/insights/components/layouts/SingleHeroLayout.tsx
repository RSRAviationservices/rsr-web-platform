import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/app/components/ui/badge";
import type { Insight } from "@/app/api/insights/types";
import { Button } from "@/app/components/ui/button";

export function SingleHeroLayout({ post }: { post: Insight }) {
    return (
        <article className="group relative overflow-hidden rounded-2xl bg-zinc-900 shadow-xl">
            {/* Full Width Background Image */}
            <div className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-50">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Content Centered */}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center sm:px-12 lg:py-32">
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none mb-6">
                    {post.categoryName}
                </Badge>

                <Link href={`/insights/${post.slug}`}>
                    <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        {post.title}
                    </h2>
                </Link>

                <p className="mt-6 max-w-2xl text-lg text-zinc-200">
                    {post.excerpt}
                </p>

                <div className="mt-8 flex items-center gap-4">
                    {/* Author info here if needed */}
                    <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200">
                        <Link href={`/insights/${post.slug}`}>Read Full Article</Link>
                    </Button>
                </div>
            </div>
        </article>
    );
}