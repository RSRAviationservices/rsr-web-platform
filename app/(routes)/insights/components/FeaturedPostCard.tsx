import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/app/components/ui/badge";
import type { Insight } from "@/app/api/insights/types";

export function FeaturedPostCard({ post }: { post: Insight }) {
  const formattedDate = new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group flex flex-col">
      <Link href={`/insights/${post.slug}`} className="block">
        <div className="relative mb-4 h-56 w-full overflow-hidden rounded-lg sm:h-72 md:h-96">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex items-center gap-4 text-sm text-zinc-600">
        <Badge
          variant="outline"
          className="border-zinc-300 bg-zinc-100 text-zinc-700"
        >
          {post.categoryName}
        </Badge>
        <span>{formattedDate}</span>
        <span>{post.readTime} min read</span>
      </div>
      <Link href={`/insights/${post.slug}`}>
        <h2 className="mt-4 text-2xl font-semibold text-zinc-900 group-hover:text-zinc-700 md:text-3xl">
          {post.title}
        </h2>
      </Link>
      <p className="mt-3 text-base text-zinc-600">{post.excerpt}</p>
      <div className="mt-5 flex items-center gap-3">
        {post.author.avatar && (
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <span className="text-sm font-medium text-zinc-800">
          {post.author.name}
        </span>
      </div>
    </article>
  );
}
