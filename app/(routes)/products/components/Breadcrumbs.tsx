import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.label}>
            <div className="flex items-center">
              {index > 0 && (
                <ChevronRight
                  className="h-5 w-5 flex-shrink-0 text-zinc-400"
                  aria-hidden="true"
                />
              )}
              <Link
                href={item.href}
                className={`text-sm font-medium ${
                  index > 0 ? "ml-2" : ""
                } ${
                  index === items.length - 1
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}