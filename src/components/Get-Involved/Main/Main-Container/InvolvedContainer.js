import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import Subscribe from "@/components/Contacts/Contact-Atoms/Subscribe";
import MainSub from "../Main-Atoms/MainSub";
import ContextNavigation from "../Main-Atoms/Context-Navigations";
import ContextSwitcher from "../Main-Atoms/contextswitcher";
import MoreAboutUs from "@/components/About/Who-We-Are/Who-We-Are-Atoms/MoreAboutUs";
import GetInvolvedChart from "../Main-Atoms/GetInvolvedChart";

// update component
import InvolvementCards from "@/components/involvement-cards"
// import "@/components/learn-more-section"
// import "@/components/newsletter-survey"
// import  "@/components/structure-chart"


export default function InvolvedContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[2rem] ">
      <Hero />
      <MainSub />
      {/* <ContextNavigation /> */}
      <InvolvementCards />

      {/* <GetInvolvedChart />
      <ContextSwitcher />
      <MoreAboutUs />
      <Subscribe /> */}
    </div>
  );
}
