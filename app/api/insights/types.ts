export enum InsightStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
}

export interface Author {
  id: string;
  name: string;
  avatar?: string;
}

export interface Insight {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: Record<string, any>; // BlockNote JSON
  coverImage: string;
  author: Author;
  categoryId: string;
  categoryName: string;
  tags: string[];
  status: InsightStatus;
  publishedAt?: string;
  views: number;
  readTime: number;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedInsights {
  data: Insight[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface GetInsightsQuery {
  search?: string;
  category?: string;
  tag?: string;
  page?: number;
  limit?: number;
  sortBy?: 'publishedAt' | 'views' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}
