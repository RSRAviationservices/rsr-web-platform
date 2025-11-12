"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import AccountSettingsTab from "./components/AccountSettingsTab";
import MyQuotesTab from "./components/MyQuotesTab";
import { useCurrentUser } from "@/app/api/auth/authHooks";
import { Skeleton } from "@/app/components/ui/skeleton";

export default function ProfilePage() {
  const { data: userResponse, isLoading, isError } = useCurrentUser();
  const router = useRouter();
  const user = userResponse?.data;

  useEffect(() => {
    if (!isLoading && (isError || !user)) {
      router.push("/login");
    }
  }, [isLoading, isError, user, router]);

  if (isLoading || !user) {
    return (
      <main className="bg-stone-50 min-h-screen py-12 sm:py-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <Skeleton className="h-9 w-64" />
            <Skeleton className="h-5 w-80 mt-2" />
          </header>
          <Skeleton className="h-10 w-80" />
          <Skeleton className="h-96 w-full mt-6" />
        </div>
      </main>
    );
  }

  return (
    <main className="bg-stone-50 min-h-screen py-12 sm:py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Welcome back, {user.firstName}!
          </h1>
          <p className="mt-1 text-zinc-500">
            Manage your account settings and view your quote history.
          </p>
        </header>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:w-80">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="quotes">My Quotes</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-6">
            <AccountSettingsTab />
          </TabsContent>
          <TabsContent value="quotes" className="mt-6">
            <MyQuotesTab />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
