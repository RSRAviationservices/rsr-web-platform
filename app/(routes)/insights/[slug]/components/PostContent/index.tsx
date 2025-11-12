import React from 'react';
import { RenderBlock } from './RenderBlock';
import type { Block } from './types';

interface PostContentProps {
  // FIX 1: The 'content' prop you are receiving from the page is
  // the entire object from the database, not just the array.
  content: {
    blocks: Block[];
  } | Block[]; // Accept either the object or the array for safety
}

/**
 * The main component that wraps the content in the article tag
 * and applies the base vertical spacing.
 */
export function PostContent({ content }: PostContentProps) {
  // FIX 2: Check if 'content' is the array or the object,
  // and extract the 'blocks' array.
  const blocks = Array.isArray(content)
    ? content // It's already an array
    : content?.blocks; // It's an object, get the 'blocks' property

  // FIX 3: Update the check to look at the 'blocks' variable
  if (!blocks || !Array.isArray(blocks)) {
    return null;
  }

  // A more advanced solution would group consecutive list items
  // here before mapping, but for your styles, direct mapping is fine.
  return (
    <article className="space-y-6">
      {/* FIX 4: Map over the 'blocks' array, not the 'content' object */}
      {blocks.map((block) => (
        <RenderBlock key={block.id} block={block} />
      ))}
    </article>
  );
}

// Re-export types for easy importing from this module
export * from './types';