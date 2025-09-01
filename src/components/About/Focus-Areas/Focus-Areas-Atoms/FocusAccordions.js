import React from "react";
import Accordion2 from "@/components/shared/accordions/Accordion2";
import { H2, H3, P } from "@/components/shared/Atoms/Typography/typography";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";

export default function FocusAccordions() {
  const data = [
    {
      paragraph: (
        <span>
          <ul className="list-decimal flex flex-col gap-y-4 ">
            <li>
              <b> Ambassadors as Change Agents </b>(e.g., GreenLITE, Skills on
              Wheels)
            </li>
            <li>
              <b>Volunteer Mobilization</b> (1,000+ field and strategic
              volunteers)
            </li>
            <li>
              <b>Stakeholder Engagement</b> (Govt, NGOs, Corporates)
            </li>
            <li>
              <b>Data-Led Advocacy</b> (e.g., influencing Nigerian life skills
              curriculum)
            </li>
            <li>
              <b>Policy & Regulatory Reform</b> (e.g., UBE Act amendment)
            </li>
            <li>
              <b> Institutionalizing Interventions</b> (e.g., Girls Empowerment
              in 300+ schools)
            </li>
            <li>
              <b> Strategic Communications</b> (Webinars, Media, Summits)
            </li>
          </ul>
        </span>
      ),
    },
  ];

  const data2 = [
    {
      paragraph: (
        <span className="flex flex-col gap-y-6 w-full">
          <ul className="list-dash flex flex-col gap-y-4 ">
            <li> Real-time program evaluation</li>
            <li> Seamless partner & grantee selection</li>
            <li> Impact tracking from school to farm</li>
            <li>Localization and personalization of solutions</li>
          </ul>
        </span>
      ),
    },
  ];

  return (
    <div className="w-full px-2 md:px-[4rem] lg:px-[8rem]  flex flex-col  gap-y-8 justify-start items-start ">
      <H2 className={`font-bold`}>
        Advocacy: Institutionalizing Change Through Impact
      </H2>
      <H3 className={`font-semibold`}>From Data to Disruption</H3>
      <P>
        We turn evidence into influence. Our advocacy pillar amplifies voices,
        shifts mindsets, and drives systemic change through:
      </P>
      <SubHero items={data} className={``} />
      <H3 className={`font-bold `}>
        Our Theory of Change: Evidence-based advocacy drives lasting reform, not
        just charitable goodwill.
      </H3>

      <div className="flex flex-col gap-y-5 w-full mt-8  ">
        <H2 className={`font-bold`}>
          SOSF Social & Economic Register: Powering the Pillars
        </H2>
        <H3 className={`font-semibold`}>
          The backbone of our Data, Interventions & Advocacy work, the Register
          enables:
        </H3>
        <SubHero items={data2} className={``} />
        <P>
          {" "}
          <b>Built for Africa</b>. It doesn’t just collect data. It changes how
          development is done.
        </P>
      </div>
    </div>
  );
}
