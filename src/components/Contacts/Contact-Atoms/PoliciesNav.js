import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


function PoliciesNav() {
  const head=[
    {
      heading1: "Policies & Guidelines",
    },
  ];
  const thelinks = [
    { name: "Ethics Reporting Guidelines ", to: "/contact/ethics-reporting" },
    { name: "Legal Disclaimer", to: "/contact/legal-disclaimer" },
    { name: "Terms of Use", to: "/contact/terms-of-use" },
    { name: "Privacy Policy", to: "/contact/privacy-policy" },
    { name: "Reporting Scams", to: " /contact/reporting-scams" },
   
  ];

  return (
    <div className="   w-full  h-[fixed] md:h-[650px]  flex flex-col justify-center items-center  lg:w-[500px] ml-auto  md:w-[700px]   ">
      <div className=" relative flex justify-start items-center w-full h-[fixed]   ml-auto   md:w-[500px] ">
  


        <div className="bg-secondary_blue z-20 bg-opacity-70  flex flex-col gap-y-5 justify-center items-center w-full h-[400px] lg:w-[300px]  md:w-[500px]  md:h-[500px]  ml-auto  lg:mt-[3.5rem] ">
        <h3 className="text-[#000000] font-lato font-bold  text-lg  md:text-xl mr-auto px-2">
          Policies & Guidelines
        </h3>
          {thelinks.map((links, index) => (
            <Link
              href={links.to}
              key={index}
              className="mt-1   text-[#000000] text-base font-inter  font-normal   hover:translate-x-5 transform ease-in-out duration-700  text-left w-full px-4"
            >
              {links.name}
              <span className="   text-[#000000]  text-base ml-3 ">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="brochure-button  brochure-icon"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PoliciesNav;
