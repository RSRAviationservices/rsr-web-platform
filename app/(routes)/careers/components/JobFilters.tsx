"use client";

import React, { useCallback } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Search } from "lucide-react";
import { useCareerFilterStore } from "@/app/store/useCareerFilterStore";
import { CareerDepartment } from "@/app/api/career/types";
// Import Next.js navigation hooks
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const allDepartments = Object.values(CareerDepartment);

export function JobFilters() {
  // 1. Keep using Zustand for the live search query
  const { searchQuery, setSearchQuery } = useCareerFilterStore();

  // 2. Use Next.js hooks for URL-based department filter
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentDepartment =
    searchParams.get("department") || CareerDepartment.ALL;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === CareerDepartment.ALL) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      params.set("page", "1");
      return params.toString();
    },
    [searchParams]
  );

  const handleDepartmentClick = (department: CareerDepartment) => {
    const queryString = createQueryString("department", department);
    setSearchQuery("");
    router.push(pathname + "?" + queryString);
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 mt-10">
      <div className="mb-12 space-y-6">
        {/* Search Bar (unchanged, still uses Zustand) */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <Input
            type="text"
            placeholder="Search by job title, location, or ID..."
            className="w-full rounded-full bg-zinc-50 pl-10 pr-4 py-6 text-base focus-visible:ring-zinc-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Department Filter Tags (now reads from URL and writes to URL) */}
        <div className="flex flex-wrap items-center gap-2">
          {allDepartments.map((department) => (
            <Button
              key={department}
              variant="outline"
              size="sm"
              className={`rounded-full h-8 ${
                currentDepartment === department
                  ? "bg-zinc-900 text-white hover:bg-zinc-700 hover:text-white"
                  : "bg-white text-zinc-700 hover:bg-zinc-100"
              }`}
              onClick={() => handleDepartmentClick(department)}
            >
              {department}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}