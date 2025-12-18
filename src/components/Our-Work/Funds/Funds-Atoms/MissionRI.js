import CustomAccordion from "@/components/shared/accordions/CustomAccordion";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";
import { H3, P } from "@/components/shared/Atoms/Typography/typography";
import Link from "next/link";
import React from "react";

export default function MissionRI() {
  const accordionItems = [
    {
      accordionTitle: "Scholarship Coverage",
      accordionContent: (
        <span>
          Varies by level, encompassing tuition, fees, books, digital tools,
          project expenses, and more (e.g., up to NGN 300,000 for Nigerian
          tertiary students; NGN 100,000 for Nigerian secondary students).
        </span>
      ),
    },
    {
      accordionTitle: "Application Process",
      accordionContent: (
        <span>
          A phased approach including application submission, eligibility
          screening, evaluation, selection (with potential interviews), award
          notification, disbursement, and ongoing monitoring.
        </span>
      ),
    },
  ];
  return (
    <div className="w-full max-w-[100%] flex flex-col gap-y-[5rem] justify-center items-center ">
      <section className="heading-with-content flex flex-col gap-y-4  justify-center items-center   ">
        <H3
          className={`font-mont font-semibold text-2xl  text-center  text-gray-700 `}
        >
          Mission-Related Investing (MRI)
        </H3>
        <P
          className={`  text-gray-700 font-inter  text-lg  text-center font-normal `}
        >
          Aligning Endowment with Purpose
        </P>
        <P
          className={`font-inter font-normal  text-sm  px-4 md:text-base  text-center text-gray-700 md:w-[80%] `}
        >
          While currently focused on PRI and Venture Philanthropy for our
          immediate grant activities, SOSF also embraces the principles of
          Mission-Related Investing (MRI). This involves committing a portion of
          our endowment to investments that not only seek competitive financial
          returns but also align directly with our mission. The goal is dual:
          generate financial sustainability for our philanthropic work and
          achieve measurable social or environmental impact through strategic
          investment in mission-aligned ventures.
        </P>
      </section>

      <section className="grid-container w-full  md:w-[90%] h-full max-h-[99%]  md:px-[4rem]  mx-auto  grid grid-cols-1  gap-y-6 gap-x-[3rem] justify-center items-center  md:grid-cols-2  ">
        <div className="managing-funds-container   md:mb-auto    w-full flex flex-col gap-y-5 justify-center items-center  md:items-start   ">
          <H3
            className={`font-mont font-semibold text-2xl  text-center  text-gray-700 `}
          >
            Managing Our Funds
          </H3>
          <P
            className={`  text-gray-700 font-inter  text-lg  text-center font-normal `}
          >
            A Collaborative and Transparent Approach
          </P>
          <P
            className={` text-gray-700 font-inter mt-4 font-normal text-center  md:text-left  text-sm  px-4   md:px-0  md:text-base`}
          >
            The Impact Investing Approach for SOSF Funds is strategically
            managed by our partners: PIF Africa (for strategy) and Tongston
            Ventures (for execution and portfolio management). This ensures
            expert oversight and robust financial stewardship through a number
            of dedicated funds.
          </P>
          <H3
            className={`font-mont font-semibold text-2xl  text-left  text-gray-700 `}
          >
            Eligibility for SOSF Funds
          </H3>
          <P
            className={`  text-gray-700 font-inter  text-lg  text-center  px-4  md:px-0 md:text-left font-normal `}
          >
            SOSF Funds primarily support graduating Ambassadors from our
            interventions. Specifically
          </P>
          <div className="button-container  mt-4 ">
            <Link href={``}>
              {" "}
              <MaskButton
                buttontext={`Learn More`}
                aos={`fade-in`}
                className={`rounded-xl`}
              />
            </Link>
          </div>
        </div>
        {/* second container  */}
        <div className="managing-funds-container   mt-5 md:mt-0  w-full flex flex-col gap-y-5 justify-center items-center  md:items-start   ">
          <H3
            className={`font-mont font-semibold text-2xl  text-center md:text-left  text-gray-700 `}
          >
            SOSF Headstart Ambassadors
          </H3>
          <P
            className={`  text-gray-700 font-inter  text-sm  md:text-lg  md:text-left  px-4  md:px-0   text-center  font-normal `}
          >
            Eligibility for the Headstart Ambassadors Ventures / Enterprise Fund
            for existing businesses that meet criteria such as minimum 12 months
            operation, formal registration, personal investment, ability to fund
            other inputs, a clear business plan, active membership in a
            recognized cooperative/association, and adherence to best practices
          </P>

          {/*  */}
          <H3
            className={`font-mont font-semibold text-2xl  text-center  md:text-left  text-gray-700 `}
          >
            SOSF Bridge & Online Skill up for Business Ambassadors
          </H3>
          <P
            className={`  text-gray-700 font-inter  text-sm  md:text-lg  text-center  md:text-left px-4 md:px-0 font-normal `}
          >
            Opportunities for both scholarships (OSB/C and Bridge - Junior
            Secondary, Senior Secondary, Tertiary Editions) and venture funds
            (OSB/C and Basic, Intermediate, Advanced levels for those pursuing
            entrepreneurship). 
          </P>
          <div className="accordion-container  w-full  px-4   md:px-0   ">
            <CustomAccordion
              accordionData={accordionItems}
              defaultExpandedIndex={0}
              allowMultiple={false}
              containerClassName="mt-3"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
