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
import Image from "next/image";
import React from "react";
import { H2, H3 } from "../shared/Atoms/Typography/typography";

const Footer = () => {
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
    <div className="bg-[#CDD9F7] px-4 md:px-[4rem] lg:px-[7.6rem] py-8 md:pt-20 font-inter">
      <div>
        <div className=" flex">
          <div className=" flex flex-col gap-6">
            <Image
              src="/assets/images/logos/sos-logo.png"
              alt="logo"
              width={120}
              height={120}
            />
            <p className=" font-semibold">Follow Us</p>
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
          </div>
          <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Our Company */}
            <div className=" text-center flex flex-col gap-3">
              <H3>Our Company</H3>
              <Link href="/">News</Link>
              <Link href="/">About</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Insights</Link>
              <Link href="/">Get Involved</Link>
            </div>
            {/* Our Interventions */}
            <div className=" text-center flex flex-col gap-3">
              <H3>Our Interventions</H3>
              <Link href="/get-involved">SOSF OSBC</Link>
              <Link href="/get-involved">SOSF Bridge</Link>
              <Link href="/get-involved">SOSF Funds</Link>
              <Link href="/get-involved">SOSF Grants</Link>
              <Link href="/get-involved">SOSF Headstart</Link>
            </div>
            {/* Our Work */}
            <div className=" text-center flex flex-col gap-3">
              <H3>Our Work</H3>
              <Link href="/get-involved">SOSF Data</Link>
              <Link href="/get-involved">SOSF Advocacy</Link>
              <Link href="/get-involved">SOSF Interventions</Link>
            </div>
          </div>
        </div>

        <div className=" mt-10 flex justify-between items-center">
          <p className=" font-inter">
            {" "}
            &copy; Skills Outside School Foundation {new Date().getFullYear()}
          </p>
          <p>Copyright by SOSF. All rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
