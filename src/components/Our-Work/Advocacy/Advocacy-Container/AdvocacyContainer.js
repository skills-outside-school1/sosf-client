import React from "react";

import AdvocacyHeroSection from "../Advocacy-Atoms/AdvocacyHeroSection";
import AdvocacySevenWaysSection from "../Advocacy-Atoms/AdvocacySevenWaysSection";
import AdvocacySystemsSection from "../Advocacy-Atoms/AdvocacySystemsSection";
import AdvocacyInActionSection from "../Advocacy-Atoms/AdvocacyInActionSection";
import Hero from "@/components/home/Home-Atoms/Hero";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";

const AdvocacyContainer = () => {
  return (
    <div className="min-h-screen bg-white font-inter flex flex-col gap-y-[80px]">
      <Hero />
      <AdvocacyHeroSection />
      <AdvocacySevenWaysSection />
      <AdvocacySystemsSection />
      <AdvocacyInActionSection />
<<<<<<< HEAD
      <Subscribe/>
=======
      <Subscribe />
>>>>>>> fce8f547dc7cfb431e0f25381ec401519f076fea
    </div>
  );
};

export default AdvocacyContainer;
