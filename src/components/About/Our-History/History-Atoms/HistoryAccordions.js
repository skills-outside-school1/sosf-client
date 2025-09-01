import React from "react";
import Accordion3 from "@/components/shared/accordions/Accordion3";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import { H3, P } from "@/components/shared/Atoms/Typography/typography";

export default function HistoryAccordions() {
  const accordions_data = [
    {
      title: " 2014 – Our First Step",
      content: (
        <span className="">
          Launched the very first Bridge Program in the FCT, Abuja, as an NYSC
          Community Development initiative — planting the seeds of what would
          become a continental movement in youth education.
        </span>
      ),
    },

    {
      title: " 2015 – Growing Locally",
      content: (
        <span className="">
          Scaled the Bridge Program across more schools in Abuja, improving
          curriculum delivery and expanding reach with our second deployment.
        </span>
      ),
    },
    {
      title: "2016 – Deepening Impact",
      content: (
        <span className="">
          Third Bridge rollout in FCT with improved performance tracking and
          deeper partnerships. Each phase built stronger foundations in public
          education reform.
        </span>
      ),
    },
    {
      title: " 2017 – Leadership & Advocacy",
      content: (
        <span className="">
          Launched the first Prefects’ Training across 52 schools in partnership
          with FCT Secondary Education Board. Joined national advocacy efforts:
          #FundNationalLibrary campaign, National Youth Policy review with Youth
          Hub Africa, and YIAGA/NED youth roundtables.
        </span>
      ),
    },
    {
      title: " 2018 – Youth Empowerment & Enterprise",
      content: (
        <span className="">
          <ul className="list-disc flex flex-col gap-y-5 justify-start items-start p-1">
            <li>Fifth Bridge program deployed.</li>
            <li>
              ntrepreneurship training and business grants delivered to NYSC
              corps members with ACT Foundation & Access Bank.
            </li>
            <li>
              57 schools engaged in our second Prefects’ Leadership Training.
            </li>
            <li>Supported baseline analysis for Oxfam Voice Nigeria.</li>
            <li>
              Partnered with Loss of Generality to build digital skills for
              youth
            </li>
          </ul>
        </span>
      ),
    },
    {
      title: " 2019 – Partnerships & Global Reach",
      content: (
        <span className=" flex flex-col gap-y-4 ">
          <H3>Forged alliances with</H3>
          <ul className="list-disc flex flex-col gap-y-5 justify-start items-start p-1">
            <li>UNICEF (Girls Empowerment)</li>
            <li>British Council (Youth Leadership)</li>
            <li>MTN Yellow Women (Workforce Empowerment)</li>
            <li>
              Global Opportunity Desk (ODIC Challenge) Expanded entrepreneurship
              training and launched impact challenges across Nigeria and beyond.
            </li>
          </ul>
        </span>
      ),
    },
    {
      title: " 2020 – Pandemic Pivot",
      content: (
        <span className="">
          <ul className="list-disc flex flex-col gap-y-5 justify-start items-start p-1">
            <li>Paused in-person Bridge rollout due to COVID-19.</li>
            <li>
              Launched Online Skill-Up for Business and the SOSF Enterprise
              Collaboration Lounge.
            </li>
            <li>
              Delivered virtual capacity training with AREAI and Open Fees.
            </li>
            <li>
              Co-designed frameworks for UNICEF’s Girls Empowerment Project
              across 16 states.
            </li>
            <li>Marked entry into the global digital development space.</li>
          </ul>
        </span>
      ),
    },

    {
      title: " 2021 – National Expansion",
      content: (
        <span className="">
          <ul className="list-disc flex flex-col gap-y-5 justify-start items-start p-1">
            <li>Entered Kebbi and Yobe with Bridge and He4She programs.</li>
            <li>Signed MOU with IITA for agro capacity-building.</li>
            <li>Launched Headstart Agropreneurs in Rivers State.</li>
            <li>d training at Nile University with IRSD.</li>
            <li>
              Published research on soybean farming opportunities in Nigeria.
            </li>
          </ul>
        </span>
      ),
    },

    {
      title: " 2022 – Data-Driven Development",
      content: (
        <span className="">
          <ul className="list-disc flex flex-col gap-y-5 justify-start items-start p-1">
            <li>Completed Bridge baseline survey in Adamawa.</li>
            <li>Published research in UGC Care Journals.</li>
            <li>
              Became a member of Nigeria’s National Planning Commission and
              Ministry of Education working groups.
            </li>
            <li>
              Launched Lead4Change, a pan-African youth empowerment initiative.
            </li>
            <li>
              Partnered with Leprosy Mission to deliver skills training to women
              and girls in Dakwa.
            </li>
          </ul>
        </span>
      ),
    },

    {
      title: " 2023 – Scaling With Purpose",
      content: (
        <span className="">
          <ul className="list-disc flex flex-col gap-y-5 justify-start items-start p-1">
            <li>
              Launched Sapphire Platforms Scholarships for science tertiary
              students.
            </li>
            <li>
              Rolled out the Bridge Ambassador Scholarship Fund and Enterprise
              Grant Fund.
            </li>
            <li>
              Completed impact evaluations for the Agropreneurs and Lead4Change
              initiatives.
            </li>
            <li>
              Delivered financial literacy workshops for women in partnership
              with Pulte Institute & others.
            </li>
            <li>
              Contributed to national policy dialogue with the Centre for the
              Study of Economies of Africa.
            </li>
            <li>
              Launched the SOSF Scale-Up Impact Partnership for individuals.
            </li>
          </ul>
        </span>
      ),
    },

    {
      title:
        " 2024 - 2025 – Rethinking Scale, Digitalization & Systems Changee",
      content: (
        <span className="flex flex-col gap-y-4">
          In 2024 - 2025, SOSF embarked on a strategic transformation—leveraging
          insights from a decade of impact to reimagine development for the next
          decade. We took a bold step toward global scalability by offshoring
          operations to Mauritius, establishing a strong international presence
          and improving structural efficiency, and outsourcing management of
          SOSF operations to PIF Africa.
          <br />
          <br />
          Key innovations included:
          <ul className="list-disc flex flex-col gap-y-5 justify-start items-start p-1">
            <li>
              Introduction of SOSF Grants and Funds to provide catalytic capital
              to third-party organizations and individuals, scaling impact
              beyond our direct
            </li>
            <b> programs.</b>
            <li>
              Partnership with Tongston to redesign the Bridge Program,
              embedding entrepreneurial education across all tiers and expanding
              reach through a teacher-led digital model for scale across Africa.
            </li>
            <li>
              Reengineering the Online Skill-Up for Business (OSB) program,
              extending our digital learning reach to over 100 countries.
            </li>
            <li>
              Conceptualization of the SOSF Social & Economic Register, a
              multilingual, AI-powered data infrastructure to monitor, evaluate,
              and fund with precision.
            </li>
            <li>
              Relaunch of Lead4Change as part of the SOSF Grants initiative,
              providing new ways to co-implement impact with others.
            </li>
            <li>
              Deployment of scholarships and zakat funding to empower students
              and community leaders at Nurul Atfal School in Borno, Nigeria,
              supporting:
            </li>
            <li className="list-dash px-6">
              Tuition, exam fees, and transportation for underprivileged
              students; Registration and project funding for the school
              proprietor + Full scholarships for 20 students at the school.
            </li>
            <li>
              {" "}
              Co-launched a STEM competition for secondary school girls with
              Tongston to mark the International Day of Women and Girls in
              Science, expanding our commitment to gender inclusion and youth
              innovation.
            </li>
            <P>
              This year marked a pivotal shift: from doing more ourselves to
              achieving more through others — unlocking new pathways,
              partnerships, and platforms for sustainable socio-economic
              development across Africa and beyond.
            </P>
          </ul>
        </span>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col  gap-y-[3rem] justify-start items-start px-2 md:px-[4rem] lg:px-[8rem] ">
      {/* <h3 className="text-gray-800 font-mont  text-2xl     lg:text-3xl  font-bold ">
        A Decade Disrupting Development
      </h3> */}
      <Accordion3 accordions={accordions_data} className="w-full" />
    </div>
  );
}
