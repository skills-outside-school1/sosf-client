import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import MoreAboutUs from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import PillSubHero from "../Pillars-Atoms/PillSubHero";
import PillSub from "../Pillars-Atoms/PillSub";

export default function PillarsContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[8rem] ">
      <Hero />
      <PillSub/>
      <PillSubHero />
      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
