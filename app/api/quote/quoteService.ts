import axiosClient, { ApiResponse } from "../axiosClient";
import { QuoteRequest } from "./types";

/**
 * Submits the current cart as a new quote request.
 * POST /quotes
 */
export const submitQuote = async (): Promise<ApiResponse<QuoteRequest>> => {
  return axiosClient.post<ApiResponse<QuoteRequest>>("/quotes");
};

/**
 * Fetches all quote requests for the current user.
 * GET /quotes
 */
export const getMyQuotes = async (params?: { page?: number; limit?: number }): Promise<ApiResponse<QuoteRequest[]>> => {
  return axiosClient.get<ApiResponse<QuoteRequest[]>>("/quotes", { params });
};
