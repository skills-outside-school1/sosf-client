import { H2, P } from "@/components/shared/Atoms/Typography/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripLinesVertical,
  faPeopleArrows,
  faProcedures,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-scroll";

export default function DataScrollLinks() {
  const items = [
    {
      avatar: faPeopleArrows,
      title: "Multilingual, voice-enabled, AI-integrated",
      scroll_ref: "end-to-end",
    },

    {
      avatar: faProcedures,
      title: "Offline-capable & mobile-first ",
      scroll_ref: "consultancy-section",
    },
    {
      avatar: faGripLinesVertical,
      title: "Auto-generates baseline, midline, endline, and impact reports",
      scroll_ref: "research-section",
    },
    {
      avatar: faPeopleArrows,
      title:
        "Connects with global tools: MOSIP, Firebase, Google Maps, Salesforce, AMP",
      scroll_ref: "end-to-end",
    },
  ];

  return (
    <div className="flex flex-col gap-y-5 justify-center mx-auto items-center p-2">
      <H2 className="px-2 md:px-[4rem] lg:px-[7rem]">What Makes It Special?</H2>
      <section className="scroll-links-section  mx-auto  grid grid-cols-2  md:grid-cols-3 gap-y-5 gap-x-[4rem] justify-center items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={` ${index === 3 ? " md:col-span-3 mx-auto" : ""}`}
          >
            <Link
              to={item.scroll_ref}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="scroll-link flex flex-col gap-y-5 justify-center items-center"
            >
              <div className=" group rounded-buttons relative p-2 rounded-[100%] bg-secondary_blue bg-opacity-20 w-[100px] h-[100px] flex justify-center items-center cursor-pointer">
                <div className="absolute inset-0 rounded-[100%] bg-blue   opacity-10   group-hover:animate-none transform duration-700 ease-in-out"></div>
                <FontAwesomeIcon
                  icon={item.avatar}
                  className="text-gray-800 text-4xl relative z-10"
                />
              </div>
              <P className={`w-[80%] text-center`}>{item.title}</P>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
