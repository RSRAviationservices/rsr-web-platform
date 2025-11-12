import React from "react";

export function CareersHeader() {
  return (
    <div className="w-full flex items-center justify-center bg-zinc-100">
    <section className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="space-y-4">
        <span className="font-semibold text-stone-600 mb-0.5">Join Our Team</span>
        <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl">
          Help build the future of aviation.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 md:text-xl mt-1">
          At RSR Aviation, we are on a mission to redefine excellence in aviation
          services. We're looking for passionate, dedicated individuals to join
          our world-class team.
        </p>
      </div>
    </section></div>
  );
}