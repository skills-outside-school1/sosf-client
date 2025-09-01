import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { H1 } from "@/components/shared/Atoms/Typography/typography";

export default function InterSub() {
  const data = [
    {
      paragraph: (
        <span>
          <ol className="list-none flex flex-col gap-y-3">
            At (SOSF), our strategic model is built on direct, impactful
            interventions designed to address critical gaps in education,
            entrepreneurship, and employability across Africa. We empower
            individuals and communities through targeted programs and catalytic
            funding, fostering a new generation of problem-solvers and value
            creators.
          </ol>
        </span>
      ),
    },

    {
      heading1:
        "SOSF Headstart Agropreneurs Program: Cultivating Resilient Futures",
      paragraph: (
        <span>
          <ol className="list-none flex flex-col gap-y-3">
            Our SOSF Headstart Agropreneurs Program is transforming small-scale
            and vulnerable farming across Africa. This initiative boosts yield,
            income, and resilience for farmers of high-value crops like cassava
            and plantain. We replace traditional extension systems with a
            cutting-edge AI-powered mobile platform, offering real-time,
            farm-specific advice (even without literacy), weather and crop
            forecasts, simple bookkeeping tools, and direct access to suppliers
            and markets. Beyond digital empowerment, the SOSF Headstart Farmer
            Growth Fund provides crucial non-cash input vouchers, equipment
            leasing, and low-interest working capital loans, ensuring
            productivity and financial inclusion. We're starting in Nigeria and
            scaling across Africa, connecting farmers digitally to opportunity
            and building a sustainable model for agricultural transformation.
          </ol>
        </span>
      ),
    },

    {
      heading1:
        "SOSF Bridge Program: Bridging K12 & Tertiary Education to Entrepreneurship & Employability  ",
      paragraph: (
        <span>
          <ol className="list-none flex flex-col gap-y-3">
            The SOSF Bridge Program is our flagship education intervention,
            equipping students in government secondary and tertiary institutions
            with the knowledge, skills, and attitudes to thrive in
            tomorrow&apos;s world. This structured, 3-tier program (Bridge
            Basic, Intermediate, and Advanced) builds essential 21st-century
            competencies through in-school sessions, teacher-led facilitation,
            and data-backed evaluation. What sets us apart? We integrate
            academic learning with career, academic, TVET, and enterprise
            learning, all powered by Tongston&apos;s K-12 Entrepreneurial
            Education Platform. It&apos;s a decentralized, teacher-led model
            with an online portal and robust M&E, ensuring sustainability and
            tangible outcomes like enhanced literacy, career readiness, and
            early exposure to employment and entrepreneurship. We don&apos;t
            just fill gaps; we bridge them, preparing students to succeed in
            higher education, launch ventures, or join the workforce.
          </ol>
        </span>
      ),
    },

    {
      heading1:
        "SOSF Online Skill Up for Business & Career (OSB/OSC): Global Skills, Local Impact ",
      paragraph: (
        <span>
          <ol className="list-none flex flex-col gap-y-3">
            <li>
              {" "}
              The Online Skill-Up for Business (OSB) is a series of flagship
              digital courses designed to equip existing and emerging
              entrepreneurs with the knowledge, skills, and attitude aligned
              with Tongston’s Entrepreneurial Thinking model, needed to start,
              grow, and sustain impactful ventures. Reaching over 2,000 learners
              across 80+ countries, OSB integrates AI-powered tools, real-world
              case studies, and practical business modules hosted on Udemy for
              global access. Learners who complete the course unlock further
              support on the T-World platform, including certification, digital
              badges, and eligibility for funding, mentorship, and
              venture-building resources.
            </li>
          </ol>
        </span>
      ),
    },
    {
      heading1:
        "The Online Skill-Up for Career (OSC) is a flagship digital course series developed by the Skills ",
      paragraph: (
        <span>
          <ol className="list-none flex flex-col gap-y-3">
            <li>
              (SOSF) to prepare job seekers, students, and young professionals
              for meaningful intrapreneurial careers. Aligned with Tongston’s
              Entrepreneurial Thinking model, OSC builds essential knowledge,
              skills, and attitudes through practical learning, AI-driven tools,
              and real-world career scenarios. Delivered globally via Udemy,
              learners who complete OSC unlock certification, digital badges,
              and gain access to further support on the T-World
              platform—including job readiness assessments, mentorship, and
              curated employment opportunities.
            </li>
          </ol>
        </span>
      ),
    },
  ];
  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-5  justify-start items-start ">
      <span className=" font-mont text-gray-800   px-2  md:px-[4rem] lg:px-[7rem]">
        <H1 className={`my-7`}>
          {" "}
          <b>Interventions</b>
        </H1>
        <br />
        <b>Our Strategic Model: Empowering Africa&apos;s Future</b>
      </span>
      <SubHero
        items={data}
        className={`w-full lg:w-full md:w-full px-2 flex flex-col  gap-y-[4rem]`}
        className5={`flex flex-col  gap-y-2`}
      />
    </div>
  );
}
