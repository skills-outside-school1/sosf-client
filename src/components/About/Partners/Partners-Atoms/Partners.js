import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Marquee3 from "@/components/shared/Atoms/Marquee-Atoms/Marquee3";
import { H3, P } from "@/components/shared/Atoms/Typography/typography";
import AutoFocusTabs from "@/components/shared/accordions/AutoFocusTabs";
import TabbedContentDisplay from "@/components/shared/cards/TouchContentDisplay";

export default function Partners() {
  const contributionTabs = [
    {
      title: "Cash",
      content: (
        <>Direct financial contributions – CSR, Grants, Zakat, Sadaqah etc.</>
      ),
    },
    {
      title: "Liquid Assets",
      content: (
        <>Contributions in the form of shares, bonds, and other securities.</>
      ),
    },
    {
      title: "Illiquid Assets",
      content: (
        <>Investments in art, jewelry, commodities, real estate and others.</>
      ),
    },
    {
      title: "In-Kind Resources",
      content: <>Contributions of products, services, or expertise.</>,
    },
    {
      title: "In-Kind Resources – Products",
      content: (
        <>
          Contributing products or services from you or your organization at a
          subsidized rate, free, or adapting them to meet the needs of SOSF
          beneficiaries.
        </>
      ),
    },
    {
      title: "In-Kind Resources – Services",
      content: (
        <>
          Contributing products or services from you or your organization at a
          subsidized rate, free, or adapting them to meet the needs of SOSF
          Trust beneficiaries.
        </>
      ),
    },
    {
      title: "In-Kind Resources – Expertise",
      content: (
        <>
          Your network, knowledge or skills on a pro bono basis by joining SOSF
          Advisors.
        </>
      ),
    },
  ];

  const hero_data = [
    {
      heading1: "INVESTMENTS",
      paragraph: (
        <span className=" flex flex-col gap-y-4  ">
          {/* We&apos;ve historically collaborated with 150+ partners, investors,
          organizations and individuals in alignment with the 17th SDG,
          emphasizing Investments for global progress in delivering our mandate
          and furthering the objectives and goals of organizations&apos; where
          their mandate aligns with ours.
          <br />
          <br />
          We believe it is critical to redefine philanthropy. We believe we do
          this through our approach to collaboration. */}
          We at SOSF recognize that Investments play a crucial role in enhancing
          our reach, effectiveness, and impact.
          <P>
            Investments can be from individuals, private & public sector; and
            other NGOs to support SOSF interventions linked to SDG goals
            1,2,4,5,8,9,10,13, 17; and in various as below:
          </P>
        </span>
      ),
    },
  ];

  //partners slider images

  const marquees = [
    {
      direction: "left",
      images: [
        "/assets/images/logos/partners-logos/access bank.png",
        "/assets/images/logos/partners-logos/act.png",
        "/assets/images/logos/partners-logos/areai2.jpeg",
        "/assets/images/logos/partners-logos/australia.jpeg",
        "/assets/images/logos/partners-logos/child&green.png",
        "/assets/images/logos/partners-logos/iita.png",
        "/assets/images/logos/partners-logos/instruit.svg",
        "/assets/images/logos/partners-logos/kaftantv.jpg",
      ],
    },
    {
      direction: "right",
      images: [
        "/assets/images/logos/partners-logos/leprosy.png",
        "/assets/images/logos/partners-logos/mtn2.webp",
        "/assets/images/logos/partners-logos/nbc2.jpg",
        "/assets/images/logos/partners-logos/desk.jpeg",
        "/assets/images/logos/partners-logos/flow.jpeg",
        "/assets/images/logos/partners-logos/phase3.webp",
        "/assets/images/logos/partners-logos/root.png",
        "/assets/images/logos/partners-logos/seb.png",
        "/assets/images/logos/partners-logos/tongston.webp",
        "/assets/images/logos/partners-logos/udemy.png",
        "/assets/images/logos/partners-logos/unicef2.png",
        "/assets/images/logos/partners-logos/wayma.jpeg",
      ],
    },

    {
      direction: "left",
      images: [
        "/assets/images/logos/partners-logos/leprosy.png",
        "/assets/images/logos/partners-logos/mtn2.webp",
        "/assets/images/logos/partners-logos/nbc2.jpg",
        "/assets/images/logos/partners-logos/desk.jpeg",
        "/assets/images/logos/partners-logos/flow.jpeg",
        "/assets/images/logos/partners-logos/phase3.webp",
        "/assets/images/logos/partners-logos/root.png",
        "/assets/images/logos/partners-logos/seb.png",
        "/assets/images/logos/partners-logos/tongston.webp",
        "/assets/images/logos/partners-logos/udemy.png",
        "/assets/images/logos/partners-logos/unicef2.png",
        "/assets/images/logos/partners-logos/wayma.jpeg",
      ],
    },
  ];

  const investment_data = [
    {
      title: "SOSF Bridge",
      content: (
        <span>
          Life, Career, Academic, Technical, Vocational & Enterprise Skills
          Development in youth in government secondary schools and tertiary
          institutions through workshops deployed by trained school teachers’
          and opportunities provided through partners and mentors for the
          secondary students, as well as a digital platform for the tertiary
          students. The program connects junior and senior secondary-age
          education to higher education, employment & entrepreneurship.
        </span>
      ),
    },
    {
      title: "SOSF Headstart",
      content: (
        <span>
          SOSF Headstart for agropreneurs is a Community-based and
          Community-sustained agriculture value chain transformation-led
          livelihoods program incorporating technical, business, cooperative
          skills training, access to funding, critical inputs/tools and advisory
          services. It is deployed in 2 phases to achieve:
          <br />
          <br />
          <ul className="flex flex-col gap-y-4 list-dash ">
            <li>
              Improvement of yields / productivity of agricultural produce
            </li>
            <li> Value Addition of the high value raw agricultural produce</li>
          </ul>
        </span>
      ),
    },

    {
      title: " SOSF Online Skill up for Business & Careers",
      content: (
        <span>
          {" "}
          For entrepreneurs and intrapreneur —flagship digital courses designed
          to equip learners with knowledge, skills and attitude aligned with
          Tongston’s entrepreneurial thinking model and AI-supported tools to
          start impactful ventures or build meaningful careers, with access to
          further funding, and mentorship via the T-World platform, and SOSF
          Funds.
        </span>
      ),
    },
    {
      title: "SOSF Grants",
      content: (
        <span>
          A series of micro, small and large grants to build capacity, provide
          funding and other tools
        </span>
      ),
    },
    {
      title: "SOSF Funds:",
      content: (
        <span>
          All alumni / ambassadors of SOSF direct interventions have access to
          SOSF funds for employment/ entrepreneurship
          <br />
          <br />
          <li className="list-dash ">
            {" "}
            <b>Unrestricted</b>: To be allocated wherever the need is greatest
            as determined by us.
          </li>
        </span>
      ),
    },
  ];

  return (
    <div className="w-full h-[fixed] justify-start items-start flex flex-col gap-y-8 ">
      <section className="contents-container  w-full ">
        <SubHero
          items={hero_data}
          className={`w-full md:w-ful lg:w-full px-2  `}
        />
      </section>
      <section className="marque-carousel-section w-full flex flex-col gap-y-2  ">
        {/* <Marquee3
          marquees={marquees}
          speed={20}
          className={` border border-gray-800  rounded-xl  bg-gray-100   w-[500px] p-2 `}
        /> */}

        <AutoFocusTabs tabs={contributionTabs} />
        <H3></H3>

        <TabbedContentDisplay
          items={investment_data}
          sectionTitle="Investments can be"
          sectionDescription={
            <>
              <P className="mt-[4] mb-4">
                <ul className="list-disc flex flex-col gap-y-4 ">
                  <li>
                    <b>Restricted</b>: Tailored to specific areas of our work
                    with restriction
                  </li>
                  <li>
                    <b>Data</b>
                  </li>
                  <li>
                    <b>Advocacy</b>
                  </li>
                  <li>
                    <b>Interventions</b>
                  </li>
                </ul>
              </P>
            </>
          }
        />
      </section>{" "}
    </div>
  );
}
