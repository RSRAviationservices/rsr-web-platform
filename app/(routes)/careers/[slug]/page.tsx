import React from "react";
import { notFound } from "next/navigation";
import { ApplicationForm } from "./components/ApplicationForm";
import { JobDetails } from "./components/JobDetails";
import { JobDetailsHeader } from "./components/JobDetailsHeader";
import { careerService } from "@/app/api/career/careerService";
import type { Metadata } from "next";

interface CareerDetailPageProps {
  params: { slug: string };
}

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

// Generate static paths for all careers at build time
export async function generateStaticParams() {
  try {
    const careersData = await careerService.getCareers({ limit: 100 });
    return careersData.data.map((career) => ({
      slug: career.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: CareerDetailPageProps): Promise<Metadata> {
  try {
    const career = await careerService.getCareerBySlug(params.slug);

    return {
      title: career.metaTitle || `${career.title} - Careers | RSR Aviation`,
      description:
        career.metaDescription ||
        career.intro ||
        `Apply for ${career.title} position at RSR Aviation. ${career.department} department in ${career.location}.`,
      openGraph: {
        title: career.metaTitle || career.title,
        description:
          career.metaDescription || career.intro || career.description.content,
        type: "website",
      },
    };
  } catch {
    return {
      title: "Career Details - RSR Aviation",
      description: "View career details at RSR Aviation",
    };
  }
}

export default async function CareerDetailPage({
  params,
}: CareerDetailPageProps) {
  let career;

  try {
    career = await careerService.getCareerBySlug(params.slug);
  } catch (error) {
    // If career not found, show 404
    notFound();
  }

  // Check if career is closed
  if (career.status === "closed") {
    return (
      <main className="bg-white text-zinc-900">
        <div className="container mx-auto max-w-5xl px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-zinc-900">
              Position Closed
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              This position is no longer accepting applications.
            </p>
            {career.closedReason && (
              <p className="mt-2 text-zinc-500">{career.closedReason}</p>
            )}
            <a
              href="/careers"
              className="mt-8 inline-block rounded-lg bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800"
            >
              View All Open Positions
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white text-zinc-900">
      <div className="container mx-auto max-w-5xl px-4">
        <JobDetailsHeader career={career} />
        <div className="mx-auto">
          <JobDetails career={career} />
        </div>
        <div className="mx-auto max-w-3xl pb-16 pt-12 md:pb-24">
          <ApplicationForm
            careerSlug={career.slug}
            careerTitle={career.title}
          />
        </div>
      </div>
    </main>
  );
}
