import axiosClient, { ApiResponse } from '../axiosClient';
import type {
  Career,
  PaginatedCareers,
  GetCareersQuery,
  SubmitApplicationData,
} from './types';

const BASE_URL = '/careers';

export const careerService = {
  /**
   * Get all published careers (Public)
   */
  async getCareers(params?: GetCareersQuery): Promise<PaginatedCareers> {
    // If we want PaginatedCareers, and it's already unwrapped by axiosClient,
    // we should just return it.
    const response = await axiosClient.get<PaginatedCareers>(BASE_URL, {
      params,
    });
    return response;
  },

  /**
   * Get career by slug (Public)
   */
  async getCareerBySlug(slug: string): Promise<Career> {
    // The interceptor already returns response.data (which is ApiResponse<Career>)
    const response = await axiosClient.get<ApiResponse<Career>>(
      `${BASE_URL}/${slug}`
    );
    return response.data as Career;
  },

  /**
   * Submit application for a career (Public)
   */
  async submitApplication(
    slug: string,
    data: SubmitApplicationData
  ): Promise<ApiResponse<any>> {
    return axiosClient.post<ApiResponse<any>>(
      `${BASE_URL}/${slug}/apply`,
      data
    );
  },
};
