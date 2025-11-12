import React from "react";
import Image from "next/image";
import { Badge } from "@/app/components/ui/badge";
import { Calendar, Clock, Eye } from "lucide-react";
import type { Insight } from "@/app/api/insights/types";

interface PostHeaderProps {
  insight: Insight;
}

export function PostHeader({ insight }: PostHeaderProps) {
  const formattedDate = new Date(
    insight.publishedAt || insight.createdAt
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
      {/* Category and Metadata */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-600">
        <Badge
          variant="outline"
          className="border-zinc-300 bg-zinc-100 text-zinc-700"
        >
          {insight.categoryName}
        </Badge>
        <span className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          {formattedDate}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {insight.readTime} min read
        </span>
        <span className="flex items-center gap-1.5">
          <Eye className="h-4 w-4" />
          {insight.views.toLocaleString()} views
        </span>
      </div>

      {/* Title */}
      <h1 className="mt-4 text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl">
        {insight.title}
      </h1>

      {/* Excerpt */}
      <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 md:text-xl">
        {insight.excerpt}
      </p>

      {/* Author */}
      <div className="mt-8 flex items-center justify-center gap-3">
        {insight.author.avatar ? (
          <Image
            src={insight.author.avatar}
            alt={insight.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-sm font-semibold text-zinc-700">
            {insight.author.name.charAt(0).toUpperCase()}
          </div>
        )}
        <span className="text-sm font-medium text-zinc-800">
          {insight.author.name}
        </span>
      </div>

      {/* Tags */}
      {insight.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {insight.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
