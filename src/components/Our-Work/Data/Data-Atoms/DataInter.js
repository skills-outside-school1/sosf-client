import React from "react";
import InterConnectCards from "@/components/shared/Atoms/Button-Atoms/InterConnectCards";

export default function DataInter() {
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

  const colors = ["#3F5CA8", "#B7C8F4", "#B7C8F4"];
  const textColors= ["white", "#000000", "#000000"];
  return (
    <div className="w-[70%] flex flex-col justify-center items-center  h-[fixed] mx-auto pb-8 ">
      <InterConnectCards items={buttons} colors={colors} textColor={textColors} />
    </div>
  );
}
