import React, { useEffect, useRef, useState } from "react";
import { H3, P } from "@/components/shared/Atoms/Typography/typography";
import { gsap } from "gsap";
import Link from "next/link";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";
import ReusableModal from "@/components/shared/modals/reusablemodal";

export default function ContextNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("");

  const partnerModal = [
    <>
      <P className="w-full flex flex-col gap-y-3 mt-5">
        <br />
        <br />
        <ul className="flex flex-col gap-y-6 px-3 md:px-5">
          <li>
            <b>- Individuals</b> <br />
            <br />
            SOSF Scale Up Impact – as an applicant: SOSF Scale up impact
            <br />
            <br />
            <a href=" " target="blank" className="text-blue">
              Get Started
            </a>
          </li>
          {/* category 2  */}
          <li>
            <b>- Corporates [NGOs, private & public sector] </b> <br />
            <br />
            SOSF Strategic Impact Partnership – as an applicant – specific
            <br />
            <br />
            <a href=" " target="blank" className="text-blue">
              Get Started
            </a>
          </li>
        </ul>
      </P>
    </>,
  ];

  const ParticipateModal = [
    <>
      {" "}
      <P className="w-full flex flex-col gap-y-3 mt-5">
        <li className="list-disc  ">Data</li>
        <ul className="flex flex-col  list-disc  gap-y-3  px-[5rem]  mt-4 mb-5  ">
          <li>
            End-to-end evaluation / Thought Leadership access our reports &
            underlying data sets
          </li>
          <br />
          <br />
          <li className="list-disc  ">Interventions</li>
          <ul className="flex flex-col  list-disc  gap-y-3  px-[5rem]  mt-4 mb-5  ">
            <li>
              SOSF Bridge – as a teacher + as a student (advanced) + as a
              student alumnus (intermediate) + as a student alumnus
            </li>
            <li>SOSF Headstart – as a farmer (participant)</li>
            <li> SOSF Grants </li>
            <li> SOSF OSB</li>
            <li>SOSF Funds</li>
          </ul>{" "}
          <br />
          <br />
          <li className="list-disc  ">Advocacy</li>
          <ul className="flex flex-col  list-disc  gap-y-3  px-[5rem]  mt-4 mb-5  ">
            <li>
              Advocacy through Ambassadors as catalysts of change- as an alumni
              user (Ambassador) – Submit your initiative: ambassadors submit
              your initiative demonstrating how you are a catalyst for change
              <br />
              <a href="#" target="_blank" className="text-blue">
                Get Started
              </a>
            </li>
            <li>
              Advocacy through Volunteer Mobilization (Mobilizer)- access
              reports on our volunteers + register your organization to engage
              our volunteers for your work <br />
              <a href="#" target="_blank" className="text-blue">
                Register
              </a>
            </li>
            <li>
              {" "}
              Advocacy through Stakeholder Engagement & Coalition Formation – as
              a user (Connector)- indicate interest to form a coalition with
              SOSF / invite SOSF to join a coalition <br />
              <a href="#" target="_blank" className="text-blue">
                Join Now
              </a>
            </li>
            <li>
              {" "}
              SOSF OSB <br />{" "}
              <a href="#" target="_blank" className="text-blue">
                Access Service
              </a>
            </li>
            <li>
              Advocacy through Data & Research – Refer back to Data above{" "}
            </li>
            <li>
              Advocacy through mainstreaming / institutionalizing interventions
              (champion) register to support us to mainstream/institutionalise
              our interventions or the outcomes of interventions{" "}
            </li>
            <li>
              Advocacy for Awareness Building to co-host an event / strategic
              campaign / invite us to an event to speak <br />
              <a href="#" target="_blank" className="text-blue">
                Invite Now
              </a>
            </li>
            <li>
              Advocacy through Policy & Regulation Design & Implementation
              (Policy Advocate) to co-design a policy/regulation; or a manual
              for implementation{" "}
            </li>
          </ul>
        </ul>
      </P>
    </>,
  ];

  const ModalDescription = [
    <>
      <P className="w-full flex flex-col gap-y-3 mt-5">
        <H3>Form of Investment</H3>
        <li className="list-disc  ">Invest liquid assets</li>

        <ul className="flex flex-col  list-disc  gap-y-3  px-[5rem]  mt-4 mb-5  ">
          <li>Shares</li>
          <li>Bonds – Corporate / Government (Local)</li>
          <li>Bonds – Corporate / Government (Eurobond)</li>
          <li>Treasury Bills</li>
          <li>Fixed Deposits</li>
          <li>Commercial Paper</li>
          <li>Mutual Funds</li>
          <li>
            Annuity Contracts for which distributions are in favour of the Trust
          </li>
          <li>Waqf</li>
        </ul>
        <li className="list-disc  ">Invest liquid assets</li>
        <ul className="flex flex-col  list-disc  gap-y-3  px-[5rem]  mt-4 mb-5  ">
          <li>Cryptocurrency / NFTs</li>
          <li>Commodities</li>
          <li>Royalties, Mineral Rights & Licenses</li>
          <li>Partnership interests in a private vehicle / listed entity</li>
          <li>
            Real-Estate (Land / Completed Property; Residential / Commercial /
            Industrial)
          </li>
          <li>Movable Goods</li>
          <li>Art</li>
          <li>Jewelry & Antiques</li>
        </ul>
        <li className="list-disc  ">
          Invest cash – Direct financial contributions in the form of{" "}
        </li>
        <ul className="flex flex-col  list-disc  gap-y-3  px-[5rem]  mt-4 mb-5  ">
          <li>Individual Donation</li>
          <li>CSR Capital</li>
          <li>Grant Funding</li>
          <li>Zakat</li>
          <li>Sadaqah</li>
        </ul>
        <li className="list-disc  ">
          Invest in-kind resources (services + products + expertise)
        </li>
        <ul className="flex flex-col  list-disc  gap-y-3  px-[5rem]  mt-4 mb-5  ">
          <li>
            <b>In-Kind Resources – Products:</b> Contributing products or
            services from you or your organization at a subsidized rate, free,
            or adapting them to meet the needs of SOSF beneficiaries.
          </li>
          <li>
            <b>In-Kind Resources – Services:</b> Contributing products or
            services from you or your organization at a subsidized rate, free,
            or adapting them to meet the needs of SOSF Trust beneficiaries.
          </li>
          <li>
            <b>In-Kind Resources – Expertise:</b> Your network, knowledge or
            skills on a pro bono basis by joining the SOSF Advisory Council.
          </li>
        </ul>
      </P>
    </>,
  ];

  const navigation_items = [
    {
      title: "Volunteer",
      description: (
        <>
          Volunteer in our / third-party data, advocacy & interventions efforts
          as mentors, enumerators, trainers and more.
          <br />
          <a href="#" target="_blank" className="text-blue">
            Volunteer
          </a>
        </>
      ),
      cta: "Get Stated",
      route: "",
    },

    {
      title: "Partner",
      description: (
        <>
          As NGOs, private & public sector, partner with us to scale our / your
          programs or initiatives through co-design/delivery; consultancy;
          grants & more.
          <span className="flex flex-col gap-y-2 ">
            <a
              href="mailto: partner.relations@skillsoutsideschool.com"
              className="text-blue"
            >
              partner.relations@skillsoutsideschool.com
            </a>
            <button
              onClick={() => {
                setDescription(partnerModal);
                setIsOpen(true);
              }}
              className="px-4 py-2 bg-secondary_blue text-black rounded"
            >
              View Details
            </button>{" "}
            <ReusableModal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title=" "
            >
              <P>{description}</P>
            </ReusableModal>
          </span>
        </>
      ),
      cta: "Get involved",
      route: " ",
    },

    {
      title: "Invest",
      description: (
        <>
          <a href=" " target="blank" className="text-blue">
            Get Started
          </a>
          <br />
          <br />
          <button
            onClick={() => {
              setDescription(ModalDescription);
              setIsOpen(true);
            }}
            className="px-4 py-2 bg-secondary_blue text-black rounded"
          >
            View Details
          </button>{" "}
          <ReusableModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Form of investment "
          >
            <P>{description}</P>
          </ReusableModal>
        </>
      ),
      cta: "Donate",
      route: "",
    },

    {
      title: "Govern",
      description: (
        <>
          <P className="w-full flex flex-col gap-y-5 mt-5">
            <li className="list-disc"> Join the Advisors</li>
            <a href="" className="text-blue">
              Join Now
            </a>

            <li className="list-disc">
              Join the Team - Executive Council <br />
              <a href="" className="text-blue">
                Join Now
              </a>
            </li>
            <li>
              Join the Board of Trustees
              <br />
              <a href="" className="text-blue">
                Join Now
              </a>
            </li>
          </P>
        </>
      ),
      cta: "Get Started",
      route: "/get-involved/govern",
    },

    {
      title: "Participate",
      description: (
        <>
          {/* this will open the modal  */}
          <button
            onClick={() => {
              setDescription(ParticipateModal);
              setIsOpen(true);
            }}
            className="px-4 py-2 bg-secondary_blue text-black rounded"
          >
            View Details
          </button>{" "}
          <ReusableModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title=" "
          >
            <P>{description}</P>
          </ReusableModal>
        </>
      ),
      cta: "Get Started",
      route: "",
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      stagger: 0.5, // Delay between each card
      duration: 0.9,
      ease: "power2.out", // Smooth fade-in effect
    });
  }, []);

  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-8 justify-start items-start p-2 px-3 md:px-[4rem] lg:px-[7.6rem]">
      {navigation_items.map((nav_item, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className={`w-full    h-[fixed]        md:min-h-[200px] md:max-h-[fixed] bg-slate-500 bg-opacity-10 shadow-xl  flex flex-col md:flex-row gap-x-8 gap-y-8 justify-center items-center p-1  pb-8 ${
            index === 1
              ? "md:w-[90%]  md:ml-auto"
              : index === 2
              ? "md:w-[90%]"
              : index === 3
              ? "md:w-[90%] md:ml-auto"
              : index === 4
              ? "md:w-[90%] "
              : "md:w-[90%]"
          }`}
        >
          <section className="title-description-container container flex flex-col gap-y-3 justify-center items-start w-full md:w-[90%]  ">
            <H3>{nav_item.title}</H3>
            <P>{nav_item.description}</P>
          </section>

          {/* <Link
            href={nav_item.route}
            target="_blank"
            className="call-action-section container  text-gray-800   flex flex-col justify-center items-center  ml-auto mr-2 border  bg-secondary_blue font-bold font-mont   w-full  md:w-[15%] h-[60px] p-2  "
          >
            {nav_item.cta}
          </Link> */}
        </div>
      ))}
    </div>
  );
}
