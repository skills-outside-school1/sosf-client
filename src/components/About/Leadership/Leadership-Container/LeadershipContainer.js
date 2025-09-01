import React, { useEffect } from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import MoreAboutUs from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import GlobalComponent from "@/components/shared/Atoms/GlobalComponent";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import LeaderSubHero from "../Leadership-Atoms/LeaderSubHero";
import LeadershipCards from "../Leadership-Atoms/LeadershipCards";
import { Element, scroller } from "react-scroll";

export default function LeadershipContainer() {
  useEffect(() => {
    // Check if there's a hash in the URL
    const section = window.location.hash.substring(1); // Extract hash without '#'
    if (section) {
      scroller.scrollTo(section, {
        smooth: true,
        offset: -70, // Adjust based on your layout (e.g., for sticky headers)
        duration: 500, // Smooth scrolling duration
      });
    }
  }, []);

  return (
    <div className="w-full h-auto overflow-hidden flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start mb-[2rem]">
      <Hero />
      <LeaderSubHero />
      {/* Target section for scrolling */}
      <Element name="executive-leadership" className="element w-full  mx-auto">
      <LeadershipCards />
      </Element>
      <GlobalComponent />
      <MoreAboutUs />
      <Subscribe />
    </div>
  );
}
