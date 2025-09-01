import React from "react";
import InterConnectCards from "@/components/shared/Atoms/Button-Atoms/InterConnectCards";

export default function AdInter() {
  const buttons = [
    {
      title: "Data",
      url: "/our-work/data",
    },
    {
      title: "Advocacy",
      url: "/our-work/advocacy",
    },
    {
      title: "Interventions",
      url: "/our-work/interventions",
    },
  ];

  const colors = ["#B7C8F4", "#3F5CA8", "#B7C8F4"];  
  const textColors = ["#000000", "#ffffff", "#000000"];
  return (
    <div className="w-[70%] flex flex-col justify-center items-center  h-[fixed] mx-auto pb-8 ">
      <InterConnectCards
        items={buttons}
        colors={colors}
        textColor={textColors}
      />
    </div>
  );
}
