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
import { H3 } from "../shared/Atoms/Typography/typography";

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

  // 🗂 Footer sections structured for mapping
  const footerSections = [
    {
      title: "Our Company",
      links: [
        { name: "News", href: "/" },
        { name: "About", href: "/" },
        { name: "Careers", href: "/careers" },
        { name: "Insights", href: "/news-insights" },
        { name: "Get Involved", href: "/get-involved" },
      ],
    },
    {
      title: "Our Interventions",
      links: [
        { name: "SOSF OSBC", href: "/get-involved" },
        { name: "SOSF Bridge", href: "/get-involved" },
        { name: "SOSF Funds", href: "/get-involved" },
        { name: "SOSF Grants", href: "/get-involved" },
        { name: "SOSF Headstart", href: "/get-involved" },
      ],
    },
    {
      title: "Our Work",
      links: [
        { name: "SOSF Data", href: "/get-involved" },
        { name: "SOSF Advocacy", href: "/get-involved" },
        { name: "SOSF Interventions", href: "/get-involved" },
      ],
    },
  ];

  return (
    <div className="bg-[#CDD9F7] px-4 md:px-[4rem] lg:px-[7.6rem] py-8 md:pt-10 font-inter">
      <div>
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Left: Logo + Socials */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
              <Image
                src="/assets/images/logos/sos-logo.png"
                alt="logo"
                width={120}
                height={120}
                className=" flex justify-center items-center"
              />
              <p className="font-semibold mt-6 text-center md:text-left">
                Follow Us
              </p>
            </div>
            <div className="flex flex-row gap-x-3 justify-center md:justify-start items-start w-full lg:w-[300px]">
              {socialMedia.map((media, index) => (
                <a
                  href={media.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="text-gray-800 hover-line hover:text-blue font-montserrat"
                >
                  <FontAwesomeIcon
                    icon={media.icon}
                    className="text-xl ml-auto flex"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Footer Sections */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {footerSections.map((section, i) => (
              <div key={i} className="text-center flex flex-col gap-3">
                <H3>{section.title}</H3>
                {section.links.map((link, j) => (
                  <Link key={j} href={link.href}>
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-inter text-center md:text-left">
            &copy; Skills Outside School Foundation {new Date().getFullYear()}
          </p>
          <p className="text-center md:text-right">
            Copyright by SOSF. All rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
