import ReuseHero from "@/components/shared/Atoms/Hero-Atoms/ReusableMaps/Hero";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[fixed]">
      <ReuseHero
        overlayOpacity="bg-opacity-5"
        //  backgroundImage="assets/maps/MapChart_Map.png"
        backgroundImage="/assets/images/home/1010.png"
      />
    </div>
  );
}
