"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useVerifyEmail } from "@/app/api/auth/authHooks";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { LoaderCircle, MailCheck, AlertTriangle } from "lucide-react";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { mutate: verifyEmail, isPending, isSuccess, isError } = useVerifyEmail();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (token) {
      verifyEmail(token);
    }
  }, [token, verifyEmail]);

  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (isSuccess && countdown === 0) {
      router.push("/login");
    }
  }, [isSuccess, countdown, router]);

  const renderContent = () => {
    if (isPending) {
      return (
        <>
          <CardTitle className="text-2xl">Verifying your email...</CardTitle>
          <CardContent className="flex flex-col items-center gap-4 pt-6">
            <LoaderCircle className="h-12 w-12 animate-spin text-zinc-500" />
            <CardDescription>Please wait while we confirm your email address.</CardDescription>
          </CardContent>
        </>
      );
    }

    if (isSuccess) {
      return (
        <>
          <CardTitle className="text-2xl">Verification Successful!</CardTitle>
          <CardContent className="flex flex-col items-center gap-4 pt-6">
            <MailCheck className="h-12 w-12 text-green-600" />
            <CardDescription>
              You will be redirected to the login page in {countdown} seconds.
            </CardDescription>
            <Button asChild className="w-full">
              <Link href="/login">Login Now</Link>
            </Button>
          </CardContent>
        </>
      );
    }

    if (isError || !token) {
      return (
        <>
          <CardTitle className="text-2xl">Verification Failed</CardTitle>
          <CardContent className="flex flex-col items-center gap-4 pt-6">
            <AlertTriangle className="h-12 w-12 text-red-600" />
            <CardDescription>
              This link is either invalid or has expired. Please try again or request a new link.
            </CardDescription>
            <Button asChild variant="outline" className="w-full">
              <Link href="/login">Back to Login</Link>
            </Button>
          </CardContent>
        </>
      );
    }

    // Default state if no token is present initially
    return (
        <>
         <CardTitle className="text-2xl">Invalid Link</CardTitle>
         <CardContent className="flex flex-col items-center gap-4 pt-6">
             <AlertTriangle className="h-12 w-12 text-red-600" />
            <CardDescription>Invalid Verification link. Please use the link sent to your email.</CardDescription>
         </CardContent>
        </>
    );
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 p-4">
      <Card className="mx-auto max-w-sm text-center">
        <CardHeader>
            {renderContent()}
        </CardHeader>
      </Card>
    </main>
  );
}

