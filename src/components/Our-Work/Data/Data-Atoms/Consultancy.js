import React from "react";
import Accordion4 from "@/components/shared/accordions/Accordion4";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { H3 } from "@/components/shared/Atoms/Typography/typography";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";


import Link from "next/link";
import {
  faPersonWalkingDashedLineArrowRight,
  faDraftingCompass,
} from "@fortawesome/free-solid-svg-icons";
import GetInTouch from "@/components/home/Home-Atoms/Get-In-Touch";

export default function Consultancy() {
  const hero_data = [
    {
      heading1: "Consultancy ",
      paragraph: (
        <span>
          At the Skills Outside School Foundation (SOSF), we leverage our
          extensive expertise and experience to provide consultancy services
          designed to support organizations in achieving measurable, impactful,
          and sustainable outcomes.
        </span>
      ),
    },
  ];

  const accordion_data = [
    {
      icon: "",
      title: "Monitoring, Evaluation and Learning ",
      content: (
        <span>
          We help organizations track progress, assess the effectiveness of
          their interventions, and enhance decision-making through comprehensive
          Monitoring, Evaluation, and Learning services. Our MEL consultancy is
          designed to empower your programs with the tools and frameworks needed
          for continuous improvement and impact maximization.
        </span>
      ),
    },

    {
      icon: "",
      title: "Research ",
      content: (
        <span>
          SOSF’s Research Consultancy services empower organizations with
          strategic insights to inform program design, policy development, and
          advocacy initiatives. By utilizing data, trends, and beneficiary
          insights, we help stakeholders make informed decisions that drive
          impactful and sustainable outcomes.
        </span>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-y-5 justify-start items-start pb-8">
      <section className="contents-section w-full  pb-8">
        <SubHero
          items={hero_data}
          className={`w-full lg:w-full md:w-full px-2`}
        />
      </section>
      <section className="accordions-section w-full ">
        <H3 className={`px-2  md:px-[4rem] lg:px-[7.6rem] mb-3`}>
          Our consultancy focuses on the following areas
        </H3>
        <Accordion4 accordions={accordion_data} className1={`hidden `} />
      </section>
      <section className="cta-section w-full  px-3 md:px-[4rem] lg:px-[7.6rem]">
      <Link href="/contact ">
          <MaskButton buttontext={`Get In Touch  `} className={`w-auto `} />
        </Link> 
     
      </section>
    </div>
  );
}
