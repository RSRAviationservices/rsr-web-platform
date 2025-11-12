import React from "react";
import AboutHeader from "./container/AboutHeader";
import AwardsSection from "./container/AwardsSection";
import CapabilitiesSection from "./container/CapabilitiesSection";
import OurStorySection from "./container/OurStorySection";
import TimelineSection from "./container/TimelineSection";
import WhatDrivesUsSection from "./container/WhatDrivesUsSection";

export default function AboutUsPage() {
  return (
    <main className="bg-white">
      <AboutHeader />
      <OurStorySection />
      <TimelineSection />
      <WhatDrivesUsSection />
      <CapabilitiesSection />
      <AwardsSection />
    </main>
  );
}
