import React from "react";
import { H2, P } from "@/components/shared/Atoms/Typography/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

export default function FrameWork({
  title = "What Makes It Special?",
  items = [],
  columns = "grid-cols-2 md:grid-cols-3",
  className = "",
}) {
  return (
    <div
      className={`flex flex-col gap-y-5 justify-center mx-auto items-center p-2 ${className}`}
    >
      <H2 className="px-2 md:px-[4rem] lg:px-[7rem]">{title}</H2>

      <section
        className={`scroll-links-section mx-auto grid ${columns} gap-y-5 gap-x-[4rem] justify-center items-center`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={index === 3 ? "md:col-span-3 mx-auto" : ""}
          >
            <Link
              to={item.scroll_ref}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="scroll-link flex flex-col gap-y-5 justify-center items-center"
            >
              <div className="group rounded-buttons relative p-2 rounded-full bg-secondary_blue bg-opacity-20 w-[100px] h-[100px] flex justify-center items-center cursor-pointer">
                <div className="absolute inset-0 rounded-full bg-blue opacity-10 transform duration-700 ease-in-out group-hover:animate-none"></div>
                <FontAwesomeIcon
                  icon={item.avatar}
                  className="text-gray-800 text-4xl relative z-10"
                />
              </div>
              <P className="w-[80%] text-center">{item.title}</P>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
