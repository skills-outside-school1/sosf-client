import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import FocusSubHero from "../Focus-Areas-Atoms/FocusSubHero";
import MoreAboutUs from "../../Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";
import MelFramework from "../Focus-Areas-Atoms/MelFramework";
import Interventions from "../Focus-Areas-Atoms/Interventions";
import Advocacy from "../Focus-Areas-Atoms/Advocacy";
import SocialEconomicRegister from "../Focus-Areas-Atoms/SocialEconomicRegister";

export default function FocusContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden flex flex-col gap-y-[10px] md:gap-y-[0px] justify-start items-start mb-[8rem] ">
      <Hero />
      <FocusSubHero />
      <Advocacy />
      <SocialEconomicRegister />
      <MelFramework />
      <Interventions />
      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
