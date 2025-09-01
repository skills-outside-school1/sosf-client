import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import GetInvolvedCards from "@/components/shared/Atoms/Cards-Atoms/Get-InvolvedCars";
import CollaborateWithUs from "./Collaborate-With-Us";
export default function SES() {
  const herocontents = [
    {
      heading1: "",

      heading2: "A Decade Disrupting Development",
      paragraph:
        "SOSF is disrupting development and redefining philanthropy across Education, Employability & Entrepreneurship through its unique 3-pronged strategic approach (data, interventions & advocacy) and collaboration (investments & partnerships) approach.",
    },
  ];
  const involvementItems = [
    {
      color: "#8A96B8",
      //   title: "Get Involved as a",
      description: "Education",
      backgroundImage: "/assets/images/home/edu-406.jpg",
      title2: "Education",
      content: (
        <span className="text-sm md:text-base  lg:text-xl ">
          We promote quality Education (as a holistic focus on Knowledge, Skills
          & Tools and Attitude) as the bedrock driving Entrepreneurship &
          Employment (Employability)
        </span>
      ),

      link: "/our-pillars",
    },

    {
      color: "#B7C8F4",
      //   title: "Get Involved as a",
      description: "Employability",
      backgroundImage: "/assets/images/home/employ-406.jpg",
      title2: "Employability",
      content: (
        <span className="text-sm md:text-base  lg:text-xl ">
          We support our beneficiaries to Find, Access, Maintain & Grow in
          decent jobs/work in line with their knowledge, skills & attitude that
          meets their needs & the needs of others; whilst accessing the tools
          needed to thrive.
        </span>
      ),

      link: "/our-pillars",
    },

    {
      color: "#6A80B8",
      //   title: "Get Involved as an",
      description: "Entrepreneurship",
      backgroundImage: "/assets/images/home/ent-406.jpg",
      title2: "Entrepreneurship",
      content: (
        <span className="text-sm md:text-base  lg:text-xl ">
          We support our beneficiaries to Start, Sustain & Scale sustainable
          enterprise/business that meets their needs & that of others.
        </span>
      ),

      link: "/our-pillars",
    },
  ];

  const items2 = [
    {
      color: "#8A96B8",
      //   title: "Get Involved as a",
      description: "Data",
      backgroundImage: "/assets/images/home/data-2bots.jpg",
      title2: "Data",
      content: (
        <span className="text-sm md:text-base  lg:text-xl ">
          We gather, analyze & report data to inform, contextualise and shape
          our direct & indirect interventions aligned with the SDGs, inform and
          advocate through SOSFs first & only pan-African Social & Economic
          Register
        </span>
      ),
      link: "/#",
      route_name: "Explore Register",
    },

    {
      color: "#B7C8F4",
      //   title: "Get Involved as a",
      description: "Interventions",
      backgroundImage: "/assets/images/home/intervention-406.jpeg",
      title2: "Interventions",
      content: (
        <span className="text-sm md:text-base  lg:text-xl ">
          We deliver interventions directly through programs – Bridge (for K–12
          & tertiary students and teachers), Headstart (for informal economy
          entrepreneurs, especially farmers), and Online Skill-Up for Business &
          Career (digital business & career readiness courses or global
          entrepreneurs and job seekers); and indirectly through Grants and
          Funds that empower alumni & beneficiaries to scale SDG-aligned impact
          leveraging on their own initiatives, enterprises & programs through
          data, capacity-building, financing & partnerships
        </span>
      ),

      link: "#",
      route_name: "Get Report",
    },

    {
      color: "#6A80B8",
      //   title: "Get Involved as an",
      description: "Advocacy",
      backgroundImage: "/assets/images/home/advocacy-24.jpeg",
      title2: "Advocacy",
      content: (
        <span className="text-sm md:text-base  lg:text-xl ">
          We conduct advocacy through (i) SOSF Beneficiaries/Ambassadors as
          catalysts of change (ii) Volunteer Mobilization (iii) Stakeholder
          Engagement & Coalition Formation (iv) Data & Research (v)
          Mainstreaming / institutionalizing interventions (vi) Awareness
          Building (vii) Policy/ & Regulation Design & Implementation
        </span>
      ),

      link: "#",
      route_name: "Get Report",
    },
  ];

  return (
    <div className="   w-full  gap-y-5  h-[fixed] ">
      <SubHero items={herocontents} />

      <div className="w-full h-[fixed] justify-start items-start  flex flex-col gap-y-5 mt-[4rem]">
        <SubHero
          items={title1}
          className2={`  font-bold relative top-[2rem]  font-mont    lg:text-[30px]  md:text-[28px] text-[20px]`}
        />
        <section className=" lg:w-[full] lg:px-[7rem] px-4 ml-auto  w-full  ">
          <GetInvolvedCards
            items={involvementItems}
            cardHeight="600px"
            transitionDuration={700}
          />
        </section>
      </div>
      <div className="w-full h-[fixed] justify-start items-start  flex flex-col gap-y-5 mt-[4rem]">
        <SubHero
          items={title2}
          className2={`  font-bold relative top-[2rem]  font-mont    lg:text-[30px]  md:text-[28px] text-[20px]`}
        />
        <section className=" lg:w-[full] lg:px-[7rem] px-4 ml-auto  w-full  ">
          <GetInvolvedCards
            items={items2}
            cardHeight="600px"
            transitionDuration={700}
          />
        </section>
      </div>

      <div className="w-full h-[fixed] justify-start items-start  flex flex-col gap-y-5 mt-[4rem]">
        <SubHero
          items={title3}
          className5={`flex-col gap-y-3 flex`}
          className2={`  font-bold relative top-[2rem] mb-6 md:mb-4 lg:mb-4 font-mont    lg:text-[30px]  md:text-[28px] text-[20px]`}
        />
        <section className=" lg:w-[full] lg:px-[7rem] px-4 ml-auto  w-full  ">
          <CollaborateWithUs />
        </section>
      </div>
    </div>
  );
}

const title1 = [
  {
    heading1: "Our Pillars",
  },
];

const title2 = [
  {
    heading1: "Our 3 Pronged Strategic Approach",
  },
];

const title3 = [
  {
    heading1: "Our 2 Part Collaboration Approach",
  },
];
