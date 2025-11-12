import React from 'react';
import Link from 'next/link';
import type { InlineContent } from './types';

/**
 * Renders an array of InlineContent (text, links, bold, etc.)
 */
export function RenderInlineContent({ content }: { content: InlineContent[] }) {
  if (!content) {
    return null;
  }

  return (
    <>
      {content.map((inline, index) => {
        if (inline.type !== 'text') {
          return null;
        }

        let element: React.ReactNode = inline.text;
        const styles = inline.styles || {};

        if (styles.bold) {
          element = <strong>{element}</strong>;
        }
        if (styles.italic) {
          element = <em>{element}</em>;
        }
        if (styles.underline) {
          element = <u>{element}</u>;
        }
        if (styles.strike) {
          element = <s>{element}</s>;
        }
        if (styles.code) {
          element = (
            <code className="rounded bg-zinc-200 px-1 py-0.5 text-base font-mono text-zinc-800">
              {element}
            </code>
          );
        }

        if (styles.href) {
          return (
            <Link
              key={index}
              href={styles.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-700"
            >
              {element}
            </Link>
          );
        }

        return <React.Fragment key={index}>{element}</React.Fragment>;
      })}
    </>
  );
}