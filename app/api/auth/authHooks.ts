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

const getErrorMessage = (error: any, defaultMessage: string): string => {
  const errorObj = error.response?.data?.error;
  if (typeof errorObj?.message === "object" && errorObj.message !== null) {
    return errorObj.message.message || defaultMessage;
  }
  return errorObj?.message || defaultMessage;
};

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
    onError: (error: any) => {
      const message = getErrorMessage(
        error,
        "Signup failed. Please try again."
      );
      toast.error(message);
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
    onError: (error: any) => {
      const message = getErrorMessage(error, "Invalid email or password.");
      toast.error(message);
    },
  });
};

// ... (useForgotPassword and useResetPassword hooks updated similarly)
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
    onError: (error: any) => {
      const message = getErrorMessage(error, "An error occurred.");
      toast.error(message);
    },
  });
};

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
    onError: (error: any) => {
      const message = getErrorMessage(error, "Invalid or expired token.");
      toast.error(message);
    },
  });
};

// New hook for handling email verification
export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (token: string) => authService.verifyEmail(token),
    onSuccess: () => {
      toast.success("Email verified successfully!", {
        description: "You can now log in with your credentials.",
      });
    },
    onError: (error: any) => {
      const message = getErrorMessage(
        error,
        "Verification failed. The link may be invalid or expired."
      );
      toast.error(message);
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
    onError: () => {
      toast.error("Logout failed. Please try again.");
    },
  });
};

// New hook for resending the verification email
export const useResendVerificationEmail = () => {
  return useMutation({
    mutationFn: () => authService.resendVerificationEmail(),
    onSuccess: (data) => {
      toast.success("Verification email sent!", {
        description: data.data?.message || "Please check your inbox.",
      });
    },
    onError: (error: any) => {
      const message = getErrorMessage(
        error,
        "Failed to send email. Please try again later."
      );
      toast.error(message);
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
    onError: (error: any) => {
      const message = getErrorMessage(error, "Failed to update profile.");
      toast.error(message);
    },
  });
};
