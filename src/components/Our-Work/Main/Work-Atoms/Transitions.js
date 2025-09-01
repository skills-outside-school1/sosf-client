import React from "react";
import { TextTransitions } from "@/components/shared/Atoms/Text-Transitions/Transition";

export function Transitions() {
  return (
    <div className="flex justify-center  absolute  mt-[2rem]  items-center w-full  h-[fixed]     md:relative     md:mt-5     md:right-[6rem]">
      <TextTransitions text1="Interventions" text2="Data" text3="Advocacy" />
    </div>
  );
}
