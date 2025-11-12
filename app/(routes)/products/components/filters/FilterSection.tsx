import React from "react";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div>
      <h4 className="font-medium text-zinc-700 text-sm">{title}</h4>
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  );
}
