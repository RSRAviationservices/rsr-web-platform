"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Mail, ShieldCheck, Zap, Loader2 } from "lucide-react";
import {
  useCurrentUser,
  useResendVerificationEmail,
  useUpdateUserProfile,
} from "@/app/api/auth/authHooks";
import Image from "next/image";
import AccountSettingsSkeleton from "./loaders/AccountSettingsSkeleton";

export default function AccountSettingsTab() {
  // 1. Data Fetching & Mutation Hooks
  const { data: userResponse, isLoading, isError } = useCurrentUser();
  const user = userResponse?.data;

  const resendVerificationMutation = useResendVerificationEmail();
  const { mutate: updateUser, isPending: isUpdating } = useUpdateUserProfile(); // Our new hook

  // 2. State for Form Inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        organization: user.organization || "",
      });
    }
  }, [user]);

  // 3. Handler to call the mutation
  const handleSaveChanges = () => {
    updateUser(formData);
  };

  if (isLoading) {
    return <AccountSettingsSkeleton />;
  }

  if (isError || !user) {
    return <div>Could not load user data. Please try again later.</div>;
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>
            Update your personal and organizational details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization">Organization (Optional)</Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, organization: e.target.value })
              }
            />
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6 flex justify-end">
          {/* Update button with loading state */}
          <Button onClick={handleSaveChanges} disabled={isUpdating}>
            {isUpdating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </CardFooter>
      </Card>

      {/* --- Login & Security Card --- */}
      <Card>
        <CardHeader>
          <CardTitle>Login & Security</CardTitle>
          <CardDescription>
            Manage your login credentials and security settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Email Address</Label>
            <div className="flex items-center gap-4">
              <Input type="email" value={user.email} disabled />
              {user.isEmailVerified ? (
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  <ShieldCheck className="mr-1 h-3 w-3" /> Verified
                </Badge>
              ) : (
                <Badge variant="destructive">Not Verified</Badge>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Authentication Method</Label>
            <div className="flex items-center gap-2 text-sm text-zinc-600 p-3 bg-stone-50 rounded-md border">
              {user.authProvider === "google" ? (
                <Image
                  src={"/icons/google.png"}
                  width={20}
                  height={20}
                  alt={"Google Authentication Icon"}
                />
              ) : (
                <Mail className="h-4 w-4" />
              )}
              <span className="capitalize">
                Signed up with {user.authProvider || "Email"}
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6 flex justify-end items-center">
          {/* The password inputs are removed, linking to the forgot password page instead */}
          <Button asChild variant="default">
            <Link href="/forgot-password">Reset Password</Link>
          </Button>
        </CardFooter>
      </Card>

      {/* --- Email Verification Notice (Updated Style) --- */}
      {!user.isEmailVerified && (
        <Card className="border-zinc-200 bg-zinc-50">
          <CardHeader className="flex-row items-center gap-4">
            <div>
              <CardTitle className="text-zinc-900">Verify Your Email</CardTitle>
              <CardDescription className="text-zinc-600">
                Please check your inbox for a verification link to secure your
                account.
              </CardDescription>
            </div>
          </CardHeader>
          <CardFooter>
            <Button
              variant="link"
              className="p-0 text-blue-600 font-semibold"
              onClick={() => resendVerificationMutation.mutate()}
              disabled={resendVerificationMutation.isPending}
            >
              {resendVerificationMutation.isPending
                ? "Sending..."
                : "Resend verification email"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
