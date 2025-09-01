import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import CoreSubHero from "../Core-Values-Atoms/SubHero";
import CoreValuesSwitch from "../Core-Values-Atoms/Integrity";
import MoreAboutUs from "../../Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import CoreTabs from "../Core-Values-Atoms/CoreTabs";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";

export default function CoreValuesContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col  gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[8rem] ">
      <Hero />
      <CoreTabs />
      <GlobalComponent/>
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
