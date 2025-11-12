import axiosClient, { ApiResponse } from "../axiosClient";
import { QuoteRequest } from "./types"; // We will create this file next

/**
 * Submits the current cart as a new quote request.
 * POST /quotes
 */
export const submitQuote = async (): Promise<ApiResponse<QuoteRequest>> => {
  const response = await axiosClient.post<ApiResponse<QuoteRequest>>("/quotes");
  return response.data;
};

/**
 * Fetches all quote requests for the current user.
 * GET /quotes
 */
export const getMyQuotes = async (): Promise<ApiResponse<QuoteRequest[]>> => {
  const response = await axiosClient.get<ApiResponse<QuoteRequest[]>>(
    "/quotes"
  );
  return response.data;
};
