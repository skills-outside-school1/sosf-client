import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import GrantsHero from "@/components/Our-Work/Interventions/grants/grants-Atoms/GrantsHero";
import Catalyzing from "@/components/Our-Work/Interventions/grants/grants-Atoms/Catalyzing";
import { ProgramDetailsSection } from "@/components/Our-Work/Interventions/grants/grants-Atoms/GrantProgrms";

import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";

const GrantsContainer = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col mb-[1rem]  gap-y-[80px]">
      <Hero />
      <GrantsHero />
      <Catalyzing />
      <ProgramDetailsSection />

      <Subscribe />
    </div>
  );
};

export default GrantsContainer;
