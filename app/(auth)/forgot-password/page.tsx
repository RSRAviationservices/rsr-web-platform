// app/(routes)/(auth)/forgot-password/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useForgotPasswordForm } from "./useForgotPasswordForm";

export default function ForgotPasswordPage() {
  const { form, onSubmit, isLoading } = useForgotPasswordForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email and we will send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending Link..." : "Send Reset Link"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link
              href="/login"
              className="inline-flex items-center gap-1 underline"
            >
              <ArrowLeft size={14} /> Back to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
