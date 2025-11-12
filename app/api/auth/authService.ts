import axiosClient, { ApiResponse } from "../axiosClient";
import {
  LoginPayload,
  SignupPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  User,
  UpdateUserProfilePayload,
} from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Registers a new user.
 * POST /auth/user/register
 */
export const signup = async (
  data: SignupPayload
): Promise<ApiResponse<User>> => {
  const response = await axiosClient.post<ApiResponse<User>>(
    "/auth/user/register",
    data
  );
  return response.data;
};

/**
 * Logs in a user.
 * POST /auth/user/login
 */
export const login = async (data: LoginPayload): Promise<ApiResponse<User>> => {
  const response = await axiosClient.post<ApiResponse<User>>(
    "/auth/user/login",
    data
  );
  return response.data;
};

/**
 * Initiates the Google OAuth flow by redirecting the user.
 * GET /auth/user/google
 */
export const initiateGoogleLogin = (): void => {
  window.location.href = `${API_URL}/auth/google`;
};

/**
 * Sends a password reset link to the user's email.
 * POST /auth/user/forgot-password
 */
export const forgotPassword = async (
  data: ForgotPasswordPayload
): Promise<ApiResponse<{ message: string }>> => {
  const response = await axiosClient.post<ApiResponse<{ message: string }>>(
    "/auth/user/forgot-password",
    data
  );
  return response.data;
};

/**
 * Resets the user's password using a token.
 * POST /auth/user/reset-password
 */
export const resetPassword = async (
  data: ResetPasswordPayload
): Promise<ApiResponse<{ message: string }>> => {
  const response = await axiosClient.post<ApiResponse<{ message: string }>>(
    "/auth/user/reset-password",
    data
  );
  return response.data;
};

/**
 * Fetches the currently authenticated user's profile.
 * NOTE: This assumes you will add a GET /auth/user/me endpoint protected by the SessionGuard.
 */
export const getCurrentUser = async (): Promise<ApiResponse<User>> => {
  const response = await axiosClient.get<ApiResponse<User>>("/auth/user/me");
  return response.data;
};

/**
 * Verifies a user's email using a token.
 * POST /auth/user/verify-email
 */
export const verifyEmail = async (
  token: string
): Promise<ApiResponse<{ message: string }>> => {
  const response = await axiosClient.post<ApiResponse<{ message: string }>>(
    "/auth/user/verify-email",
    { token }
  );
  return response.data;
};

/**
 * Logs out the current user by clearing their session.
 * POST /auth/user/logout (This endpoint needs to exist on your backend)
 */
export const logout = async (): Promise<ApiResponse<{ message: string }>> => {
  // This endpoint should invalidate the session cookie on the backend.
  const response = await axiosClient.post<ApiResponse<{ message: string }>>(
    "/auth/user/logout"
  );
  return response.data;
};

/**
 * Resends the verification email to the currently logged-in user.
 * POST /auth/user/resend-verification
 */
export const resendVerificationEmail = async (): Promise<
  ApiResponse<{ message: string }>
> => {
  const response = await axiosClient.post<ApiResponse<{ message: string }>>(
    "/auth/user/resend-verification"
  );
  return response.data;
};

/**
 * Updates the currently authenticated user's profile.
 * PATCH /auth/user/me
 */
export const updateUserProfile = async (
  data: UpdateUserProfilePayload
): Promise<ApiResponse<User>> => {
  const response = await axiosClient.patch<ApiResponse<User>>(
    "/auth/user/me",
    data
  );
  return response.data;
};
