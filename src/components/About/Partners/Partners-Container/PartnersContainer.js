import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import MoreAboutUs from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import PartSubHero from "../Partners-Atoms/PartSubHero";
import PartFlexCards from "../Partners-Atoms/PartFlexCards";
import Partners from "../Partners-Atoms/Partners";
import PartClientSwiper from "../Partners-Atoms/PartClientSwiper";
import PartnersSlider from "../Partners-Atoms/PartnersCarousel";

export default function PartnersContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[2rem] ">
      <Hero />
      <PartSubHero />
      <PartFlexCards />
      <Partners />

      <PartnersSlider />
      <PartClientSwiper />
      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
