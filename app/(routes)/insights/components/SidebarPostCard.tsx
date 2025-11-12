import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/app/api/insights/types";

export function SidebarPostCard({ post }: { post: Insight }) {
  const formattedDate = new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group grid grid-cols-3 gap-3">
      <Link href={`/insights/${post.slug}`} className="col-span-1 block">
        <div className="relative aspect-square w-full overflow-hidden rounded-md">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="col-span-2">
        <Link href={`/insights/${post.slug}`}>
          <h3 className="text-sm font-semibold leading-tight text-zinc-900 group-hover:text-zinc-700">
            {post.title}
          </h3>
        </Link>
        <span className="mt-1 block text-xs text-zinc-500">{formattedDate}</span>
      </div>
    </article>
  );
}
