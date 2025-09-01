import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import FocusSubHero from "../Focus-Areas-Atoms/FocusSubHero";
import MoreAboutUs from "../../Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import FocusAccordions from "../Focus-Areas-Atoms/FocusAccordions";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";
import FocusSpecial from "../Focus-Areas-Atoms/FocusSpecial";
import MelFramework from "../Focus-Areas-Atoms/MelFramework";
import Interventions from "../Focus-Areas-Atoms/Interventions";

export default function FocusContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[8rem] ">
      <Hero />
      <FocusSubHero />
      <FocusSpecial />
      <MelFramework />
      <FocusAccordions />
      <Interventions />
      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
