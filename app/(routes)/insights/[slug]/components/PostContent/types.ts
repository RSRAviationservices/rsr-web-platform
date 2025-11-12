// All BlockNote-related types
export type InlineStyle = {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
  code?: boolean;
  href?: string;
  // ... other styles
};

export type InlineContent = {
  type: 'text';
  text: string;
  styles: InlineStyle;
};

export type Block = {
  id: string;
  type: string;
  props?: Record<string, any>;
  content: InlineContent[] | Block[];
  children: Block[];
};

// Type for handling text alignment prop
export type TextAlignment = 'left' | 'center' | 'right';