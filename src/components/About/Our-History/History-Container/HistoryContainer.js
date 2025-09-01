import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import SubHero from "../History-Atoms/SubHero";
import MoreAboutUs from "../../Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import HistoryAccordions from "../History-Atoms/HistoryAccordions";
import Strategy from "../History-Atoms/Strategy";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";

export default function HistoryContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col   gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[8rem] ">
      <Hero />
      <SubHero />
      <HistoryAccordions />
      {/* <Strategy /> */}
      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
