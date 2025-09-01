import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { H1 } from "@/components/shared/Atoms/Typography/typography";
import React from "react";

export default function AdvSub() {
  const add_data = [
    {
      paragraph: (
        <span>
          <ul className="list-none flex flex-col gap-y-5 ">
            <li>
              We turn evidence into influence. Our advocacy pillar amplifies
              voices, shifts mindsets, and drives systemic change through:
              Ambassadors as Change Agents (e.g., GreenLITE, Skills on Wheels)
            </li>
            <li>
              Volunteer Mobilization (1,000+ field and strategic volunteers)
              Stakeholder Engagement (Govt, NGOs, Corporates) Data-Led Advocacy
              (e.g., influencing Nigerian life skills curriculum)
            </li>
            <li>
              Policy & Regulatory Reform (e.g., UBE Act amendment)
              Institutionalizing Interventions (e.g., Girls Empowerment in 300+
              schools)
            </li>
            <li>
              Strategic Communications (Webinars, Media, Summits) Our Theory of
              Change: Evidence-based advocacy drives lasting reform, not just
              charitable goodwill.
            </li>
          </ul>
        </span>
      ),
    },
  ];

  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-2  justify-start items-start ">
      <span className=" font-mont text-gray-800   px-2  md:px-[4rem] lg:px-[7rem]">
        <H1 className={`my-7`}>
          {" "}
          <b>Advocacy</b>
        </H1>
        <br />
        <b> Institutionalizing Change Through Impact From Data to Disruption</b>
      </span>
      <SubHero items={add_data} className={`w-full  md:w-full  px-2`} />
    </div>
  );
}
