"use client";

import React from "react";
import Link from "next/link";
import { useCurrentUser, useLogout } from "@/app/api/auth/authHooks";
import { Button } from "@/app/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { Skeleton } from "@/app/components/ui/skeleton";
import { User, LogOut } from "lucide-react";
import { Separator } from "@/app/components/ui/separator";

export default function UserProfile() {
  const { data: userResponse, isLoading, isError } = useCurrentUser();
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  if (isLoading) {
    return <Skeleton className="h-10 w-10 rounded-full" />;
  }

  if (isError || !userResponse?.success) {
    return (
      <Button asChild variant="ghost" className="rounded-full font-semibold">
        <Link href="/login">Login</Link>
      </Button>
    );
  }

  const user = userResponse.data;
  const initials = `${user?.firstName?.[0] || ""}${
    user?.lastName?.[0] || ""
  }`.toUpperCase();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative h-10 w-10 rounded-full">
          <Avatar className="h-full w-full">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 z-[101] p-2.5" align="end">
        <div className="flex flex-col">
          <div className="p-1.5">
            <p className="font-bold text-zinc-900">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-sm text-zinc-500">{user?.email}</p>
          </div>
          <Separator className="my-2 h-px bg-zinc-200" />
          <div className="flex flex-col space-y-1 p-1">
            {/* --- UPDATED: The "My Account" button is now a Link --- */}
            <Link href="/profile" passHref>
              <Button
                variant="ghost"
                className="w-full justify-start p-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
              >
                <User size={16} className="mr-2" />
                <span>My Account</span>
              </Button>
            </Link>

            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start px-2 py-1.5 font-medium text-red-600 hover:bg-red-50 hover:text-red-600"
              disabled={logoutMutation.isPending}
            >
              <LogOut size={16} className="mr-2" />
              <span>
                {logoutMutation.isPending ? "Logging out..." : "Logout"}
              </span>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
