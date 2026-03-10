// app/api/axiosClient.ts
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

/**
 * Custom interface representing an Axios instance where the response
 * interceptor already extracts the `data` from the `AxiosResponse`.
 */
export interface UnwrappedAxiosInstance extends Omit<AxiosInstance, 'get' | 'post' | 'patch' | 'put' | 'delete'> {
  get<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  post<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  patch<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  put<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  delete<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
}

/**
 * Standard Axios instance with base configuration.
 */
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

/**
 * CSRF Token injection from Cookies.
 */
instance.interceptors.request.use((config) => {
  const csrfToken = Cookies.get("csrf_token");
  if (csrfToken) {
    config.headers["x-csrf-token"] = csrfToken;
  }
  return config;
});

/**
 * Global Response Interceptor.
 * Unwraps the inner response data object.
 */
instance.interceptors.response.use(
  (response) => {
    // If backend returns a successful ApiResponse structure, return it directly.
    if (response.data && response.data.success) {
      return response.data;
    }
    return response.data;
  },
  (error) => {
    // Handle unauthorized sessions
    if (error.response?.status === 401) {
      // Clear session cookies
      Cookies.remove("sid");
      Cookies.remove("csrf_token");
      
      if (typeof window !== "undefined") {
        const currentPath = window.location.pathname;
        const isAuthPage = currentPath.startsWith("/login") || currentPath.startsWith("/signup");
        const isProfilePage = currentPath.startsWith("/profile");

        // ONLY redirect automatically if on a protected page like profile.
        // Public pages should NOT redirect on 401 (e.g. background user check).
        if (!isAuthPage && isProfilePage) {
          window.location.href = "/login?redirect=" + encodeURIComponent(currentPath);
        }
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

/**
 * Casting to UnwrappedAxiosInstance so that consumers see the unwrapped
 * return types (e.g. Promise<ApiResponse<T>> instead of Promise<AxiosResponse<ApiResponse<T>>>).
 */
const axiosClient = instance as unknown as UnwrappedAxiosInstance;

export default axiosClient;

/**
 * Common shape for all RSR Backend API responses.
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
    totalPages?: number;
    [key: string]: any;
  } | any;
  error?: {
    code?: string | number;
    message: string;
    details?: unknown;
  };
  timestamp: string;
  path: string;
}
