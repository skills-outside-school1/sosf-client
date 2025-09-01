import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import WhoWeAreSubHero from "../Who-We-Are-Atoms/Who-We-Are-SubHero";
import Overview from "../Who-We-Are-Atoms/Overview";
import MoreAboutUs from "../Who-We-Are-Atoms/MoreAboutUs";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";
import TextTransition from "../Who-We-Are-Atoms/TextTransition";

import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";

export default function WhoWeAreContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col    gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[8rem] ">
      <Hero />
      <WhoWeAreSubHero />
      <Overview />
      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
