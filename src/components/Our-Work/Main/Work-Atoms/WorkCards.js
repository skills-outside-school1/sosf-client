import React from "react";
import DataContainer from "../../Data/Data-Container/DataContainer";
import AdvocacyContainer from "../../Advocacy/Advocacy-Cotainer/AdvocacyContainer";
import InterContainer from "../../Interventions/Interventions-Container/InterContainer";

export default function WorkCards() {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-center items-center gap-y-5 px-2 ">
      <DataContainer />
      <AdvocacyContainer />
      <InterContainer />
    </div>
  );
}
