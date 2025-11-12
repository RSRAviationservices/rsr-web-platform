import React from "react";

export function InsightsHeader() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl">
          Insights & News
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 md:text-xl">
          Read the latest product updates, company news, and industry insights
          from the RSR Aviation team.
        </p>
      </div>
    </section>
  );
}