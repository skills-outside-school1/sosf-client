import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { H2 } from "@/components/shared/Atoms/Typography/typography";

export default function FocusSubHero() {
  const ero_data = [
    {
      heading2: "Our Focus Areas",
      paragraph: (
        <span className="">
          <H2>DATA: Evidence That Drives Impact</H2>
          <br />
          <b> Data isn’t just a tool. It’s our compass.</b>
          <br />
          Through SOSF’s Data & Research Pillar, we:
          <ul className="list-dash flex flex-col gap-y-3  mt-9 mb-5 ">
            <li>
              {" "}
              Conduct full-cycle <b>
                Monitoring, Evaluation & Learning (MEL)
              </b>{" "}
              for all our interventions.
            </li>
            <li>
              {" "}
              Deliver<b> third-party advisory services</b> through our
              integrated, AI-powered systems.
            </li>
            <li>
              Lead strategic <b>thought leadership</b> and{" "}
              <b>policy-influencing publications</b>.
            </li>
          </ul>
          Key Enabler: SOSF Social & Economic Register A game-changing digital
          platform that captures real-time, multilingual, geo-tagged data on our
          direct and intermediary beneficiaries. It powers everything we do—from
          program design to advocacy, funding decisions, and reporting.
        </span>
      ),
    },
  ];
  return (
    <div className=" w-full justify-start items-start flex flex-row">
      <SubHero
        items={ero_data}
        className={` w-full md:w-full lg:w-full px-2`}
      />
    </div>
  );
}
