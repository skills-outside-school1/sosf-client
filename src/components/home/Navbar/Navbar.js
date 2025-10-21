"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { navData } from "./navData"; // imported data

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showIntervention, setShowIntervention] = useState(false);
  const workRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-in-cubic" });

    const handleScroll = () => setScrolling(window.scrollY > 50);
    const handleClickOutside = (event) => {
      if (workRef.current && !workRef.current.contains(event.target)) {
        setShowWork(false);
        setShowIntervention(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-[100px] w-full ${
        scrolling ? "bg-[#F6F6F6] shadow-md" : "bg-[#F6F6F6] md:bg-transparent"
      } transform duration-700 ease-in-out flex flex-row justify-center items-center`}
    >
      <div className="flex flex-row items-center justify-between w-full px-3 md:px-10 relative">
        {/* ✅ Logo */}
        <Link href="/">
          <Image
            src="/assets/images/logos/sos-logo.png"
            width={120}
            height={120}
            alt="Logo"
          />
        </Link>

        {/* ✅ Navigation Links */}
        <ul className="flex gap-6 items-center font-sans text-[15px] font-bold relative">
          {navData.map((item, index) => {
            if (item.type === "dropdown") {
              const isAbout = item.title === "About";
              const isWork = item.title === "Our Work";

              return (
                <li
                  key={index}
                  className="relative cursor-pointer"
                  onMouseEnter={() => {
                    if (isAbout) {
                      setShowAbout(true);
                      setShowWork(false);
                    } else {
                      setShowWork(true);
                      setShowAbout(false);
                    }
                  }}
                  ref={isWork ? workRef : null}
                >
                  {item.title}

                  {/* ABOUT DROPDOWN */}
                  {isAbout && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-16 bg-[#F6F6F6] rounded-2xl shadow-sm py-8 px-16 transition-all duration-500 ease-in-out transform min-w-[400px] lg:w-[800px] ${
                        showAbout
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
                      }`}
                      onMouseLeave={() => setShowAbout(false)}
                    >
                      <div className="flex justify-center gap-16">
                        {item.sections.map((section, sIndex) => (
                          <div
                            key={sIndex}
                            className="flex flex-col gap-5 text-[16px] font-inter"
                          >
                            <p className="font-semibold mb-3">
                              {section.heading}
                            </p>
                            {section.links.map((link, lIndex) => (
                              <Link
                                key={lIndex}
                                href={link.href}
                                className="font-light hover:text-gray-400 duration-300 hover:scale-105"
                                onClick={() => setShowAbout(false)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* OUR WORK DROPDOWN */}
                  {isWork && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-16 bg-[#F6F6F6] rounded-2xl shadow-sm py-6 px-4 transition-all duration-500 ease-in-out transform min-w-[150px] lg:w-[200px] ${
                        showWork
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
                      }`}
                    >
                      <div className="flex flex-col gap-4 text-[16px] font-inter">
                        {item.links.map((link, lIndex) =>
                          link.nested ? (
                            <React.Fragment key={lIndex}>
                              <button
                                type="button"
                                className="font-normal w-full flex justify-between items-center hover:text-gray-400 duration-300 hover:scale-105"
                                onClick={() =>
                                  setShowIntervention((prev) => !prev)
                                }
                              >
                                {link.name}
                                <FaChevronRight
                                  className={`${
                                    showIntervention ? "rotate-90" : ""
                                  } transition-transform`}
                                />
                              </button>

                              {/* ✅ Nested Modal */}
                              <div
                                className={`absolute top-0 left-full ml-2 bg-[#F6F6F6] rounded-xl shadow-sm py-4 px-6 transition-all duration-500 ease-in-out transform min-w-[300px] ${
                                  showIntervention
                                    ? "opacity-100 translate-x-0 scale-100"
                                    : "opacity-0 translate-x-3 scale-95 pointer-events-none"
                                }`}
                              >
                                <div className="flex flex-col gap-4 text-[15px] font-inter">
                                  {link.nested.map((nestedLink, nIndex) => (
                                    <Link
                                      key={nIndex}
                                      href={nestedLink.href}
                                      className="font-light hover:text-gray-400 duration-300 hover:scale-105"
                                      onClick={() => setShowWork(false)}
                                    >
                                      {nestedLink.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </React.Fragment>
                          ) : (
                            <Link
                              key={lIndex}
                              href={link.href}
                              className="font-normal hover:text-gray-400 duration-300 hover:scale-105"
                              onClick={() => setShowWork(false)}
                            >
                              {link.name}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            }

            // ✅ Normal links
            return (
              <Link key={index} href={item.href} className="cursor-pointer">
                {item.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
