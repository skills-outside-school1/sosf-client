import CustomAccordion from "@/components/shared/accordions/CustomAccordion";
import { H2, H3, P } from "@/components/shared/Atoms/Typography/typography";
import Image from "next/image";
import React from "react";

export default function VentureP() {
  const data1 = [
    {
      title: "SOSF Data",
      content: (
        <span>
           Funding dedicated to critical data collection and research activities
          that inform strategic development
        </span>
      ),
    },
    {
      title: "SOSF Advocacy",
      content: (
        <span>
          Supporting impactful advocacy initiatives that drive policy and
          systemic change.
        </span>
      ),
    },
  ];

  const accordionData = [
    {
      accordionTitle: "HeadStart (Agropreneur) Program",
      accordionContent: (
        <span>
          An agricultural value chain transformation program for small-scale
          farmers, boosting productivity, promoting food security, and driving
          economic growth through immediate support and empowerment.
        </span>
      ),
    },
    {
      accordionTitle: "Bridge Program",
      accordionContent: (
        <span>
          Focuses on empowering young people in secondary and tertiary
          institutions to complete their education, pursue higher learning, and
          secure employment or entrepreneurial opportunities through capacity
          building, mentorship, and support.
        </span>
      ),
    },
    {
      accordionTitle: "Online Skill up for Business / Career",
      accordionContent: (
        <span>
          An online initiative designed to equip entrepreneurs and intrapreneurs
          with vital skills for the future of work and enterprise, providing
          targeted courses and access to funds and tools.
        </span>
      ),
    },
  ];
  return (
    <div className="w-full max-w-[100%] px-4  flex flex-col gap-y-6   md:px-0 md:pl-[6rem]  lg:pl-[7rem]">
      <section className="theading=description-container    flex flex-col gap-y-3 justify-center items-start ">
        <H2 className={` text-2xl  font-semibold text-start font-mont `}>
          Venture Philanthropy
        </H2>
        <P
          className={`text-lg font-normal text-start font-inter w-full  md:w-[55%] `}
        >
          Nurturing Social Enterprises for Scalable Impact
        </P>
      </section>

      <section className="image-accordion-conainer     grid grid-cols-1  md:grid-cols-2  gap-x-4 gap-y-6 justify-center items-start ">
        <div className="image-container   ">
          <Image
            src={`/assets/images/our_work/sosf-funds/venturep.png`}
            alt="section-image "
            width={500}
            height={500}
            className="w-[550px]  h-[400px]   md:h-[550px] object-cover "
          />
        </div>
        <div className="w-full flex flex-col gap-y-4 justify-start items-start mb-auto  ">
          {data1.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-3 justify-start items-start px-2 "
            >
              <H3
                className={`text-gray-700 font-mont text-lg  font-semibold  `}
              >
                {item.title}
              </H3>
              <P
                className={`font-inter font-normal text-gray-700 text-base  md:w-[80%] `}
              >
                {item.content}
              </P>
            </div>
          ))}
          <div className="accordions  mt-5  w-full   md:w-[90%]">
            <H3
              className={`text-lg font-semibold font-mont text-gray-700 px-4 `}
            >
              SOSF Interventions
            </H3>
            <CustomAccordion
              accordionData={accordionData}
              defaultExpandedIndex={0}
              allowMultiple={false}
              containerClassName="mt-6"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
