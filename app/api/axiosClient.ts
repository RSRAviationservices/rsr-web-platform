// app/api/axiosClient.ts
import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use((config) => {
  const csrfToken = Cookies.get("csrf_token");
  if (csrfToken) {
    config.headers["x-csrf-token"] = csrfToken;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    // Return only the inner data object if it exists and success is true
    if (response.data && response.data.success) {
      return response.data;
    }
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Clear session cookies and redirect to login if unauthorized
      Cookies.remove("sid");
      Cookies.remove("csrf_token");
      if (typeof window !== "undefined") {
        window.location.href = "/login?redirect=" + encodeURIComponent(window.location.pathname);
      }
    }

    const errorMessage = 
      error.response?.data?.error?.message || 
      error.response?.data?.message || 
      error.message || 
      "An unexpected error occurred.";

    return Promise.reject(new Error(errorMessage));
  }
);

export default axiosClient;

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  meta?: Record<string, unknown> | any;
  error?: {
    code?: string | number;
    message: string;
    details?: unknown;
  };
  timestamp: string;
  path: string;
}
