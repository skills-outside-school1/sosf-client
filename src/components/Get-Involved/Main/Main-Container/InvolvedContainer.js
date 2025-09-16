import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import MainSub from "../Main-Atoms/MainSub";
import { InvolvementCards } from "@/components/involvement-cards"
import { StructureChart } from "@/components/structure-chart"
import { LearnMoreSection } from "@/components/learn-more-section"
import { NewsletterSurvey } from "@/components/newsletter-survey"


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
