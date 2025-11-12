import React from "react";
import ServicesHeader from "./containers/ServicesHeader";
import ServicesSection from "./containers/ServiceProcess";
import IndustriesSection from "./containers/IndustriesSection";
import FinalServiceCTA from "./containers/FinalServiceCTA";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeader />
      <ServicesSection />
      <IndustriesSection />
      <FinalServiceCTA />
    </main>
  );
}
