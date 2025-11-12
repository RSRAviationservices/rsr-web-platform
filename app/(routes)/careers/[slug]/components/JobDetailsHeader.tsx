"use client";

import React from "react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { MapPin, Clock, Calendar, DollarSign } from "lucide-react";
import type { Career } from "@/app/api/career/types";

interface JobDetailsHeaderProps {
  career: Career;
}

export function JobDetailsHeader({ career }: JobDetailsHeaderProps) {
  const { title, location, type, department, intro, salaryRange, postedDate } =
    career;

  // Function to scroll to the form
  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Format posted date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Format salary range
  const formatSalary = () => {
    if (!salaryRange) return null;
    const { min, max, currency, period } = salaryRange;
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 0,
    });
    return `${formatter.format(min)} - ${formatter.format(max)} ${period}`;
  };

  return (
    <div className="pt-16 md:pt-24">
      {/* Job Title */}
      <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl">
        {title}
      </h1>

      {/* Meta Info: Location, Type, Department */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-lg text-zinc-600">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4" />
          {location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {type}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          Posted {formatDate(postedDate)}
        </span>
        <Badge
          variant="outline"
          className="border-zinc-300 bg-zinc-100 text-zinc-700"
        >
          {department}
        </Badge>
      </div>

      {/* Salary Range (if available) */}
      {salaryRange && (
        <div className="mt-4 flex items-center gap-2 text-lg font-semibold text-zinc-900">
          <DollarSign className="h-5 w-5" />
          {formatSalary()}
        </div>
      )}

      {/* Introduction Paragraph */}
      <p className="mt-6 max-w-3xl text-lg text-zinc-700">{intro}</p>

      {/* Apply Now Button */}
      <Button size="lg" className="mt-8" onClick={scrollToForm}>
        Apply Now
      </Button>
    </div>
  );
}
