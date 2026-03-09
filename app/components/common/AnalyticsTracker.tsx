"use client";

import { useEffect, useRef } from "react";
import axiosClient from "@/app/api/axiosClient";

export default function AnalyticsTracker() {
  const tracked = useRef(false);

  useEffect(() => {
    // Prevent double tracking in development StrictMode
    if (tracked.current) return;
    tracked.current = true;

    const trackVisit = async () => {
      try {
        await axiosClient.post("/analytics/track");
      } catch (error) {
        // Silently fail analytics tracking to not affect UX
        console.error("Analytics tracking failed", error);
      }
    };

    trackVisit();
  }, []);

  return null;
}
