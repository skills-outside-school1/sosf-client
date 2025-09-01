import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { H1, H3 } from "@/components/shared/Atoms/Typography/typography";

export default function DataSub() {
  const data = [
    {
      paragraph: (
        <ul className="list-disc flex flex-col gap-y-4 ">
          <li>
            Conduct full-cycle Monitoring, Evaluation & Learning (MEL) for all
            our interventions.
          </li>
          <li>
            Deliver third-party advisory services through our integrated,
            AI-powered systems.
          </li>
          <li>
            Lead strategic thought leadership and policy-influencing
            publications.
          </li>
          <b> Key Enabler: SOSF Social & Economic Register</b> A game-changing
          digital platform that captures real-time, multilingual, geo-tagged
          data on our direct and intermediary beneficiaries. It powers
          everything we do—from program design to advocacy, funding decisions,
          and reporting.
        </ul>
      ),
    },
  ];

  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-5  justify-start items-start ">
      <span className=" font-mont text-gray-800   px-2  md:px-[4rem] lg:px-[7rem]">
        <H1 className={`my-7`}>
          {" "}
          <b>DATA</b>
        </H1>
        <H3> Evidence That Drives Impact</H3>
        <br />
        <strong>
          Data isn’t just a tool. It’s our compass.Through SOSF’s Data Pillar,
          we:
        </strong>
        <br />
      </span>
      <SubHero items={data} className={`w-full md:w-full  px-2`} />
    </div>
  );
}
