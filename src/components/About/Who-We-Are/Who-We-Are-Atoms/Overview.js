import React from "react";
import { P } from "@/components/shared/Atoms/Typography/typography";

const items = [
  {
    title: "Overview",
    description: (
      <span className="">
        Established in 2014, <b>the Skills Outside School Foundation (SOSF)</b>{" "}
        is the leading Pan-African organization dedicated to{" "}
        <b>disrupting development and redefining philanthropy </b>through
        education, entrepreneurship, and employability. Our mission is to deploy
        <b> data-driven interventions and advocacy</b> to achieve
        transformational sustainable socio-economic development across Africa,
        guided by our core values of service, integrity, and collaboration. We
        leverage our powerful <b>Data</b> pillar, anchored by the{" "}
        <b>SOSF Social & Economic Register</b>—a game-changing, AI-powered
        digital platform that captures real-time, multilingual data for
        everything from program design to advocacy and funding decisions.
        <br />
        <br />
        Our <b>Advocacy</b> pillar turns this evidence into influence,
        amplifying voices and driving systemic change through strategic
        communications, policy reform, and institutionalizing impactful
        interventions. This integrated approach, supported by our diverse
        Partnerships, ensures our programs (like{" "}
        <b>Headstart Agropreneurs, Bridge,</b>
        and<b> Online Skill Up for Business & Career)</b> and{" "}
        <b>Funds & Grants</b> are precisely targeted, rigorously evaluated, and
        designed for maximum impact and sustainable change across the continent
      </span>
    ),
  },

  {
    title: "Mission ",
    description: (
      <span className="">
        Implementing data-driven education, employability & entrepreneurship
        interventions, and advocacy to achieve transformational sustainable
        socio-economic development.
      </span>
    ),
  },
  {
    title: "Vision",
    description: (
      <span className="">
        A world with productive human capital driving transformational
        sustainable socio-economic development
      </span>
    ),
  },

  {
    title: "Our Motto",
    description: (
      <span className="">Disrupting Development. Redefining Philanthropy</span>
    ),
  },

  {
    title: "Our Philosophy",
    description: (
      <span className="">
        At Skills Outside School Foundation, we believe that through lifelong
        Through lifelong learning and development, people can be equipped with
        the right education (mindset, competence and tools) to be productive
        whether they choose the path of entrepreneurship or employability to
        contribute to drive sustainable socio-economic development.
      </span>
    ),
  },
];

export default function Overview() {
  return (
    <div className="w-full  justify-start items-start  flex flex-col  gap-y-8  pb-4  px-2   md:px-[4rem]    lg:px-[8rem]  ">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full h-[fixed] flex   flex-col  md:grid md:grid-cols-2    lg:flex-row gap-x-6   justify-start items-start    gap-y-5 pb-2 "
        >
          <h1 className=" text-gray-800 font-bold  font-mont  text-2xl     lg:text-3xl    lg:w-[50%]">
            {item.title}
          </h1>
          <P className={` lg:w-[99%]    `}>{item.description} </P>
        </div>
      ))}
    </div>
  );
}
