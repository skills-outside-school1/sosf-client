import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SubHero from "./SubHero";
import AccordionComponent from "@/components/shared/accordions/Accordion1";
import { P } from "@/components/shared/Atoms/Typography/typography";

export default function Integrity() {
  // Define core values data
  const coreValues = [
    {
      title: "Openness",
      content: (
        <span className="">
          We are open in our communication, sharing our strategies and outcomes
          with the public
        </span>
      ),
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQGL8v8aboZLEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695972359380?e=1755734400&v=beta&t=b6HaCb05dzTRRePk-PJMKODZx0AEj5SWEU3EZb-zo10",
    },
    {
      title: "Transparency",
      content: (
        <span className="">
          Transparency is at the core of our approach, ensuring that our work is
          visible and understandable to all. How
          <li className="mt-5 list-none  px-5">
            -Financials <br /> <br />
            <span className="text-base">
              We are committed to publishing consistent financial data in
              formats that align with open data standards. This practice
              promotes clarity, enables in-depth analysis, and upholds our
              commitment to accountability.
            </span>
          </li>
        </span>
      ),
      image:
        "https://dfjx2uxqg3cgi.cloudfront.net/img/photo/256287/256287_00_2x.jpg?20220512150646=",
    },

    {
      title: "Accountability",
      content: (
        <span className="">
          We hold ourselves accountable for our actions, decisions, and their
          impact. We take responsibility for our actions and decisions,
          fostering accountability within our organization.
        </span>
      ),
      image:
        "https://bstate.com/wp-content/uploads/2023/10/what-are-the-best-practices-for-building-accountability-in-a-team-652f98d3d4fdb.webp",
    },

    {
      title: "Trustworthiness",
      content: (
        <span className="">
          We aim to foster trust with our stakeholders, beneficiaries, and
          partners.
        </span>
      ),
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQEw3oDEXLqr7A/article-cover_image-shrink_600_2000/B56ZaENu5MHUAU-/0/1745974914993?e=2147483647&t=liMiHF7x1qcgfINvLgKHH5vXSlu74cMAh2roLzbInkA&v=beta",
    },

    //under other
    {
      title: "Social Responsibility",
      content: (
        <span className="">
          We believe in social responsibility, encompassing our commitment to
          openness, transparency, and accountability.
        </span>
      ),
      image:
        "https://www.workitdaily.com/media-library/employees-pose-for-a-photo-after-taking-part-in-a-workplace-community-service-project.jpg?coordinates=0%2C61%2C0%2C32&height=700&id=22510610&quality=85&width=1245",
    },

    {
      title: "Quality Assurance and Service Delivery",
      content: (
        <span className="">
          We strive to provide the highest quality in our work. We are a
          learning organization that constantly seeks improvement. We learn by
          doing, gather data on the delivery and institutionalization of our
          work, and embrace lifelong learning to provide the best quality
          service to our beneficiaries and partners.
        </span>
      ),
      image:
        "https://images.squarespace-cdn.com/content/v1/58b71e6f6a4963b4cc2c78b8/1489782934659-BYHU69CF4C63V2TMI45C/Business-People%2B-%2BCopy.jpg",
    },
  ];

  // State for the currently selected core value
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full  flex flex-col gap-y-8 ">
      <section className=" w-full   "></section>

      <section className="heading-section flex flex-col gap-y-4  justify-center items-center w-full">
        <h2 className="text-gray-800 font-black font-mont text-center text-2xl     lg:text-3xl  ">
          Our Commitment to Integrity
        </h2>
        <h4 className="text-gray-800 font-semibold  font-schoolbook text-center text-xl     lg:text-2xl  ">
          Integrity Principles
        </h4>
      </section>

      <div className="switch-container  sm:hidden flex flex-row justify-start items-start pb-5 w-full   md:ml-[6rem]">
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
                    : "border-b-2  border-b-stone-200 text-gray-500 transition-transform duration-1000 ease-in-out hover:text-gray-800 font-mont "
                } relative overflow-hidden`}
              >
                {value.title}
                {activeIndex === index && (
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-secondary_blue  w-[80%] transition-transform duration-700 ease-in-out   ${
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
        <div className="bg-secondary_blue w-[700px] h-[500px] p-6 flex items-start justify-start  text-[#000000] font-normal md:leading-[35px]   font-inter text-base md:text-[18.56px]  text-left md:tracking-wide ">
          <motion.section
            key={activeIndex} // Unique key for re-rendering
            initial={{ translate: 0.9, opacity: 0 }}
            animate={{ translate: 1, opacity: 1 }}
            exit={{ translate: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[90%]  mt-6"
          >
            <P className={``}>{coreValues[activeIndex].content}</P>
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
              style={{
                filter: "grayscale(100%)",
              }}
            />
          </motion.section>
        </motion.div>
      </div>

      <AccordionComponent
        accordions={coreValues}
        className="my-4"
        imageStyle={{ filter: "grayscale(100%)" }}
      />
    </div>
  );
}
