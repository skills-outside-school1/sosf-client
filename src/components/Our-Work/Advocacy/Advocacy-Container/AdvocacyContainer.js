import React from "react";

import AdvocacyHeroSection from "../Advocacy-Atoms/AdvocacyHeroSection";
import AdvocacySevenWaysSection from "../Advocacy-Atoms/AdvocacySevenWaysSection";
import AdvocacySystemsSection from "../Advocacy-Atoms/AdvocacySystemsSection";
import AdvocacyInActionSection from "../Advocacy-Atoms/AdvocacyInActionSection";
import Hero from "@/components/home/Home-Atoms/Hero";

const AdvocacyContainer = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Hero />
      <AdvocacyHeroSection />
      <AdvocacySevenWaysSection />
      <AdvocacySystemsSection />
      <AdvocacyInActionSection />
    </div>
  );
};

export default AdvocacyContainer;
