import React from "react";
import { X } from "lucide-react";
import { Filters } from "../ProductFilters";

interface AppliedFiltersProps {
  filters: Filters;
  activeFilterCount: number;
  onRadioChange: (value: string) => void;
  onCheckboxChange: (category: keyof Filters, value: string) => void;
}

// Helper to format slugs for display, matching the popover
const formatSlug = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

// Match attribute IDs to their display labels
const attributeLabels: { [key: string]: string } = {
  hasCoC: "CoC Available",
  hasSDS: "SDS Available",
  temperatureControlled: "Temp-Controlled",
  hazmat: "Hazmat Material",
};

const FilterPill = ({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) => (
  <span className="flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700">
    {label}
    <button onClick={onRemove} aria-label={`Remove ${label} filter`}>
      <X size={12} />
    </button>
  </span>
);

export function AppliedFilters({
  filters,
  activeFilterCount,
  onRadioChange,
  onCheckboxChange,
}: AppliedFiltersProps) {
  if (activeFilterCount === 0) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-zinc-600">Applied:</span>

      {filters.availability !== "all" && (
        <FilterPill
          label={formatSlug(filters.availability)}
          onRemove={() => onRadioChange("all")}
        />
      )}

      {filters.subcategories.map((slug) => (
        <FilterPill
          key={slug}
          label={formatSlug(slug)}
          onRemove={() => onCheckboxChange("subcategories", slug)}
        />
      ))}

      {filters.brands.map((brand) => (
        <FilterPill
          key={brand}
          label={brand}
          onRemove={() => onCheckboxChange("brands", brand)}
        />
      ))}

      {filters.attributes.map((attr) => (
        <FilterPill
          key={attr}
          label={attributeLabels[attr] || formatSlug(attr)}
          onRemove={() => onCheckboxChange("attributes", attr)}
        />
      ))}
    </div>
  );
}
