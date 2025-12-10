"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";

const Nav2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isWorkHovered, setIsWorkHovered] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [isInterventionOpen, setIsInterventionOpen] = useState(false);

  const navigationLinks = [
    {
      name: "About",
      to: "/about",
      dropdown: [
        {
          title: "About Us",
          links: [
            { name: "Who We Are", to: "/who-we-are" },
            { name: "Our History ", to: "/our-history" },
            { name: "Our Pillars", to: "/our-pillars" },
            { name: "Our Core Values", to: "/core-values" },
            { name: "Our USPs", to: "/our-usp" },
            { name: "Our Strategic Model", to: "/our-strategic-model" },
            { name: "Our Focus Area", to: "/our-focus-areas" },
            { name: "Our Target Audience", to: "/our-target-audience" },
          ],
        },
        {
          title: "Our Leadership",
          links: [{ name: "Leaderships", to: "/leadership" }],
        },
        {
          title: "People & Purpose",
          links: [
            { name: "Ambassadors", to: "/ambassadors" },
            { name: "Our-Impact", to: "/our-impact" },
          ],
        },
        {
          title: "Global Goals",
          links: [{ name: "SDGs We Align With", to: "/sdgs" }],
        },
        {
          title: "Collaborations",
          links: [{ name: "Our Partners & Investors", to: "/collaborations" }],
        },
      ],
    },
    { name: "Our Work", to: "/our-work" },
    // { name: "Insights", to: "/news-insights" },
    { name: "Get Involved", to: "/get-involved" },
    // { name: "Careers", to: "/careers" },
    { name: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-in-cubic" });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!menuOpen) setExpandedAccordion(null);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  const router = useRouter();

  const toggleAccordion = (index) =>
    setExpandedAccordion(expandedAccordion === index ? null : index);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setIsAboutHovered(false);
    setIsWorkHovered(false);
  };

  const NestedInterventions = () => {
    const toggleInterventionMenu = () => {
      setIsInterventionOpen(!isInterventionOpen);
    };

    return (
      <div className="relative">
        <button
          onClick={toggleInterventionMenu}
          className="flex items-center justify-between font-normal hover:text-secondary_blue w-full"
        >
          <span>Interventions</span>
          <span
            className={`transform transition-transform duration-300 ${
              isInterventionOpen ? "rotate-90" : ""
            }`}
          >
            <FaChevronRight />
          </span>
        </button>

        <div
          className={`absolute top-0 left-full ml-2 bg-[#F6F6F6] rounded-xl shadow-md py-3 px-5 w-[280px] transition-all duration-500 ease-in-out transform z-50 ${
            isInterventionOpen
              ? "opacity-100 translate-x-5"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <Link
            href="/sosf-headstart-agropreneurs"
            className="block py-1 hover:text-secondary_blue text-base md:text-xs"
            onClick={handleLinkClick}
          >
            SOSF Headstart Agropreneurs
          </Link>
          <Link
            href="/our-work/interventions/bridge"
            className="block py-1 hover:text-secondary_blue text-base md:text-xs"
            onClick={handleLinkClick}
          >
            SOSF Bridge Program
          </Link>
          <Link
            href="/our-work/interventions/skill-up"
            className="block py-1 hover:text-secondary_blue text-base md:text-xs"
            onClick={handleLinkClick}
          >
            SOSF Online Skill-Up
          </Link>
          <Link
            href="/sosf-grants"
            className="block py-1 hover:text-secondary_blue text-base md:text-xs"
            onClick={handleLinkClick}
          >
            SOSF Grants
          </Link>
          <Link
            href="/sosf-funds"
            className="block py-1 hover:text-secondary_blue text-base md:text-xs"
            onClick={handleLinkClick}
          >
            SOSF Funds
          </Link>
        </div>
      </div>
    );
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 right-0 z-50 h-[90px] w-full ${
        scrolling ? "bg-[#F6F6F6] shadow-md" : "bg-[#F6F6F6] md:bg-transparent"
      } transform duration-700 ease-in-out flex flex-row justify-center items-center`}
    >
      {({ open }) => (
        <>
          <div className="flex flex-row items-center justify-between w-full mt-6 md:px-2">
            <div className="md:ml-[4rem] h-auto ml-4 flex flex-row gap-x-2 justify-center items-center">
              <Link href="/">
                <Image
                  src="/assets/images/logos/sos-logo.png"
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-[120px] h-[50px]"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden w-auto lg:flex ml-auto mr-[2rem] lg:flex-row space-x-8 justify-center p-2 items-center">
              {navigationLinks.map((link) => (
                <div key={link.name} className="relative">
                  {/* Our Work */}
                  {link.name === "Our Work" ? (
                    <div
                      onMouseEnter={() => {
                        setIsWorkHovered(true);
                        setIsAboutHovered(false); // close About modal
                      }}
                      className="relative cursor-pointer"
                    >
                      <span className="text-[#000000] font-bold hover-line">
                        {link.name}
                      </span>
                      <Transition
                        show={isWorkHovered}
                        enter="transition duration-300 ease-out"
                        enterFrom="opacity-0 translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition duration-200 ease-in"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-2"
                      >
                        <div
                          onMouseLeave={() => {
                            if (!isInterventionOpen) {
                              setIsWorkHovered(false);
                            }
                          }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-8 bg-[#F6F6F6] rounded-xl shadow-sm py-4 px-6 min-w-[200px]"
                        >
                          <div className="flex flex-col gap-3 text-[15px] font-inter">
                            <Link
                              href="/our-work/data"
                              className="font-normal hover:text-secondary_blue"
                              onClick={handleLinkClick}
                            >
                              Data
                            </Link>
                            <Link
                              href="/our-work/advocacy"
                              className="font-normal hover:text-secondary_blue"
                              onClick={handleLinkClick}
                            >
                              Advocacy
                            </Link>
                            <NestedInterventions />
                          </div>
                        </div>
                      </Transition>
                    </div>
                  ) : link.dropdown ? (
                    // About dropdown
                    <div
                      onMouseEnter={() => {
                        setIsAboutHovered(true);
                        setIsWorkHovered(false); // close Our Work modal
                      }}
                      className="relative"
                    >
                      <span className="text-[#000000] font-bold hover-line">
                        {link.name}
                      </span>
                      <Transition
                        show={isAboutHovered}
                        enter="transition duration-300 ease-out"
                        enterFrom="opacity-0 translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition duration-200 ease-in"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-2"
                      >
                        <div
                          onMouseLeave={() => setIsAboutHovered(false)}
                          className="fixed left-0 mt-[2rem] bg-[#F6F6F6] w-[100%] p-7 grid grid-cols-5 gap-4 shadow-lg"
                        >
                          {link.dropdown.map((column) => (
                            <div
                              key={column.title}
                              className="ml-[4rem] flex flex-col gap-y-1 justify-start items-start"
                            >
                              <h4 className="font-bold text-gray-800">
                                {column.title}
                              </h4>
                              <ul>
                                {column.links.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      onClick={handleLinkClick}
                                      href={item.to}
                                      className="text-sm text-gray-800 hover:text-secondary_blue font-inter hover-line"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </Transition>
                    </div>
                  ) : (
                    <Link
                      href={link.to}
                      className="text-[#000000] font-bold hover-line"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Hamburger Menu */}
            <div className="flex items-center lg:hidden">
              <FontAwesomeIcon
                icon={menuOpen ? faTimes : faBars}
                className="text-2xl p-3 cursor-pointer text-gray-800  mr-8 border-2 border-secondary_blue rounded-[50%]"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden bg-[#F6F6F6] p-4 w-full h-screen overflow-y-auto hide-scrollbar fixed top-[1.3rem] left-0 z-30 mt-16 transition-transform duration-300 ease-in-out`}
          >
            <div className="relative z-20 flex flex-col gap-y-4">
              {navigationLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="border border-none shadow-xl bg-[#F6F6F6] max-h-[400px] min-h-[70px] p-4"
                >
                  {/* If About or Our Work → use Accordion */}
                  {link.dropdown || link.name === "Our Work" ? (
                    <Accordion
                      expanded={expandedAccordion === index}
                      onChange={() => toggleAccordion(index)}
                      style={{
                        background: "#F6F6F6",
                        border: "2px #F6F6F6",
                        width: "100%",
                        marginRight: "auto",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <FontAwesomeIcon
                            icon={
                              expandedAccordion === index
                                ? faChevronUp
                                : faChevronDown
                            }
                            className="text-xl"
                          />
                        }
                      >
                        <span className="text-[#000000] font-bold relative right-[1rem] p-3">
                          {link.name}
                        </span>
                      </AccordionSummary>

                      <AccordionDetails>
                        {/* ABOUT US SECTION */}
                        {link.dropdown && (
                          <div className="flex flex-col overflow-y-auto gap-y-3">
                            {link.dropdown.map((column) => (
                              <Accordion
                                key={column.title}
                                style={{
                                  background: "#B7C8F4",
                                  border: "none",
                                }}
                              >
                                <AccordionSummary
                                  expandIcon={
                                    <FontAwesomeIcon
                                      icon={faChevronDown}
                                      className="flex flex-col text-xl gap-y-5"
                                    />
                                  }
                                >
                                  <h4 className="font-bold text-gray-800">
                                    {column.title}
                                  </h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <ul className="flex flex-col gap-y-2 overflow-y-auto min-h-[70px] pb-4 max-h-[300px]">
                                    {column.links.map((item) => (
                                      <li
                                        key={item.name}
                                        className="bg-[#F6F6F6] w-full shadow-xl p-3"
                                      >
                                        <Link
                                          onClick={handleLinkClick}
                                          href={item.to}
                                          className="text-sm text-gray-800 hover:text-secondary_blue font-inter hover-line"
                                        >
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionDetails>
                              </Accordion>
                            ))}
                          </div>
                        )}

                        {/* OUR WORK SECTION */}
                        {link.name === "Our Work" && (
                          <div className="flex flex-col overflow-y-auto gap-y-3">
                            <Accordion
                              style={{
                                background: "#F6F6F6",
                                border: "2px #F6F6F6",
                                width: "100%",
                                marginRight: "auto",
                              }}
                            >
                              <AccordionDetails>
                                <div className="flex flex-col gap-y-3">
                                  {/* Data */}
                                  <div
                                    style={{
                                      background: "#B7C8F4",
                                      border: "none",
                                    }}
                                    className="flex items-center justify-between p-3 rounded"
                                  >
                                    <Link
                                      href="/our-work/data"
                                      onClick={handleLinkClick}
                                      className="text-sm font-semibold text-gray-800 "
                                    >
                                      Data
                                    </Link>
                                  </div>

                                  {/* Advocacy */}
                                  <div
                                    style={{
                                      background: "#B7C8F4",
                                      border: "none",
                                    }}
                                    className="flex items-center justify-between p-3 rounded"
                                  >
                                    <Link
                                      href="/our-work/advocacy"
                                      onClick={handleLinkClick}
                                      className="text-sm font-semibold text-gray-800"
                                    >
                                      Advocacy
                                    </Link>
                                  </div>

                                  {/* Interventions (dropdown stays) */}
                                  <Accordion
                                    style={{
                                      background: "#B7C8F4",
                                      border: "none",
                                    }}
                                  >
                                    <AccordionSummary
                                      expandIcon={
                                        <FontAwesomeIcon
                                          icon={faChevronDown}
                                          className="text-md"
                                        />
                                      }
                                    >
                                      <h4 className="text-sm font-semibold text-gray-800">
                                        Interventions
                                      </h4>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <ul className="flex flex-col gap-y-2">
                                        <li>
                                          <Link
                                            href="/#"
                                            onClick={handleLinkClick}
                                            className="text-gray-800 bg-[#F6F6F6] w-full shadow-xl p-3 hover:text-secondary_blue flex text-sm"
                                          >
                                            SOSF Headstart Agropreneurs
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            href="/#"
                                            onClick={handleLinkClick}
                                            className="text-gray-800 bg-[#F6F6F6] w-full shadow-xl p-3 hover:text-secondary_blue flex text-sm"
                                          >
                                            SOSF Bridge Program
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            href="/#"
                                            onClick={handleLinkClick}
                                            className="text-gray-800 bg-[#F6F6F6] w-full shadow-xl p-3 hover:text-secondary_blue flex text-sm"
                                          >
                                            SOSF Online Skill-Up
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            href="/#"
                                            onClick={handleLinkClick}
                                            className="text-gray-800 bg-[#F6F6F6] w-full shadow-xl p-3 hover:text-secondary_blue flex text-sm"
                                          >
                                            SOSF Grants
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            href="/#-funds"
                                            onClick={handleLinkClick}
                                            className="text-gray-800 bg-[#F6F6F6] w-full shadow-xl p-3 hover:text-secondary_blue flex text-sm"
                                          >
                                            SOSF Funds
                                          </Link>
                                        </li>
                                      </ul>
                                    </AccordionDetails>
                                  </Accordion>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    <Link
                      href={link.to}
                      onClick={handleLinkClick}
                      className="text-[#000000] font-bold"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Nav2;
