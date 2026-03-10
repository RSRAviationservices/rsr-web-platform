"use client";

import { useEffect, useRef } from "react";
import axiosClient from "@/app/api/axiosClient";

export default function AnalyticsTracker() {
  const tracked = useRef(false);

  useEffect(() => {
    // Prevent double tracking in development StrictMode
    if (tracked.current) return;
    tracked.current = true;

    // Only track if we have a valid API URL and we're not in a basic dev environment
    // where the backend might not be running.
    if (!process.env.NEXT_PUBLIC_API_URL) return;

    const trackVisit = async () => {
      try {
        // Attempt to track visit. If this fails (e.g. 404 or Network Error),
        // we silent the error in production to avoid cluttering the console.
        await axiosClient.post("/analytics/track");
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn("Analytics tracking failed (likely missing endpoint):", error);
        }
      }
    };

    trackVisit();
  }, []);

  return null;
}
