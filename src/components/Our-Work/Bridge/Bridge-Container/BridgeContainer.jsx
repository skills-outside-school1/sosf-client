import React from "react";
import { ProgramDetailsSection } from "../Bridge-Atoms/ProgramDetailsSection";
import { ProgramOverviewSection } from "../Bridge-Atoms/ProgramOverviewSection";
import { ResourcesSection } from "../Bridge-Atoms/ResourcesSection";
import CallToActionSection from "../Bridge-Atoms/CallToActionSection";
import { TestimonialsSection } from "../Bridge-Atoms/TestimonialsSection";
import Hero from "@/components/home/Home-Atoms/Hero";
import BridgeHeroSection from "../Bridge-Atoms/BridgeHeroSection";

const BridgeContainer = () => {
  return (
    <div>
      <Hero />
      <BridgeHeroSection />
      <ProgramDetailsSection />
      <ProgramOverviewSection />
      <ResourcesSection />
      <CallToActionSection />
      <TestimonialsSection />
    </div>
  );
};

export default BridgeContainer;
