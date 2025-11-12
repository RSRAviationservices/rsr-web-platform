"use client";

import React, { useState } from "react";
import { useProfileModalStore } from "@/app/store/useProfileModalStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { User, FileText, X } from "lucide-react";
import AccountSettings from "./ui/AccountSettings";
import MyQuotes from "./ui/MyQuotes";

export default function ProfileModal() {
  const { isOpen, closeModal } = useProfileModalStore();
  const [activeTab, setActiveTab] = useState("account");

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-4xl h-[80vh] flex p-0">
        {/* --- Left Sidebar Navigation --- */}
        <div className="w-1/4 bg-stone-50 border-r border-stone-200 p-6 flex flex-col">
          <DialogHeader className="mb-8">
            <DialogTitle className="text-xl">Settings</DialogTitle>
          </DialogHeader>
          <nav className="flex flex-col gap-2">
            <button
              onClick={() => setActiveTab("account")}
              className={`flex items-center gap-3 rounded-md p-3 text-sm font-medium transition-colors ${
                activeTab === "account"
                  ? "bg-blue-100 text-blue-700"
                  : "text-zinc-600 hover:bg-stone-200"
              }`}
            >
              <User size={18} />
              <span>Account</span>
            </button>
            <button
              onClick={() => setActiveTab("quotes")}
              className={`flex items-center gap-3 rounded-md p-3 text-sm font-medium transition-colors ${
                activeTab === "quotes"
                  ? "bg-blue-100 text-blue-700"
                  : "text-zinc-600 hover:bg-stone-200"
              }`}
            >
              <FileText size={18} />
              <span>My Quotes</span>
            </button>
          </nav>
        </div>

        {/* --- Right Content Area --- */}
        <div className="w-3/4 p-8 overflow-y-auto">
          {activeTab === "account" && <AccountSettings />}
          {activeTab === "quotes" && <MyQuotes />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
