import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { P, H3 } from "@/components/shared/Atoms/Typography/typography";

export default function AmbHow() {
  const switch_data = [
    {
      title: "Advocacy",
      content: (
        <span className="">
          Ambassadors are instrumental in advocating for SOSF&apos;s mission and
          impact. SOSF bridge ambassadors contribute to shout-outs in partner
          schools to raise awareness when new program cycles are implemented;
          they mentor their colleagues/peers and support us in keeping in touch
          with fellow ambassadors through regular management of ambassador
          engagement activities on SOS connect. In SOSF Bridge, targeting
          teachers is key as a way to expand the coverage of work we do as for
          every teacher you train, you have indirectly supported “x” no of
          students even without the step down by the teachers to other teachers.
          This is based on the average number of students each teacher teaches
          to determine indirect beneficiaries. SOSF Headstart farmers act as
          community mobilizers for our program activities particularly for
          monitoring & evaluation purposes. They also support our work by
          volunteering/working for the Foundation from time to time in the
          interventions; administration; and media & communications.
        </span>
      ),
      image: "/assets/images/icons/svgs/bullhorn-svgrepo-com.svg",
    },
    {
      title: "Training and Mentorship",
      content: (
        <span className="">
          We equip our ambassadors with valuable knowledge and skills through
          training and mentoring opportunities. They, in turn, share this
          learning with our beneficiaries, acting as mentors and sources of
          guidance. This is the case through social change projects deployed by
          SOSF Bridge Ambassadors and L4C alumni also participate in the Alumni
          Series.
        </span>
      ),
      image: "/assets/images/icons/svgs/training-watch-svgrepo-com.svg",
    },
    {
      title: "Donation / Investments",
      content: (
        <span className="">
          Many of our SOSF ambassadors have become donors or funders of our
          work. Ambassadors like Samson Okaludo and Fatima Ali Konto of the SOSF
          Bridge have regularly contributed to the foundation, demonstrating
          their commitment to our mission. We document contributions and support
          provided by ambassadors who have transitioned into donors or funders
          of SOSF initiatives.
        </span>
      ),
      image:
        "/assets/images/icons/svgs/investment-portfolio-money-investment-cash-payment-svgrepo-com.svg",
    },
    {
      title: "Social Change Projects",
      content: (
        <span className="">
          Our beneficiaries have deployed meaningful businesses and social
          change projects including Online platform with Q&A for senior
          secondary students on difficult subjects, Abuja Entertainment Hub, an
          FCT events planning platform, Silent Stars that supports youths with
          hearing disabilities with sign language training, public speaking and
          confidence skills training for youth church members, member of the
          ECOWAS youth parliament, Shea butter export business to Germany and
          the US.
        </span>
      ),
      image: "/assets/images/icons/svgs/change-password-svgrepo-com.svg",
    },
    {
      title: "Impact Investing",
      content: (
        <span className="">
          The Impact Investing Approach will be managed by our partner, Tongston
          Ventures, through a number of funds.
          <ul className="list-disc px-2 lg:px-3 flex flex-col gap-y-4  mt-5 ">
            <li>
              {" "}
              SOSF Bridge Ambassadors Scholarship Fund - Secondary Edition
              (PRI): This fund will provide scholarships and repayable grants to
              support young people in secondary schools.
            </li>
            <li>
              {" "}
              SOSF Bridge Ambassadors Scholarship Fund - Tertiary Edition (PRI):
              This fund will continue to provide scholarships and repayable
              grants to students pursuing higher education.
            </li>

            <li>
              {" "}
              SOSF Bridge Ambassadors Ventures Fund (PRI): This fund will
              support Bridge Ambassadors in the Intermediate and Advanced
              levels, by providing repayable grants as startup capital for their
              social enterprise ventures.
            </li>
            <li>
              SOSF Lead for Change Ambassadors Social Enterprise Project Fund
              (PRI): This fund will support social entrepreneurs and social
              change makers through capacity building and convertible loans or
              quasi-equity to scale their social enterprises and projects.
            </li>
          </ul>
          All funds managed by Tongston Ventures will be classified as
          program-related investments (PRIs) in alignment with SOSF&apos;s
          Impact Investing Approach.
        </span>
      ),
      image: "/assets/images/icons/svgs/application-effect-svgrepo-com.svg",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full h-auto justify-center items-center px-2 md:px-[4rem] lg:px-[7rem] ">
      {/* Heading Section */}
      <section className="heading-section-content pb-4 flex flex-col gap-y-2 justify-center items-center">
        <h3 className="text-gray-800 font-mont text-2xl lg:text-4xl font-bold">
          How?
        </h3>
        <p className="text-[#000000] font-normal md:leading-[35px] font-inter text-base md:text-[18.56px] text-left md:tracking-wide">
          Ambassadors Catalysing Impact
        </p>
      </section>

      {/* Accordion Section */}
      <section className="switching-display-items-section grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4  gap-x-[4rem]  lg:mr-auto   relative  md:right-[4rem] lg:right-[3.6rem]">
        {switch_data.map((item, index) => (
          <div
            key={index}
            className={`rounded-md p-4  cursor-pointer transition-all duration-300  group  ${
            index ===3? "lg:relative  lg:left-[9rem] " : index===4? "lg:relative  lg:left-[13.5rem]" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            {/* Title with Arrow Indicator */}
            <div className="flex flex-col gap-y-4  justify-center items-center  ">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={60}
                className="w-[80px] h-[40px] object-cover"
              />
              <span className="flex flex-col gap-x-2  justify-center items-center ">
                <H3
                  className={`font-black lg:group-hover:text-blue  `}
                >
                  {item.title}
                </H3>
                <span
                  className={`transform transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-gray-800 text-xl  lg:group-hover:text-blue "
                  />
                </span>
              </span>
            </div>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out  shadow-xl  rounded-md  px-2   ${
                expandedIndex === index
                  ? " max-h-[600px]  w-full lg:max-h-[900px] lg:p-2  md:max-h-[800px]   md:min-w-[250px]  lg:min-w-[350px] mt-3  bg-secondary_blue bg-opacity-40 "
                  : "max-h-0  lg:min-w-[350px]   md:min-w-[250px] "
              }`}
            >
              <P className=" text-sm lg:text-base">
                {item.content}
              </P>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
