import React from "react";
import Accordion4 from "@/components/shared/accordions/Accordion4";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";
import Link from "next/link";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { H3, P } from "@/components/shared/Atoms/Typography/typography";

export default function ResearchThough() {
  const socialImpact = [
    {
      heading1: <H3> SOSF Social & Economic Register</H3>,
      paragraph: (
        <span className="flex flex-col gap-y-5 ">
          owering the Pillars The backbone of our Data, Interventions & Advocacy
          work, the Register enables:
          <br />
          <br />
          <ul className=" gap-y-4  list-disc px-4  gap-x-7 grid grid-cols-1 md:grid-cols-2 ">
            <li>Real-time program evaluation</li>
            <li>Seamless partner & grantee selection</li>
            <li>Impact tracking from school to farm</li>
            <li>Localization and personalization of solutions</li>
          </ul>{" "}
          <H3> Built for Africa.</H3>
          It doesn’t just collect data. It changes how development is done.
        </span>
      ),
    },
  ];
  const hero_data = [
    {
      heading1: <H3>7 Step MEL Framework: </H3>,
      paragraph: (
        <ul className="list-disc grid  grid-cols-2  gap-x-8  gap-y-4 ">
          <li>Desktop evaluation via AI tools</li>
          <li>Beneficiary digital registration</li>
          <li>Baseline data capture</li>
          <li>Midline & endline evaluation</li>
          <li>Impact assessment</li>
          <li>Program learning & improvement</li>
          <li>Institutionalization & advocacy</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="w-full h-[fixed]  flex flex-col gap-y-5 justify-start items-start pb-8 ">
      <section className="w-full mb-[4rem] ">
        <SubHero
          items={socialImpact}
          className={`w-full md:w-full lg:w-full`}
        />
      </section>
      <SubHero items={hero_data} className={`w-full  md:w-full lg:w-full `} />
      <H3 className={`px-2  md:px-[4rem]  lg:px-[7rem]`}>
        We don’t guess. We measure, learn, adapt, and scale what works.
      </H3>
    </div>
  );
}
