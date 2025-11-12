// app/(routes)/(auth)/forgot-password/useForgotPasswordForm.ts
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForgotPassword } from "@/app/api/auth/authHooks";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const useForgotPasswordForm = () => {
  const forgotPasswordMutation = useForgotPassword();

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    forgotPasswordMutation.mutate(data);
  };

  return {
    form,
    onSubmit,
    isLoading: forgotPasswordMutation.isPending,
  };
};
