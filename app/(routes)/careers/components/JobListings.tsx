"use client";

import React, { useMemo } from "react";
import { JobListItem } from "./JobListItem";
import { NoOpenings } from "./NoOpenings";
import { useCareerFilterStore } from "@/app/store/useCareerFilterStore";
import type { Career } from "@/app/api/career/types";

interface JobListingsProps {
  initialCareers: Career[];
}

export function JobListings({ initialCareers }: JobListingsProps) {
  const { searchQuery } = useCareerFilterStore();

  const filteredJobs = useMemo(() => {
    let jobs = initialCareers;
    if (searchQuery.trim() !== "") {
      const lowerQuery = searchQuery.toLowerCase();
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(lowerQuery) ||
          job.slug.toLowerCase().includes(lowerQuery) ||
          job.location.toLowerCase().includes(lowerQuery)
      );
    }

    return jobs;
  }, [initialCareers, searchQuery]);

  return (
    <section className="container mx-auto max-w-5xl px-4 pb-16 md:pb-24">
      {filteredJobs.length > 0 ? (
        <div className="overflow-hidden rounded-lg border border-zinc-200">
          <ul className="divide-y divide-zinc-200">
            {filteredJobs.map((job) => (
              <JobListItem key={job.slug} job={job} />
            ))}
          </ul>
        </div>
      ) : (
        <NoOpenings />
      )}
    </section>
  );
}