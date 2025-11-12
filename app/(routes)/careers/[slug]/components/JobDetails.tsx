import React from "react";
import { RichTextSection } from "./RichTextSection";
import type { Career } from "@/app/api/career/types";

interface JobDetailsProps {
  career: Career;
}

export function JobDetails({ career }: JobDetailsProps) {
  const {
    description,
    responsibilities,
    requirements,
    benefits,
    qualifications,
  } = career;

  return (
    <article className="prose prose-zinc max-w-none space-y-12 py-12">
      {/* Description */}
      <RichTextSection
        title={description.title}
        content={description.content}
        items={description.items}
      />

      {/* Responsibilities */}
      <RichTextSection
        title={responsibilities.title}
        content={responsibilities.content}
        items={responsibilities.items}
      />

      {/* Requirements */}
      <RichTextSection
        title={requirements.title}
        content={requirements.content}
        items={requirements.items}
      />

      {/* Benefits (Optional) */}
      {benefits && (
        <RichTextSection
          title={benefits.title}
          content={benefits.content}
          items={benefits.items}
        />
      )}

      {/* Qualifications (Optional) */}
      {qualifications && (
        <RichTextSection
          title={qualifications.title}
          content={qualifications.content}
          items={qualifications.items}
        />
      )}
    </article>
  );
}
