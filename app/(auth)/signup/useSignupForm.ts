// app/(routes)/(auth)/signup/useSignupForm.ts
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSignup } from "@/app/api/auth/authHooks";
import { initiateGoogleLogin } from "@/app/api/auth/authService";

// 1. Define the validation schema for the form fields.
const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  organization: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// 2. Infer the TypeScript type from the Zod schema.
type SignupFormValues = z.infer<typeof signupSchema>;

// 3. Create the custom hook to manage all form logic.
export const useSignupForm = () => {
  const signupMutation = useSignup();

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      organization: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    signupMutation.mutate(data);
  };

  const onGoogleSignup = () => {
    initiateGoogleLogin();
  };

  return {
    form,
    onSubmit,
    onGoogleSignup,
    isLoading: signupMutation.isPending,
  };
};
