import React from "react";
import Accordion4 from "@/components/shared/accordions/Accordion4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadSideVirus,
  faGripLinesVertical,
  faHandMiddleFinger,
  faPersonWalkingDashedLineArrowRight,
  faDraftingCompass,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { H3 } from "@/components/shared/Atoms/Typography/typography";

export default function EndToEnd() {
  const hero_data = [
    {
      heading1: "End to End Evaluation of SOSF interventions:",
      paragraph: (
        <span>
          We collect, analyze and report data on the needs, context and
          beneficiaries to design, implement, monitor & evaluate interventions.
          We analyze data from interventions for advocacy, improvements, and
          continuous learning & development.
        </span>
      ),
    },
  ];
  const acc_data = [
    {
      icon: "",
      title: "Desktop evaluation (needs assessment / situational analysis)",
      content: (
        <span className=" flex flex-col gap-y-6 justify-start items-start ">
          Needs assessment through a situational analysis &#45; to determine
          what the problem is and if the existing intervention is a solution or
          if other interventions need to be implemented first in which:
          <br />
          <br />
          <ul className="w-full flex flex-col gap-y-3 justify-start items-start list-disc  px-3 md:px-[4rem]">
            <li>
              If sufficient &#45; design the intervention through our programs
              using the findings from the baseline and the context set based on
              the situational analysis;
            </li>
            <li>
              If not sufficient &#45; through our initiatives & challenges to
              either conduct a “pre-intervention” to support target
              beneficiaries on the immediate needs identified in the baseline or
              beneficiaries that are not a target but to address an underlying
              problem:
            </li>
            <ol className="list-dash  flex flex-col gap-y-4 justify-start items-start  px-4 md:px-[7rem]">
              <li>Individual Innovative Partnerships; and</li>
              <li> Corporate Innovative Partnerships.</li>
            </ol>
          </ul>
          Context setting leveraging on the situational analysis to enable us to
          design the intervention through our programs.
          <Link href="/our-work/data ">
            <MaskButton
              buttontext={`CheckOut Our Evaluation Report  `}
              className={`w-auto  text-sm  `}
            />
          </Link>
        </span>
      ),
    },

    {
      icon: "",
      title: "Baseline Evaluation",
      content: (
        <span className=" flex flex-col gap-y-6 justify-start items-start ">
          A Baseline Evaluation sets the starting point for measuring change and
          impact. This stage collects detailed data on beneficiaries, resources,
          and conditions before the intervention begins, creating a benchmark
          for future comparisons.
        </span>
      ),
    },

    {
      icon: "",
      title: "Midline Evaluation",
      content: (
        <span className=" flex flex-col gap-y-6 justify-start items-start ">
          The Midline Evaluation provides a progress check during the
          intervention, enabling real-time adjustments and improvements. This
          stage helps ensure that our programs remain effective and aligned with
          goals.
        </span>
      ),
    },

    {
      icon: "",
      title: "End-line Evaluation",
      content: (
        <span className=" flex flex-col gap-y-6 justify-start items-start ">
          The End-line Evaluation measures the outcomes of an intervention
          against its initial objectives. This comprehensive review highlights
          achievements, challenges, and areas for future improvement.
        </span>
      ),
    },

    {
      icon: "",
      title: "Impact Evaluation & Learning",
      content: (
        <span className=" flex flex-col gap-y-6 justify-start items-start ">
          The final stage of our evaluation framework focuses on understanding
          the long-term impact of our interventions. This stage identifies how
          programs influence beneficiaries and communities over time,
          contributing to sustainable socio-economic growth.
        </span>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-y-5 justify-start items-start ">
      <section className="contents-section w-full h-[fixed] pb-8">
        <SubHero
          items={hero_data}
          className={`px-2 w-full md:w-full lg:w-full  mb-8`}
        />
      </section>
      <section className="itemized-accordions-section w-full h-[fixed] ">
        <H3 className={`px-2  md:px-[4rem] lg:px-[7.6rem] mb-3`}>
          Key Components
        </H3>
        <Accordion4 accordions={acc_data} className=" " className1={`hidden`} />
      </section>
    </div>
  );
}
