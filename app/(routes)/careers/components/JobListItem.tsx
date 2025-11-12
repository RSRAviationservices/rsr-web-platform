import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { cn } from "@/app/lib/utils";
import type { Career } from "@/app/api/career/types";

interface JobListItemProps {
  job: Career;
}

export function JobListItem({ job }: JobListItemProps) {
  const isClosed = job.status === "closed";

  return (
    <li
      className={cn(
        "block transition-colors",
        !isClosed && "hover:bg-zinc-50/50"
      )}
    >
      <Link
        href={`/careers/${job.slug}`}
        aria-disabled={isClosed}
        tabIndex={isClosed ? -1 : undefined}
        className={cn(
          "flex flex-col items-start justify-between gap-4 px-6 py-5 md:flex-row md:items-center",
          isClosed && "pointer-events-none opacity-60"
        )}
      >
        {/* Left Side: Title and Details */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zinc-900">{job.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {job.type}
            </span>
          </div>
        </div>

        {/* Right Side: Department, Status Badge, and Arrow */}
        <div className="flex w-full items-center justify-between md:w-auto md:justify-end md:gap-4">
          {/* Department Tag */}
          <Badge
            variant="outline"
            className="border-zinc-300 bg-zinc-100 text-zinc-700"
          >
            {job.department}
          </Badge>

          {/* Closed Badge (Conditional) */}
          {isClosed && (
            <Badge variant="destructive" className="bg-zinc-800 text-white">
              Closed
            </Badge>
          )}

          <ArrowUpRight className="h-5 w-5 text-zinc-400" />
        </div>
      </Link>
    </li>
  );
}
