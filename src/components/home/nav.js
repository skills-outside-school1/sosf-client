"use client";
import React, { useState, useEffect, useRef } from "react";
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

  const interventionTimeoutRef = useRef(null);

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
        // {
        //   title: "People & Purpose",
        //   links: [
        //     { name: "Leaderships", to: "/leadership" },
        //     // { name: "Ambassadors", to: "/ambassadors" },
        //   ],
        // },
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
    { name: "Our Work", to: "#" },
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (interventionTimeoutRef.current) {
        clearTimeout(interventionTimeoutRef.current);
      }
    };
  }, []);

  const router = useRouter();

  const toggleAccordion = (index) =>
    setExpandedAccordion(expandedAccordion === index ? null : index);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setIsAboutHovered(false);
    setIsWorkHovered(false);
    setIsInterventionOpen(false);
  };

  const handleInterventionMouseEnter = () => {
    // Clear any existing timeout
    if (interventionTimeoutRef.current) {
      clearTimeout(interventionTimeoutRef.current);
    }
    setIsInterventionOpen(true);
  };

  const handleInterventionMouseLeave = () => {
    // Add a small delay before closing
    interventionTimeoutRef.current = setTimeout(() => {
      setIsInterventionOpen(false);
    }, 150); // 150ms delay - enough time to move mouse to submenu
  };

  const NestedInterventions = () => {
    return (
      <div
        className="relative"
        onMouseEnter={handleInterventionMouseEnter}
        onMouseLeave={handleInterventionMouseLeave}
      >
        <button className="flex items-center justify-between w-full font-normal hover:text-secondary_blue">
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
          className={`absolute top-0 left-full ml-2 bg-[#F6F6F6] rounded-xl shadow-md py-3 px-5 min-w-max transition-all duration-300 ease-in-out transform z-50 ${
            isInterventionOpen
              ? "opacity-100 translate-x-5 pointer-events-auto"
              : "opacity-0 translate-x-0 pointer-events-none"
          }`}
        >
          <Link
            href="/interventions/sosf-agropreneurs"
            className="block py-1 text-base hover:text-secondary_blue md:text-xs"
            onClick={handleLinkClick}
          >
            SOSF Headstart Agropreneurs
          </Link>
          <Link
            href="/interventions/sosf-bridge"
            className="block py-1 text-base hover:text-secondary_blue md:text-xs"
            onClick={handleLinkClick}
          >
            SOSF Bridge Program
          </Link>
          <Link
            href="/interventions/skill-up"
            className="block py-1 text-base hover:text-secondary_blue md:text-xs"
            onClick={handleLinkClick}
          >
            SOSF Online Skill-Up
          </Link>
          <Link
            href="/sosf-grants"
            className="block py-1 text-base hover:text-secondary_blue md:text-xs"
            onClick={handleLinkClick}
          >
            SOSF Grants
          </Link>
          <Link
            href="/sosf-funds"
            className="block py-1 text-base hover:text-secondary_blue md:text-xs"
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
            <div className="hidden w-auto lg:flex ml-auto mr-[2rem] lg:flex-row space-x-8 justify-center p-2 pr-9 items-center">
              {navigationLinks.map((link) => (
                <div key={link.name} className="relative">
                  {/* Our Work */}
                  {link.name === "Our Work" ? (
                    <div
                      onMouseEnter={() => {
                        setIsWorkHovered(true);
                        setIsAboutHovered(false);
                      }}
                      onMouseLeave={() => setIsWorkHovered(false)}
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
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-8 bg-[#F6F6F6] rounded-xl shadow-sm py-4 px-6 min-w-[200px]">
                          <div className="flex flex-col gap-3 text-[15px] font-inter">
                            <Link
                              href="/data"
                              className="font-normal hover:text-secondary_blue"
                              onClick={handleLinkClick}
                            >
                              Data
                            </Link>
                            <Link
                              href="/advocacy"
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
                        setIsWorkHovered(false);
                      }}
                      onMouseLeave={() => setIsAboutHovered(false)}
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
                        <div className="fixed left-0 mt-[2rem] bg-[#F6F6F6] w-[100%] p-7 grid grid-cols-4 gap-4 shadow-lg">
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
            <div
              className="flex items-center justify-center w-12 h-12 mb-2 mr-8 border-2 rounded-full cursor-pointer border-secondary_blue lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon
                icon={menuOpen ? faTimes : faBars}
                className="text-2xl text-gray-800"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden bg-[#F6F6F6] p-4 w-full h-screen overflow-y-auto hide-scrollbar fixed top-[1.3rem] left-0 z-30 mt-16 transition-transform duration-300 ease-in-out`}
          >
            <div className="fixed top-0 left-0 z-30 w-full h-screen px-5 pt-24 pb-8 overflow-y-auto lg:hidden bg-gradient-to-b from-white to-gray-50">
              <div className="relative z-20 flex flex-col max-w-md mx-auto gap-y-3">
                {navigationLinks.map((link, index) => (
                  <div
                    key={link.name}
                    className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-2xl hover:shadow-lg"
                  >
                    {link.dropdown || link.name === "Our Work" ? (
                      <Accordion
                        expanded={expandedAccordion === index}
                        onChange={() => toggleAccordion(index)}
                        sx={{
                          background: "white",
                          boxShadow: "none",
                          "&:before": { display: "none" },
                          borderRadius: "16px",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary_blue/10">
                              <FontAwesomeIcon
                                icon={
                                  expandedAccordion === index
                                    ? faChevronUp
                                    : faChevronDown
                                }
                                className="text-sm text-secondary_blue"
                              />
                            </div>
                          }
                          sx={{ padding: "16px 20px" }}
                        >
                          <span className="text-base font-bold text-gray-900">
                            {link.name}
                          </span>
                        </AccordionSummary>

                        <AccordionDetails sx={{ padding: "0 20px 20px 20px" }}>
                          {link.dropdown && (
                            <div className="flex flex-col gap-y-2">
                              {link.dropdown.map((column) => (
                                <Accordion
                                  key={column.title}
                                  sx={{
                                    background:
                                      "linear-gradient(135deg, #B7C8F4 0%, #A8BBEF 100%)",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    "&:before": { display: "none" },
                                    marginBottom: "8px",
                                  }}
                                >
                                  <AccordionSummary
                                    expandIcon={
                                      <div className="flex items-center justify-center rounded-full w-7 h-7 bg-white/30">
                                        <FontAwesomeIcon
                                          icon={faChevronDown}
                                          className="text-xs text-gray-800"
                                        />
                                      </div>
                                    }
                                    sx={{ padding: "12px 16px" }}
                                  >
                                    <h4 className="text-sm font-bold text-gray-900">
                                      {column.title}
                                    </h4>
                                  </AccordionSummary>
                                  <AccordionDetails
                                    sx={{ padding: "0 16px 12px 16px" }}
                                  >
                                    <ul className="flex flex-col gap-y-2">
                                      {column.links.map((item) => (
                                        <li
                                          key={item.name}
                                          className="transition-all duration-200 bg-white rounded-lg shadow-sm hover:shadow-md"
                                        >
                                          <Link
                                            onClick={handleLinkClick}
                                            href={item.to}
                                            className="block px-4 py-3 text-sm text-gray-800 transition-colors duration-200 hover:text-secondary_blue font-inter"
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

                          {link.name === "Our Work" && (
                            <div className="flex flex-col gap-y-2">
                              <Link
                                href="/data"
                                onClick={handleLinkClick}
                                className="p-4 font-semibold text-gray-800 transition-all duration-200 shadow-sm bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl hover:from-blue-200 hover:to-blue-100"
                              >
                                Data
                              </Link>

                              <Link
                                href="/advocacy"
                                onClick={handleLinkClick}
                                className="p-4 font-semibold text-gray-800 transition-all duration-200 shadow-sm bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl hover:from-blue-200 hover:to-blue-100"
                              >
                                Advocacy
                              </Link>

                              <Accordion
                                sx={{
                                  background:
                                    "linear-gradient(135deg, #B7C8F4 0%, #A8BBEF 100%)",
                                  borderRadius: "12px",
                                  overflow: "hidden",
                                  "&:before": { display: "none" },
                                }}
                              >
                                <AccordionSummary
                                  expandIcon={
                                    <div className="flex items-center justify-center rounded-full w-7 h-7 bg-white/30">
                                      <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className="text-xs text-gray-800"
                                      />
                                    </div>
                                  }
                                  sx={{ padding: "12px 16px" }}
                                >
                                  <h4 className="text-sm font-bold text-gray-900">
                                    Interventions
                                  </h4>
                                </AccordionSummary>
                                <AccordionDetails
                                  sx={{ padding: "0 16px 12px 16px" }}
                                >
                                  <ul className="flex flex-col gap-y-2">
                                    <li>
                                      <Link
                                        href="/interventions/sosf-agropreneurs"
                                        onClick={handleLinkClick}
                                        className="block px-4 py-3 text-sm text-gray-800 transition-all duration-200 bg-white rounded-lg shadow-sm hover:shadow-md hover:text-secondary_blue"
                                      >
                                        SOSF Headstart Agropreneurs
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/interventions/sosf-bridge"
                                        onClick={handleLinkClick}
                                        className="block px-4 py-3 text-sm text-gray-800 transition-all duration-200 bg-white rounded-lg shadow-sm hover:shadow-md hover:text-secondary_blue"
                                      >
                                        SOSF Bridge Program
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/interventions/skill-up"
                                        onClick={handleLinkClick}
                                        className="block px-4 py-3 text-sm text-gray-800 transition-all duration-200 bg-white rounded-lg shadow-sm hover:shadow-md hover:text-secondary_blue"
                                      >
                                        SOSF Online Skill-Up
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/#"
                                        onClick={handleLinkClick}
                                        className="block px-4 py-3 text-sm text-gray-800 transition-all duration-200 bg-white rounded-lg shadow-sm hover:shadow-md hover:text-secondary_blue"
                                      >
                                        SOSF Grants
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/sosf-funds"
                                        onClick={handleLinkClick}
                                        className="block px-4 py-3 text-sm text-gray-800 transition-all duration-200 bg-white rounded-lg shadow-sm hover:shadow-md hover:text-secondary_blue"
                                      >
                                        SOSF Funds
                                      </Link>
                                    </li>
                                  </ul>
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
                        className="block px-5 py-5 font-bold text-gray-900 transition-colors duration-200 hover:text-secondary_blue"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Nav2;

