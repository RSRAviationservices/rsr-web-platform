import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { insightsService } from './insightsService';
import type { GetInsightsQuery } from './types';

export const INSIGHTS_QUERY_KEYS = {
  all: ['insights'] as const,
  lists: () => [...INSIGHTS_QUERY_KEYS.all, 'list'] as const,
  list: (filters: GetInsightsQuery) =>
    [...INSIGHTS_QUERY_KEYS.lists(), filters] as const,
  details: () => [...INSIGHTS_QUERY_KEYS.all, 'detail'] as const,
  detail: (slug: string) => [...INSIGHTS_QUERY_KEYS.details(), slug] as const,
  related: (slug: string) => [...INSIGHTS_QUERY_KEYS.all, 'related', slug] as const,
  categories: () => [...INSIGHTS_QUERY_KEYS.all, 'categories'] as const,
  tags: () => [...INSIGHTS_QUERY_KEYS.all, 'tags'] as const,
};

/**
 * Hook to fetch insights with infinite scroll
 */
export function useInfiniteInsights(params?: Omit<GetInsightsQuery, 'page'>) {
  return useInfiniteQuery({
    queryKey: INSIGHTS_QUERY_KEYS.list(params || {}),
    queryFn: ({ pageParam = 1 }) =>
      insightsService.getInsights({ ...params, page: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.pagination.hasNext
        ? lastPage.pagination.page + 1
        : undefined,
    initialPageParam: 1,
    staleTime: 60 * 1000, // 1 minute
  });
}

/**
 * Hook to fetch insights (regular pagination)
 */
export function useInsights(params?: GetInsightsQuery) {
  return useQuery({
    queryKey: INSIGHTS_QUERY_KEYS.list(params || {}),
    queryFn: () => insightsService.getInsights(params),
    staleTime: 60 * 1000,
  });
}

/**
 * Hook to fetch insight by slug
 */
export function useInsightBySlug(slug: string) {
  return useQuery({
    queryKey: INSIGHTS_QUERY_KEYS.detail(slug),
    queryFn: () => insightsService.getInsightBySlug(slug),
    enabled: !!slug,
    staleTime: 60 * 1000,
  });
}

/**
 * Hook to fetch related insights
 */
export function useRelatedInsights(slug: string, limit: number = 3) {
  return useQuery({
    queryKey: INSIGHTS_QUERY_KEYS.related(slug),
    queryFn: () => insightsService.getRelatedInsights(slug, limit),
    enabled: !!slug,
    staleTime: 60 * 1000,
  });
}

/**
 * Hook to fetch categories
 */
export function useCategories() {
  return useQuery({
    queryKey: INSIGHTS_QUERY_KEYS.categories(),
    queryFn: () => insightsService.getCategories(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

/**
 * Hook to fetch tags
 */
export function useTags() {
  return useQuery({
    queryKey: INSIGHTS_QUERY_KEYS.tags(),
    queryFn: () => insightsService.getTags(),
    staleTime: 5 * 60 * 1000,
  });
}
