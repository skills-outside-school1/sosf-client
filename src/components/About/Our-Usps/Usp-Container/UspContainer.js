import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import Usps from "../Usp-Atoms/Usps";
import MoreAboutUs from "../../Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import UspSubHero from "../Usp-Atoms/UspSubHero";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";

export default function UspContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[8rem] ">
      <Hero />
      <UspSubHero />
      <Usps />
      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
