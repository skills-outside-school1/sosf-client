import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import DataInter from "../Data-Atoms/DataInter";
import DataSub from "../Data-Atoms/DataSub";
import DataScrollLinks from "../Data-Atoms/DataScrollLinks";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import WorkNav from "../../Main/Work-Atoms/WorkNav";
import { Element } from "react-scroll";
import EndToEnd from "../Data-Atoms/EndToEnd";
import Consultancy from "../Data-Atoms/Consultancy";
import ResearchThough from "../Data-Atoms/ResearchThough";

export default function DataContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[2rem] ">
      <DataSub />
      <DataScrollLinks />
      <ResearchThough />
    </div>
  );
}
