import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faDollar,
  faKey,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import MaskButton from "../../../shared/Atoms/Button-Atoms/Mask-Button";
import { H3, P } from "../../../shared/Atoms/Typography/typography";

function ContextSwitcher() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const content = [
    {
      image:
        "https://teamascend.com/wp-content/uploads/2023/06/AdobeStock_589535195-min-1024x683.jpeg",
      title: "Partner With Us",
      description:
        "Collaborate to create lasting impact and drive mutual growth through strategic alliances.",
      link: "/get-involved/partner",
      route_name: "Partner",
      toptext: "Be  The Best Partnering With  The Best",
    },
    {
      image:
        "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/10/15153848/The-Career-Benefits-of-Volunteering-During-Your-Job-Search-2.jpg",
      title: "Volunteer With Us",
      description:
        "Lend your skills and passion to make a meaningful difference in our community.",
      link: "/get-involved/volunteer",
      route_name: "Volunteer",
      toptext: "",
    },
    {
      image:
        "https://www.investopedia.com/thmb/FRpRGt2TxD03vXvv_93MWVU7IyI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Term-Definitions_corporategovernance-dba10e3df300439597427b2518b96b93.png",
      title: "Governance Opportunities",
      description:
        "Shape the future by contributing to our mission with your leadership and expertise.",
      link: "/get-involved/govern",
      route_name: "Govern",
      toptext: "",
    },
    {
      image:
        "https://www.forbes.com/advisor/wp-content/uploads/2020/07/what-investing-e1595962588896.jpg",
      title: "Invest With Us",
      description:
        "Unlock potential and secure returns by investing in innovative opportunities.",
      link: "/get-involved/invest",
      route_name: "Invest",
      toptext: "",
    },
  ];

  const btns = [
    {
      icon: faUser,
      btn1: "Partner",
    },
    {
      icon: faKey,
      btn1: "Volunteer",
    },
    {
      icon: faHammer,
      btn1: "Governance",
    },
    {
      icon: faDollar,
      btn1: "Invest",
    },
  ];

  return (
    <div className="flex w-full h-[fixed] p-3 justify-start items-start pt-12 pb-9 md:h-[fixed] ">
      <div
        className={`w-full flex flex-col gap-y-[30px]  h-[fixed] gap-x-[30px] justify-between items-center p-3  bg-secondary_blue bg-opacity-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:w-full lg:h-[500px]  `}
      >
        <motion.section
          key={selectedIndex} // This forces a re-render when selectedIndex changes
          className="image-container overflow-hidden  relative flex flex-col w-full   md:w-[400px] h-[fixed]  md:h-[500px] justify-center items-center   mx-auto"
          animate={{ scale: [0.9, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={content[selectedIndex].image}
            alt="card-image"
            width={400}
            height={400}
            className="w-full h-[200px] md:w-full md:h-[400px]  object-fill  shadow-xl hover:scale-105 transition-all duration-700 ease-in-out  hover:transition-all hover:ease-in-out  hover:duration-700"
          />
        </motion.section>
        <motion.section
          key={`context-${selectedIndex}`} // This forces a re-render when selectedIndex changes
          className={`context-container mx-auto bg-slate-500 w-full lg:w-[500px] h-[250px] md:h-[400px] justify-center items-center  flex flex-col gap-y-4  shadow-xl ${
            selectedIndex === 0
              ? "b "
              : selectedIndex === 3
              ? "bg-slate-500"
              : ""
          }`}
          animate={{ scale: [0.9, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-[250px]  flex flex-col justify-center items-center gap-y-[30px] p-1">
            <H3 className="text-white">{content[selectedIndex].title}</H3>
            <P className="text-white text-center">
              {content[selectedIndex].description}
            </P>
            <Link href={content[selectedIndex].link}>
              <MaskButton
                buttontext={content[selectedIndex].route_name}
                className={`w-[200px] p-4 rounded-3xl  bg-opacity-100`}
              />
            </Link>
          </div>
        </motion.section>
        <section className="buttons-container flex flex-col  gap-y-[10px] mx-auto   p-2 w-full h-[fixed]   lg:w-[300px] md:left-[3.6rem]  lg:h-[400px] justify-center items-center  md:justify-start  rounded-3xl relative  lg:p-0">
          {btns.map((btn, index) => (
            <section
              key={index}
              className="flex flex-col gap-4 justify-center items-center"
            >
              <button
                className={`flex flex-row  font-mont font-bold gap-3  shadow-2xl justify-center items-center mx-auto  w-[320px]  h-[70px] lg:w-[270px]  md:h-[70px]   hover:ring-2  hover:ring-secondary_blue    hover:shadow-2xl ${
                  selectedIndex === index
                    ? "  bg-slate-500  text-white  transition-transform"
                    : " text-gray-800"
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <FontAwesomeIcon
                  icon={btn.icon}
                  className={` text-base shadow-xl font-bold  flex justify-start  ${
                    selectedIndex === index ? "text-white  " : "text-gray-800"
                  }`}
                />
                {btn.btn1}
              </button>
            </section>
          ))}
        </section>
      </div>
    </div>
  );
}

export default ContextSwitcher;
