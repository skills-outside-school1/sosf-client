import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import PartSubHero from "../Agropreneurs-Atom/PartSubHero";
import WhatWillOffer from "../Agropreneurs-Atom/WhatWillOffer";
import ScalingAcrossAfrican from "../Agropreneurs-Atom/ScalingAcrossAfrican";
import OurAi from "../Agropreneurs-Atom/OurAi";

const AgropreneursContaner = () => {
  return (
    <div className="w-full h-[fixed] overflow-hidden flex flex-col justify-start items-start mb-[1rem] ">
      <Hero />
      <PartSubHero />
      <WhatWillOffer />
      <OurAi />

      <ScalingAcrossAfrican />
    </div>
  );
};

export default AgropreneursContaner;
