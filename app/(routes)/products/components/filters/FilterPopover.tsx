import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Label } from "@/app/components/ui/label";
import { Separator } from "@/app/components/ui/separator";
import { ListFilter } from "lucide-react";
import { FilterSection } from "./FilterSection";
import { Filters } from "../ProductFilters";

const BRAND_OPTIONS = [
  "Airtech",
  "Cytec",
  "Henkel Loctite",
  "Solvay",
  "PPG Aerospace",
  "AeroShell",
];
const ATTRIBUTE_OPTIONS = [
  { id: "hasCoC", label: "CoC Available" },
  { id: "hasSDS", label: "SDS Available" },
  { id: "temperatureControlled", label: "Temp-Controlled" },
  { id: "hazmat", label: "Hazmat Material" },
];

interface FilterPopoverProps {
  activeFilterCount: number;
  filters: Filters;
  subcategorySlugs: string[];
  onRadioChange: (value: string) => void;
  onCheckboxChange: (category: keyof Filters, value: string) => void;
  onClear: () => void;
}

// Helper to format slugs for display
const formatSlug = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

export function FilterPopover({
  activeFilterCount,
  filters,
  subcategorySlugs,
  onRadioChange,
  onCheckboxChange,
  onClear,
}: FilterPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="relative w-full sm:w-auto">
          <ListFilter className="mr-2 h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filters</h3>
          <Button variant="ghost" size="sm" onClick={onClear}>
            Clear All
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="space-y-6">
          <FilterSection title="Availability">
            <RadioGroup
              value={filters.availability}
              onValueChange={onRadioChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="avail-all" />
                <Label htmlFor="avail-all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in-stock" id="avail-in-stock" />
                <Label htmlFor="avail-in-stock">In Stock</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lead-time" id="avail-lead-time" />
                <Label htmlFor="avail-lead-time">Lead Time</Label>
              </div>
            </RadioGroup>
          </FilterSection>

          {subcategorySlugs.length > 0 && (
            <FilterSection title="Sub-Category">
              {subcategorySlugs.map((slug) => (
                <div key={slug} className="flex items-center space-x-2">
                  <Checkbox
                    id={`subcat-${slug}`}
                    checked={(filters.subcategories as string[]).includes(slug)}
                    onCheckedChange={() =>
                      onCheckboxChange("subcategories", slug)
                    }
                  />
                  <Label htmlFor={`subcat-${slug}`}>{formatSlug(slug)}</Label>
                </div>
              ))}
            </FilterSection>
          )}

          <FilterSection title="Brand">
            {BRAND_OPTIONS.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={(filters.brands as string[]).includes(brand)}
                  onCheckedChange={() => onCheckboxChange("brands", brand)}
                />
                <Label htmlFor={`brand-${brand}`}>{brand}</Label>
              </div>
            ))}
          </FilterSection>

          <FilterSection title="Attributes">
            {ATTRIBUTE_OPTIONS.map((attr) => (
              <div key={attr.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`attr-${attr.id}`}
                  checked={(filters.attributes as string[]).includes(attr.id)}
                  onCheckedChange={() =>
                    onCheckboxChange("attributes", attr.id)
                  }
                />
                <Label htmlFor={`attr-${attr.id}`}>{attr.label}</Label>
              </div>
            ))}
          </FilterSection>
        </div>
      </PopoverContent>
    </Popover>
  );
}
