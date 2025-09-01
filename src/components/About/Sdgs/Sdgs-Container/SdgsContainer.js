import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import SdgSubHero from "../Sdgs-Atoms/SdgSubHero";
import MoreAboutUs from "../../Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import SdgsAccordions from "../Sdgs-Atoms/SdgsAccordions";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";

export default function SdgContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[8rem] ">
      <Hero />
      <SdgSubHero />
      <SdgsAccordions/>
      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
