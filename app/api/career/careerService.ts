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
    const response = await axiosClient.get<PaginatedCareers>(BASE_URL, {
      params,
    });
    return response.data;
  },

  /**
   * Get career by slug (Public)
   */
  async getCareerBySlug(slug: string): Promise<Career> {
    const response = await axiosClient.get<{ data: Career }>(
      `${BASE_URL}/${slug}`
    );
    return response.data.data;
  },

  /**
   * Submit application for a career (Public)
   */
  async submitApplication(
    slug: string,
    data: SubmitApplicationData
  ): Promise<ApiResponse<any>> {
    const response = await axiosClient.post<ApiResponse<any>>(
      `${BASE_URL}/${slug}/apply`,
      data
    );
    return response.data;
  },
};
