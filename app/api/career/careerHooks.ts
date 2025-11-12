import { useQuery, useMutation } from '@tanstack/react-query';
import { careerService } from './careerService';
import type { GetCareersQuery, SubmitApplicationData } from './types';

export const CAREER_QUERY_KEYS = {
  all: ['careers'] as const,
  lists: () => [...CAREER_QUERY_KEYS.all, 'list'] as const,
  list: (filters: GetCareersQuery) =>
    [...CAREER_QUERY_KEYS.lists(), filters] as const,
  details: () => [...CAREER_QUERY_KEYS.all, 'detail'] as const,
  detail: (slug: string) => [...CAREER_QUERY_KEYS.details(), slug] as const,
};

/**
 * Hook to fetch all careers with filters
 */
export function useCareers(params?: GetCareersQuery) {
  return useQuery({
    queryKey: CAREER_QUERY_KEYS.list(params || {}),
    queryFn: () => careerService.getCareers(params),
    staleTime: 60 * 1000, // 1 minute
  });
}

/**
 * Hook to fetch career by slug
 */
export function useCareerBySlug(slug: string) {
  return useQuery({
    queryKey: CAREER_QUERY_KEYS.detail(slug),
    queryFn: () => careerService.getCareerBySlug(slug),
    enabled: !!slug,
    staleTime: 60 * 1000, // 1 minute
  });
}

/**
 * Hook to submit application
 */
export function useSubmitApplication() {
  return useMutation({
    mutationFn: ({
      slug,
      data,
    }: {
      slug: string;
      data: SubmitApplicationData;
    }) => careerService.submitApplication(slug, data),
  });
}
