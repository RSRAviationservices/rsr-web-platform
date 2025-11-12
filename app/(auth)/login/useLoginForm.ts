// app/(routes)/(auth)/login/useLoginForm.ts
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLogin } from "@/app/api/auth/authHooks";
import { initiateGoogleLogin } from "@/app/api/auth/authService";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"), 
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const useLoginForm = () => {
  const loginMutation = useLogin();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };

  const onGoogleLogin = () => {
    initiateGoogleLogin();
  };

  return {
    form,
    onSubmit,
    onGoogleLogin,
    isLoading: loginMutation.isPending,
  };
};