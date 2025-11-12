import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import type { Block, InlineContent, TextAlignment } from './types';
import { RenderInlineContent } from './RenderInlineContent';

/**
 * Renders a single block based on its type.
 * This component is self-recursive to handle nested lists.
 */
export function RenderBlock({ block }: { block: Block }) {
  // Type-safe handling of text alignment
  const alignment: TextAlignment =
    ['left', 'center', 'right'].includes(block.props?.textAlign)
      ? block.props?.textAlign
      : 'left';

  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment];

  switch (block.type) {
    case 'heading':
      const level = block.props?.level || 1;
      const headingContent = (
        <RenderInlineContent content={block.content as InlineContent[]} />
      );

      if (level === 1) {
        return (
          <h1
            className={cn(
              '!mt-12 text-4xl font-bold tracking-tighter text-zinc-900',
              alignClass,
            )}
          >
            {headingContent}
          </h1>
        );
      }
      if (level === 2) {
        return (
          <h2
            className={cn(
              '!mt-12 text-3xl font-bold tracking-tighter text-zinc-900',
              alignClass,
            )}
          >
            {headingContent}
          </h2>
        );
      }
      if (level === 3) {
        return (
          <h3
            className={cn(
              '!mt-12 text-2xl font-bold tracking-tighter text-zinc-900',
              alignClass,
            )}
          >
            {headingContent}
          </h3>
        );
      }
      return (
        <h4
          className={cn(
            '!mt-10 text-xl font-bold tracking-tighter text-zinc-900',
            alignClass,
          )}
        >
          {headingContent}
        </h4>
      );

    case 'paragraph':
      return (
        <p className={cn('text-lg leading-relaxed text-zinc-700', alignClass)}>
          <RenderInlineContent content={block.content as InlineContent[]} />
        </p>
      );

    case 'bulletListItem':
      return (
        <li className="flex items-start gap-3">
          <span className="mt-1 flex-shrink-0">
            <Check className="h-5 w-5 text-zinc-500" />
          </span>
          <span className="text-lg leading-relaxed text-zinc-700">
            <RenderInlineContent content={block.content as InlineContent[]} />
            {/* Handle nested lists by calling itself */}
            {block.children.length > 0 && (
              <ul className="!my-4 space-y-4">
                {block.children.map((child) => (
                  <RenderBlock key={child.id} block={child} />
                ))}
              </ul>
            )}
          </span>
        </li>
      );

    case 'numberedListItem':
      return (
        <li className="pl-2">
          <span className="text-lg leading-relaxed text-zinc-700">
            <RenderInlineContent content={block.content as InlineContent[]} />
            {/* Handle nested lists by calling itself */}
            {block.children.length > 0 && (
              <ol className="!my-4 list-decimal space-y-3 pl-6">
                {block.children.map((child) => (
                  <RenderBlock key={child.id} block={child} />
                ))}
              </ol>
            )}
          </span>
        </li>
      );

    case 'blockquote':
      return (
        <blockquote className="!my-10 border-l-4 border-zinc-300 pl-6">
          <p className="text-xl italic leading-relaxed text-zinc-600">
            <RenderInlineContent content={block.content as InlineContent[]} />
          </p>
        </blockquote>
      );

    case 'image':
      const caption =
        block.content.length > 0
          ? (block.content[0] as InlineContent).text
          : '';
      return (
        <figure className="!my-12 w-full">
          <Image
            src={block.props?.src || '/placeholder-image.jpg'}
            alt={block.props?.alt || caption || 'Blog post image'}
            width={1200}
            height={800}
            className="w-full rounded-lg object-cover"
          />
          {caption && (
            <figcaption className="mt-3 text-center text-sm text-zinc-500">
              {caption}
            </figcaption>
          )}
        </figure>
      );

    case 'video':
      const videoType = block.props?.type || 'native';
      const videoSrc = block.props?.src || '';

      if (videoType === 'youtube') {
        return (
          <div className="!my-8 w-full overflow-hidden rounded-lg">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        );
      }
      // Default to native video player
      return (
        <video className="!my-8 w-full rounded-lg" controls src={videoSrc}>
          Your browser does not support the video tag.
        </video>
      );

    case 'audio':
      return (
        <audio
          className="!my-8 w-full"
          controls
          src={block.props?.src || ''}
        >
          Your browser does not support the audio element.
        </audio>
      );

    case 'codeBlock':
      const code = block.content
        .map((line) => (line as InlineContent).text)
        .join('\n');
      return (
        <pre className="!my-8 w-full overflow-x-auto rounded-lg bg-zinc-900 p-4 text-white">
          <code className="text-sm font-mono">{code}</code>
        </pre>
      );

    // TODO: Add case 'table' for a complete implementation

    default:
      if (process.env.NODE_ENV === 'development') {
        console.warn('Unhandled BlockNote block type:', block.type);
      }
      return null;
  }
}