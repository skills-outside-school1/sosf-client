import React, { useState, useEffect } from "react";
import Case from "../shared/headings/Case";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Marquees from "../FooterComps/Marquees";
import Subscribe from "../Contacts/Contact-Atoms/Subscribe";
import FooterAnimation from "../shared/animations/FooterAnimation";

import { AnimatePresence } from "framer-motion";

function Footer({ onClose }) {
  const footelinks = [
    { name: "SOSF Bridge", to: "/get-involved" },
    { name: "SOSF Headstart", to: "/get-involved" },
    { name: "SOSF Funds", to: "/get-involved" },
    { name: "SOSF Grants", to: "/get-involved" },
    { name: "SOSF OSBC", to: "/get-involved" },
    { name: "SOSF Data", to: "/get-involved" },
    { name: "SOSF Advocacy", to: "/get-involved" },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      to: "https://web.facebook.com/skilloutsideschool/",
      icon: faFacebook,
    },
    {
      name: "Instagram",
      to: "https://www.instagram.com/skillsoutsideschool/",
      icon: faInstagram,
    },
    { name: "Twitter", to: "#", icon: faXTwitter },
    {
      name: "LinkedIn",
      to: "https://www.linkedin.com/company/skills-outside-school-foundation/",
      icon: faLinkedin,
    },
    {
      name: "Youtube",
      to: "https://www.youtube.com/@skillsoutsideschoolfoundat9442",
      icon: faYoutube,
    },
    {
      name: "Email",
      to: "mailto:info@skillsoutsideschool.com",
      icon: faEnvelope,
    },
  ];

  return (
    <div className="footer-container   w-full h-[fixed] pb-8 bg-secondary_blue bg-opacity-70   flex flex-col gap-y-[5rem]     py-8  justify-start lg:items-start px-2  overflow-hidden">
      <Marquees />

      {/* <Link href="/">
        <h1 className="   text-gray-800  hover:text-blue  font-mont font-thin  md:ml-6  transform duration-700 ease-in-out    animated-text ">
          {" "}
          S O S F
        </h1>
      </Link> */}
      <FooterAnimation />

      <div className="grid grid-cols-1 gap-y-8 justify-start items-center  w-full  gap-x-4  lg:grid-cols-2 ">
        <section className="w-full flex flex-row flex-wrap gap-x-6 justify-start items-start gap-y-3   md:px-6 lg:border-r-2 lg:border-r-[#000000] ">
          {footelinks.map((link, index) => (
            <Link
              href={link.to}
              key={index}
              className={`text-[#000000] hover-line  space-x-6  hover:text-blue font-lato  font-bold text-sm  ${
                index == 1 ? "" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </section>
        <section className="flex flex-col md:flex-row  w-full justify-center items-center gap-y-8   gap-x-9  ">
          <div className="copyright-section   w-full  md:w-[600px]  md:px-4  lg:px-0   justify-start items-start ">
            <p className="text-gray-800 font-lato  w-full  font-bold text-sm  ">
              &copy; Skills Outside School Foundation {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex flex-row gap-x-3 justify-start items-start  w-full  lg:w-[300px]    ">
            {socialMedia.map((media, index) => (
              <a
                href={media.to}
                target="_blank"
                key={index}
                className={`text-gray-800 hover-line  space-x-6  hover:text-blue font-montserrat    ${
                  index == 1 ? "" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={media.icon}
                  className="text-xl ml-auto flex"
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
