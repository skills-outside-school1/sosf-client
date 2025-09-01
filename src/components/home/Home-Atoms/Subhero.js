import React from "react";
import SubHerro from "@/components/shared/Atoms/Subhero-Atoms/Subhero";

export default function SubHero() {
  const itemsData = [
    {
      heading1: " ",
      heading2: "Skills Outside School Foundation",
      // heading2: <span className="text-pink" >Skills  <span className="text-cyan "> Outside</span>  <span className="text-blue">School </span> <span className="text-yellow"> Foundation </span> </span> ,
      paragraph:
        "The leading Pan-African Education, Entrepreneurship & Employability organization disrupting development & redefining philanthropy through data, interventions & advocacy.  ",
    },
  ];

  return (
    <div className="w-full h-[fixed]">
      <SubHerro items={itemsData} aos="" />
    </div>
  );
}
