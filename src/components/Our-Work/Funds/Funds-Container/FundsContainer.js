import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import Hero from "@/components/home/Home-Atoms/Hero";
import React from "react";
import Fundshero from "../Funds-Atoms/Hero";
import TheImpact from "../Funds-Atoms/TheImpact";

import Pri from "../Funds-Atoms/Pri";
import IIM from "../Funds-Atoms/IIM";
import VentureP from "../Funds-Atoms/VentureP";
import MissionRI from "../Funds-Atoms/MissionRI";
import Parallax from "../Funds-Atoms/Parallax";
import PartnerSosf from "../Funds-Atoms/PartnerSosf";

export default function FundsContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden  gap-y-[80px] flex flex-col  justify-start items-start    ">
      <Hero />
      <Fundshero />
      <TheImpact />
      <IIM />
      <Pri />
      <VentureP />
      <MissionRI />
      <Parallax />
      <PartnerSosf />
      <Subscribe />
    </div>
  );
}
