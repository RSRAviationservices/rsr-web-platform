// app/api/auth/authHooks.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { queryClient } from "../queryClient";
import * as authService from "./authService";
import {
  LoginPayload,
  SignupPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  UpdateUserProfilePayload,
} from "./types";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: authService.getCurrentUser,
  });
};

// Hook for handling user signup
export const useSignup = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: SignupPayload) => authService.signup(data),
    onSuccess: () => {
      toast.success("Account created!", {
        description: "Please check your email to verify your account.",
      });
      router.push("/verify-email");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Hook for handling user login
export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: LoginPayload) => authService.login(data),
    onSuccess: () => {
      toast.success("Logged in successfully!");
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      router.push("/");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Hook for handling forgot password
export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (data: ForgotPasswordPayload) =>
      authService.forgotPassword(data),
    onSuccess: (response) => {
      toast.success("Password reset link sent!", {
        description:
          response.data?.message ||
          "If an account exists, you will receive an email.",
      });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Hook for handling reset password
export const useResetPassword = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: ResetPasswordPayload) => authService.resetPassword(data),
    onSuccess: (response) => {
      toast.success(
        response.data?.message || "Password has been reset successfully!"
      );
      router.push("/login");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Hook for handling email verification
export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (token: string) => authService.verifyEmail(token),
    onSuccess: () => {
      toast.success("Email verified successfully!", {
        description: "You can now log in with your credentials.",
      });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Hook for handling user logout
export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      toast.success("Logged out successfully.");
      // Invalidate all queries to clear user data and refetch public data
      queryClient.invalidateQueries();
      router.push("/login");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Hook for resending the verification email
export const useResendVerificationEmail = () => {
  return useMutation({
    mutationFn: () => authService.resendVerificationEmail(),
    onSuccess: (response) => {
      toast.success("Verification email sent!", {
        description: response.data?.message || "Please check your inbox.",
      });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

/**
 * Hook for updating the user's profile information.
 */
export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateUserProfilePayload) =>
      authService.updateUserProfile(data),
    onSuccess: () => {
      toast.success("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
