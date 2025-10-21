import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import MoreAboutUs from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import PartSubHero from "../Collaborations-Atoms/PartSubHero";
import PartFlexCards from "../Collaborations-Atoms/PartFlexCards";
import PartClientSwiper from "../Collaborations-Atoms/PartClientSwiper";
import PartnersSlider from "../Collaborations-Atoms/PartnersCarousel";
import Investments from "../Collaborations-Atoms/Investments";

export default function CollaborationsContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[10px] justify-start items-start  mb-[1rem] ">
      <Hero />
      <PartSubHero />
      <PartFlexCards />
      <Investments />
      {/* <Partners /> */}

      <PartnersSlider />
      <PartClientSwiper />
      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
