import React from "react";
import HowWeWorkSection from "./containers/HowWeWorkSection";
import LeadershipSection from "./containers/LeadershipSection";
import TeamHeader from "./containers/TeamHeader";

function TeamsPage() {
  return (
    <main className="bg-white">
      <TeamHeader />
      <LeadershipSection />
      <HowWeWorkSection />
    </main>
  );
}

export default TeamsPage;
