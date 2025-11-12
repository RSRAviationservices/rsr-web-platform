// app/(routes)/(auth)/reset-password/page.tsx
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
import { KeyRound } from "lucide-react";
import { useResetPasswordForm } from "./useResetPasswordForm";

export default function ResetPasswordPage() {
  const { form, onSubmit, isLoading } = useResetPasswordForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <KeyRound className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="mt-4 text-center text-2xl">
            Set a New Password
          </CardTitle>
          <CardDescription className="text-center">
            Your new password must be different from previous passwords.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                {...register("newPassword")}
              />
              {errors.newPassword && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.newPassword.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Remember your password?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
