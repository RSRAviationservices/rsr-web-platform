import React from "react";
import { CareersHeader } from "./components/CareersHeader";
import { JobFilters } from "./components/JobFilters";
import { JobListings } from "./components/JobListings";
import { careerService } from "@/app/api/career/careerService";
// Import Career and CareerDepartment
import type { Career } from "@/app/api/career/types";
import { CareerDepartment } from "@/app/api/career/types";

interface CareersPageProps {
  searchParams: {
    department?: string;
    page?: string;
  };
}

export const revalidate = 60;

export default async function CareersPage({
  searchParams,
}: CareersPageProps) {
  const department = searchParams.department || CareerDepartment.ALL;

  const careersData = await careerService.getCareers({
    department: department as any,
    page: searchParams.page ? parseInt(searchParams.page) : 1,
    limit: 50,
  });

  return (
    <div className="bg-white text-zinc-900">
      <CareersHeader />
      <JobFilters />
      <JobListings initialCareers={careersData.data} />
    </div>
  );
}