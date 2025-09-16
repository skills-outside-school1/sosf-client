import React from "react";
import Hero from "@/components/home/Home-Atoms/Hero";
import MainSub from "../Main-Atoms/MainSub";
import { InvolvementCards } from "@/components/involvement-cards"
import { StructureChart } from "@/components/structure-chart"
import { LearnMoreSection } from "@/components/learn-more-section"
import { NewsletterSurvey } from "@/components/newsletter-survey"


export default function InvolvedContainer() {
  return (
    <div className="w-full h-[fixed] overflow-hidden   flex flex-col gap-y-[100px] md:gap-y-[100px] justify-start items-start    mb-[2rem] ">
      <Hero />
      <MainSub />
      <InvolvementCards />
      <StructureChart />
      <LearnMoreSection />
      <NewsletterSurvey />
    </div>
  );
}

