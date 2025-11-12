// app/(routes)/(auth)/reset-password/useResetPasswordForm.ts
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useResetPassword } from "@/app/api/auth/authHooks";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

// 3. Create the custom hook.
export const useResetPasswordForm = () => {
  const resetPasswordMutation = useResetPassword();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      toast.error("Invalid or missing reset token.");
    }
  }, [token]);

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ResetPasswordFormValues) => {
    if (!token) {
      toast.error("Cannot reset password without a valid token.");
      return;
    }
    resetPasswordMutation.mutate({ token, newPassword: data.newPassword });
  };

  return {
    form,
    onSubmit,
    isLoading: resetPasswordMutation.isPending,
  };
};
