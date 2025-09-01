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

const Nav2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

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
            // { name: "Our Strategic Model", to: "/our-strategic-model" },
            { name: "Our Focus Area", to: "/our-focus-areas" },
            { name: "Our Target Audience", to: "/our-target-audience" },
          ],
        },
        // {
        //   title: "Our Leadership",
        //   links: [
        //     { name: "Leaderships", to: "/leadership" },
        //     { name: "Ambassadors", to: "/ambassadors" },
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Reset the accordion state when the menu is closed
  useEffect(() => {
    if (!menuOpen) {
      setExpandedAccordion(null); // Close all accordions when menu is closed
    }
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const router = useRouter();

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setIsAboutHovered(false);
    // Close menu when a link is clicked
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 right-0 z-50 h-[90px] w-full ${
        scrolling ? "bg-[#F6F6F6] shadow-md" : "bg-[#F6F6F6]  md:bg-transparent"
      } transform duration-700 ease-in-out flex flex-row justify-center items-center`}
    >
      {({ open }) => (
        <>
          <div className="flex flex-row items-center mt-6 justify-between w-full md:px-2">
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
                <div key={link.name}>
                  {link.dropdown ? (
                    <Disclosure
                      as="div"
                      className="relative w-full"
                      open={isAboutHovered}
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            onMouseEnter={() => setIsAboutHovered(true)}
                            onClick={() => setIsAboutHovered(false)}
                            className="text-[#000000] font-bold hover-line"
                          >
                            {link.name}
                          </Disclosure.Button>

                          <Transition
                            show={isAboutHovered}
                            enter="transition-transform duration-500 ease-out"
                            enterFrom="transform opacity-0 translate-y-1 duration-700"
                            enterTo="transform opacity-100 -translate-y-100"
                            leave="transition-transform duration-300 ease-in"
                            leaveFrom="transform opacity-100 translate-y-100"
                            leaveTo="transform opacity-0 -translate-y-95"
                          >
                            <Disclosure.Panel className="fixed left-0 mt-[2rem] bg-[#F6F6F6] w-[100%] p-7 grid grid-cols-4 gap-4 shadow-lg">
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
                                          // Close menu on link click
                                          href={item.to}
                                          className="text-gray-800 hover:text-secondary_blue font-inter text-sm hover-line"
                                        >
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
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

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden flex items-center">
              <FontAwesomeIcon
                icon={menuOpen ? faTimes : faBars}
                className="text-2xl p-3 cursor-pointer text-gray-800  mr-8 border-2 border-secondary_blue rounded-[50%] "
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden bg-[#F6F6F6] p-4 w-full h-[1000px] overflow-y-auto hide-scrollbar  fixed top-[1.3rem] left-0 z-30 mt-16 transition-transform duration-300 ease-in-out`}
          >
            <div className="flex flex-col gap-y-4">
              {navigationLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="border border-none shadow-xl  bg-[#F6F6F6]   max-h-[400px]  min-h-[70px] p-4"
                >
                  {link.dropdown ? (
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
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                      >
                        <span className="text-[#000000] font-bold relative right-[1rem] p-3  ">
                          {link.name}
                        </span>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="flex flex-col gap-y-3  overflow-y-auto">
                          {link.dropdown.map((column) => (
                            <Accordion
                              key={column.title}
                              style={{
                                background: "#B7C8F4",
                                border: "none",
                                overflowY: "auto",
                              }}
                            >
                              <AccordionSummary
                                expandIcon={
                                  <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="text-xl flex flex-col gap-y-5  "
                                  />
                                }
                              >
                                <h4 className="font-bold text-gray-800  ">
                                  {column.title}
                                </h4>
                              </AccordionSummary>
                              <AccordionDetails>
                                <ul className="flex flex-col gap-y-2  overflow-y-auto min-h-[70px]  pb-4  max-h-[300px]">
                                  {column.links.map((item) => (
                                    <li
                                      key={item.name}
                                      className="bg-[#F6F6F6] w-full  shadow-xl p-3"
                                    >
                                      <Link
                                        onClick={handleLinkClick} // Close menu on link click
                                        href={item.to}
                                        className="text-gray-800 hover:text-secondary_blue font-inter text-sm hover-line  "
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
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    <Link
                      href={link.to}
                      onClick={handleLinkClick} // Close menu on link click
                      className="text-[#000000] font-bold "
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
