import Hero from "@/components/home/Home-Atoms/Hero";
import React from "react";
import HeroChart from "../Atoms/hero-chart";

import PartnerSection from "../Atoms/partner-section";
import InvestmentSection from "../Atoms/investment-section";
import GovernanceSection from "../Atoms/governance-section";
import ParticipationSection from "../Atoms/participation-section";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import WorkNav from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import Pathway from "@/components/Get-Involved/Main/Main-Atoms/Pathway"

// import InteractiveMap from "../Home-Atoms/InteractiveMap";

export default function StructureChartContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col  justify-start items-start   mb-[2rem] ">
      <HeroChart />
      <PartnerSection />
      <InvestmentSection />
      <GovernanceSection />
      <ParticipationSection />
      <Pathway />
      <WorkNav />
      <Subscribe />
    </div>
  );
}
