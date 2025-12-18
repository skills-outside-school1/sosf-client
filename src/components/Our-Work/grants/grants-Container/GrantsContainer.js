import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import GrantsHero from "@/components/Our-Work/grants/grants-Atoms/GrantsHero";

const GrantsContainer = () => {
  return (
    <div className="w-full h-[fixed] overflow-hidden flex flex-col mb-[1rem] ">
        <Hero />
        <GrantsHero />

    </div>
  );
};

export default GrantsContainer;