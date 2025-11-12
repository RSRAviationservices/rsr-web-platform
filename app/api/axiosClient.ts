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
