import axiosClient from '../axiosClient';
import type {
  Insight,
  PaginatedInsights,
  GetInsightsQuery,
  Category,
} from './types';

const BASE_URL = '/insights';

export const insightsService = {
  /**
   * Get all published insights (Public)
   */
  async getInsights(params?: GetInsightsQuery): Promise<PaginatedInsights> {
    const response = await axiosClient.get<PaginatedInsights>(BASE_URL, {
      params,
    });
    return response.data;
  },

  /**
   * Get insight by slug (Public)
   */
  async getInsightBySlug(slug: string): Promise<Insight> {
    const response = await axiosClient.get<{ data: Insight }>(
      `${BASE_URL}/${slug}`
    );
    return response.data.data;
  },

  /**
   * Get related insights (Public)
   */
  async getRelatedInsights(slug: string, limit: number = 3): Promise<Insight[]> {
    const response = await axiosClient.get<{ data: Insight[] }>(
      `${BASE_URL}/${slug}/related`,
      { params: { limit } }
    );
    return response.data.data;
  },

  /**
   * Get all categories (Public)
   */
  async getCategories(): Promise<Category[]> {
    const response = await axiosClient.get<{ data: Category[] }>(
      `${BASE_URL}/categories`
    );
    return response.data.data;
  },

  /**
   * Get all tags (Public)
   */
  async getTags(): Promise<string[]> {
    const response = await axiosClient.get<{ data: string[] }>(
      `${BASE_URL}/tags`
    );
    return response.data.data;
  },
};
