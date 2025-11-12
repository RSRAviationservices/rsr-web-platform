"use client";

import React from "react";
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
import { Separator } from "@/app/components/ui/separator";

// This component would receive the user data as props from a parent that fetches it.
// For now, we'll use placeholder data.
const user = {
  firstName: "Suresh",
  lastName: "Rahangdale",
  email: "suresh@rsraviation.com",
  organization: "RSR Aviation",
  isEmailVerified: false,
};

export default function AccountSettings() {
  return (
    <div className="space-y-8">
      {/* --- Profile Information --- */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal details here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue={user.firstName} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue={user.lastName} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue={user.email} disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization">Organisation (Optional)</Label>
            <Input id="organization" defaultValue={user.organization} />
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6 flex justify-end">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      {/* --- Password Settings --- */}
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Change your password here. After changing, you will be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" />
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6 flex justify-end">
          <Button>Update Password</Button>
        </CardFooter>
      </Card>

      {/* --- Email Verification --- */}
      {!user.isEmailVerified && (
        <Card className="border-yellow-300 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-yellow-900">Verify Your Email</CardTitle>
            <CardDescription className="text-yellow-800">
              Your email address is not verified. Please check your inbox for a
              verification link.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" className="p-0 text-yellow-900">
              Resend verification email
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
