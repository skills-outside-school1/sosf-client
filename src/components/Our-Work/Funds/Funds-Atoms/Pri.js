import GetInvolvedCards from "@/components/shared/Atoms/Cards-Atoms/Get-InvolvedCars";
import { H2, P } from "@/components/shared/Atoms/Typography/typography";
import React from "react";

export default function ImpactInvestingModel() {
  // the  toggle cards data
  const involvementItems = [
    {
      color: "#8A96B8",

      description: "SOSF Bridge Ambassadors Ventures Funds",
      backgroundImage: "/assets/images/home/partner.webp",
      title2: "SOSF Bridge Ambassadors Ventures Funds",
      content:
        "Basic, Intermediate, Advanced Levels): These funds provide non-repayable grants as start-up or growth capital for social enterprises launched by our graduating Bridge Ambassadors, for those who choose the entrepreneurship pathway.",
      icon: "/assets/icons/sosf-funds/icon-1.png",
    },

    {
      color: "#B7C8F4",

      description: "SOSF Bridge Ambassadors Scholarship Funds",
      backgroundImage: "/assets/images/home/volunteer.png",
      title2: "SOSF Bridge Ambassadors Scholarship Funds",
      content:
        "Junior Secondary, Senior Secondary, Tertiary Editions): These funds provide non-repayable scholarships to support disadvantaged young people in public educational institutions, covering various academic expenses.",
      icon: "/assets/icons/sosf-funds/icon-2.png",
    },

    {
      color: "#EFF1F3",

      description: "SOSF Headstart Ambassadors Ventures / Enterprise Fund",
      backgroundImage: "/assets/images/home/invest.png",
      title2: "SOSF Headstart Ambassadors Ventures / Enterprise Fund",
      content:
        " This fund provides non-repayable grants as growth capital for existing businesses of SOSF Headstart Ambassadors, focusing on financing essential agricultural inputs to boost productivity and value addition for small-scale farmers. .",
      icon: "/assets/icons/sosf-funds/icon-3.png",
    },
    {
      color: "#B7C8F4",

      description: "SOSF Grants Initiative",
      backgroundImage: "/assets/images/home/writer.png",
      title2: "SOSF Grants Initiative",
      content:
        " Our structured grants provide capacity building and sustainable patient capital to high-impact organizations, enabling them to scale their work through the PRI model..",
      icon: "/assets/icons/sosf-funds/icon-4.png",
    },
  ];

  return (
    <div className="w-full h-[fixed] justify-center items-center   flex  flex-col  gap-y-4   md:pl-[6rem] lg:pl-[7rem]">
      {/* components render here  */}
      <section className="w-full heading-paragraph-container   flex flex-col gap-y-4 justify-center items0center px-4">
        <H2 className={` text-2xl   font-semibold  font-mont  text-left `}>
          Program-Related Investing (PRI)
        </H2>
        <P className={`text-lg font-normal  font-inter  md:w-[60%] `}>
          Direct Philanthropic Alignment with Sustainable Returns
        </P>
      </section>

      <section className="lg:w-[100%]   w-full   ">
        {/* the toggle cards heere  */}
        <GetInvolvedCards
          items={involvementItems}
          cardHeight="600px"
          transitionDuration={1000}
          descriptionClassName="font-normal "
        />
      </section>
    </div>
  );
}
