import axiosClient, { ApiResponse } from "../axiosClient";
import { ContactFormPayload } from "./types";

/**
 * Submits the contact form data.
 * POST /contact
 */
export const submitContactForm = async (
  data: ContactFormPayload
): Promise<ApiResponse<{ message: string }>> => {
  const response = await axiosClient.post<ApiResponse<{ message: string }>>(
    "/contact",
    data
  );
  return response.data;
};
