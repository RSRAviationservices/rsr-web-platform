import React from "react";
import { Check } from "lucide-react";

interface RichTextSectionProps {
  title: string;
  content?: string;
  items?: string[];
}

export function RichTextSection({
  title,
  content,
  items,
}: RichTextSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight text-zinc-900 md:text-2xl">
        {title}
      </h2>

      {/* Renders a paragraph if 'content' is provided */}
      {content && <p className="text-base text-zinc-700">{content}</p>}

      {/* Renders a bulleted list if 'items' are provided */}
      {items && (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0">
                <Check className="h-5 w-5 text-zinc-500" />
              </span>
              <span className="text-base text-zinc-700">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}