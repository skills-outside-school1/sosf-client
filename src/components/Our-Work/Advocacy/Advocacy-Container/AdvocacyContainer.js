import React from "react";

import AdvocacyHeroSection from "../Advocacy-Atoms/AdvocacyHeroSection";
import Hero from "@/components/home/Home-Atoms/Hero";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import AdvocacySeven from "../Advocacy-Atoms/AdvocacySeven";
import AdvocacySystem from "../Advocacy-Atoms/AdvocacySystem";
import AdvocacyAction from "../Advocacy-Atoms/AdvocacyAction";

const AdvocacyContainer = () => {
  return (
    <div className="min-h-screen flex flex-col   gap-y-[80px]">
      <Hero />
      <AdvocacyHeroSection />
      <AdvocacySeven />
      {/* <AdvocacySystem />
      <AdvocacyAction /> */}
      <Subscribe />
    </div>
  );
};

export default AdvocacyContainer;
