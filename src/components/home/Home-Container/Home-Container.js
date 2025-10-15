import React from "react";
import Hero from "../Home-Atoms/Hero";
import SubHero from "../Home-Atoms/Subhero";
import SDG from "../Home-Atoms/SDGs";
import GlobalImpact from "../Home-Atoms/Global-Impact";
import GetInvolved from "../Home-Atoms/Get-Involved";

import MissionVision from "../Home-Atoms/MissionVision";
import CollaborateWithUs from "../Home-Atoms/Collaborate-With-Us";
import PartnerSlide from "../Home-Atoms/Partnar-Slider";
import SES from "../Home-Atoms/3Es";
import GetInTouch from "../Home-Atoms/Get-In-Touch";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
// import InteractiveMap from "../Home-Atoms/InteractiveMap";

export default function HomeContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] justify-start items-start   mb-[2rem] ">
      <Hero />
      <SubHero />
      <MissionVision />
      <SES />
      <SDG />
      <GlobalImpact />

      {/* commented out the Interactive Map */}
      {/* <InteractiveMap /> */}
      <GetInvolved />
      <PartnerSlide />
      <GetInTouch />
      <Subscribe />
    </div>
  );
}
