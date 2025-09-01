import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SubHero from "./SubHero";
import Link from "next/link";
import AccordionComponent from "@/components/shared/accordions/Accordion1";
import { P } from "@/components/shared/Atoms/Typography/typography";

export default function Collaboration() {
  // Define core values data
  const coreValues = [
    {
      title: "Value of Learning",
      content: (
        <span className="">
          We value learning and feedback, recognizing the importance of sharing
          knowledge, skills, and experiences to scale our impact.
        </span>
      ),
      image: "/assets/images/our_work/home/collabo.jpg",
    },
    {
      title: "Strategic Partnerships",
      content: (
        <span className="">
          We partner with individuals and institutions that share our values,
          mission, and vision. We drive this through our initiatives &
          challenges desk.
        </span>
      ),
      image: "/assets/images/our_work/hero_1.jpg",
    },
    {
      title: "Open Datasets",
      content: (
        <span className="">
          We make our annual reports, financial statements, and information on
          our beneficiaries, volunteers, and partners publicly available to
          provide insights into our activities, investments, and initiatives.
          See our open access policy statement.
        </span>
      ),
      image: "/assets/images/our_work/hero_2.jpg",
    },

    {
      title: "Knowledge Sharing",
      content: (
        <span className="">
          We actively share knowledge through articles, newsletters, webinars,
          impact reports, evaluation reports, research studies, and endline
          evaluations. Our website serves as a repository of information, and we
          maintain profiles on open platforms like DevEx, LinkedIn, and other
          social media channels.
        </span>
      ),
      image:
        "https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg",
    },

    {
      title: "Transparent Communication",
      content: (
        <span className="">
          We practice transparent communication about our processes, strategies,
          and internal operations. This transparency enables us to learn,
          invites constructive feedback internally and externally, and ensures
          that we maintain excellence in our work.
          <br />
          <br />
          Our pledge to integrity, service, innovation and collaboration is more
          than a statement; it&apos;s a practice that guides our actions,
          decisions, and interactions. We strive to maintain the highest ethical
          standards, provide exceptional service, and collaborate effectively
          with our stakeholders, beneficiaries, and partners.
        </span>
      ),
      image: "/assets/images/our_work/home/partners.jpg",
    },
  ];

  // State for the currently selected core value
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full  flex flex-col gap-y-8 ">
      <section className=" w-full   ">
        <SubHero
          text={
            <span className=" flex flex-col gap-y-[2rem] justify-start items-start  ">
              <span className="flex flex-col gap-y-4 justify-start items-start ">
                <h3 className="text-gray-800 font-mont  text-2xl     lg:text-3xl  font-bold ">
                  Collaboration
                </h3>
                <P className={``}>
                  Collaboration is vital since no single entity can address
                  global challenges in isolation. By merging resources,
                  knowledge, and innovations across various sectors like
                  governments, NGOs, and businesses, we can amplify our impact.
                  Cross-sectoral and jurisdictional collaborations specifically
                  encourage innovation and mutual cooperation, fast-tracking our
                  progress towards the SDGs and envisioning a sustainable future
                  for all.
                  <br />
                  <br />
                  We&apos;ve historically joined hands with prominent
                  organizations and individuals in alignment with the 17th SDG,
                  emphasizing Investments for global progress in delivering our
                  mandate and furthering the objectives and goals of
                  organizations’ where their mandate aligns with ours.
                  <br />
                  <br />
                  At the Skills Outside School Foundation, we offer two dynamic
                  paths for collaboration:
                </P>
                <span className="  list-dash  flex flex-col gap-y-7 mt-4 mb-4">
                  <li>
                    <b>Investments</b>: through investment in designing,
                    implementing and scaling SOSF programs and initiatives{" "}
                    <strong>
                      [this path is for individuals or organizations that seek
                      to contribute in cash, assets or in-kind to further our
                      work and that of our beneficiaries]
                    </strong>
                    , or
                  </li>
                  <li>
                    <b>Partnerships</b>: through our corporate and individual
                    innovative partnerships as discussed below{" "}
                    <strong>
                      [this path is for individuals / organizations that are
                      keen to partner with us to design/execute their own
                      initiatives & schemes; or provide grants / resources to a
                      wide range of beneficiaries]
                    </strong>
                  </li>
                </span>
              </span>
            </span>
          }
        />
      </section>

      <section className="heading-section flex justify-center items-center w-full">
        <h2 className="text-gray-800 font-black font-mont text-center text-2xl     lg:text-3xl  ">
          Our Commitment to Collaboration
        </h2>
      </section>

      <div className="switch-container sm:hidden flex flex-row justify-start items-start pb-5 w-full   md:ml-[6rem]">
        {/* Title list */}
        <section className="flex flex-col justify-start items-start">
          <div className="bg-[#dee8f0d1] w-[270px] h-[500px] flex flex-col gap-y-8 p-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-2 cursor-pointer font-black transition-transform hover:-translate-y-3 duration-700 ease-in-out w-full  ${
                  activeIndex === index
                    ? "text-[#6A80B8] font-mont "
                    : "border-b-2 border-b-stone-200 text-gray-500 transition-transform duration-1000 ease-in-out hover:text-gray-800 font-mont "
                } relative overflow-hidden`}
              >
                {value.title}
                {activeIndex === index && (
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#6A80B8] w-[80%]  transition-transform duration-700 ease-in-out ${
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-full"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Content box with animation */}
        <div className="bg-secondary_blue w-[700px] min-h-[500px] max-h-[500px]  overflow-y-auto p-6 flex items-start justify-start  text-[#000000] font-normal md:leading-[35px]   font-inter text-base md:text-[18.56px]  text-left md:tracking-wide ">
          <motion.section
            key={activeIndex} // Unique key for re-rendering
            initial={{ translate: 0.9, opacity: 0 }}
            animate={{ translate: 1, opacity: 1 }}
            exit={{ translate: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[90%]  mt-6"
          >
            <P></P>
            {coreValues[activeIndex].content}
          </motion.section>
        </div>

        {/* Image box with animation */}
        <motion.div className="relative right-[2rem] -[500px] h-[400px]   overflow-hidden ">
          <motion.section
            key={`image-${activeIndex}`} // Unique key for image re-rendering
            initial={{ translate: 0.9, opacity: 0 }}
            animate={{ translate: 1, opacity: 1 }}
            exit={{ translate: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={coreValues[activeIndex].image}
              alt={coreValues[activeIndex].title}
              width={500}
              height={500}
              className="w-[500px] h-[400px]  object-cover"
              style={{ filter: "grayscale(100%" }}
            />
          </motion.section>
        </motion.div>
      </div>

      <AccordionComponent
        accordions={coreValues}
        className="my-4"
        imageStyle={{ filter: "grayscale(100%" }}
      />
    </div>
  );
}
