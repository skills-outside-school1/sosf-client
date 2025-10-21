"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const workRef = useRef(null); // For outside click detection

  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-in-cubic" });

    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
      setLastScrollY(window.scrollY);
    };

    const handleClickOutside = (event) => {
      if (workRef.current && !workRef.current.contains(event.target)) {
        setShowWork(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-[100px] w-full ${
        scrolling ? "bg-[#F6F6F6] shadow-md" : "bg-[#F6F6F6] md:bg-transparent"
      } transform duration-700 ease-in-out flex flex-row justify-center items-center`}
    >
      <div className="flex flex-row items-center justify-between w-full px-3 md:px-10 relative">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/images/logos/sos-logo.png"
            width={120}
            height={120}
            alt="Logo"
          />
        </Link>

        {/* Nav Links */}
        <ul className="flex gap-6 items-center font-sans font-bold relative">
          {/* About Link + Modal */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setShowAbout(true)}
          >
            About
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-16 bg-[#F6F6F6] rounded-2xl shadow-sm py-8 px-16 transition-all duration-500 ease-in-out transform min-w-[400px] lg:w-[800px] ${
                showAbout
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
              }`}
              onMouseLeave={() => setShowAbout(false)}
            >
              <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-5 text-[16px] font-inter">
                  <p className="font-semibold mb-3">About Us</p>
                  <Link
                    href="/who-we-are"
                    className="font-light"
                    onClick={() => setShowAbout(false)}
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/our-history"
                    className="font-light"
                    onClick={() => setShowAbout(false)}
                  >
                    Our History
                  </Link>
                  <Link
                    href="/our-pillars"
                    className="font-light"
                    onClick={() => setShowAbout(false)}
                  >
                    Our Pillars
                  </Link>
                  <Link
                    href="/core-values"
                    className="font-light"
                    onClick={() => setShowAbout(false)}
                  >
                    Our Core Values
                  </Link>
                  <Link
                    href="/our-usp"
                    className="font-light"
                    onClick={() => setShowAbout(false)}
                  >
                    Our USPs
                  </Link>
                  <Link
                    href="/our-focus-areas"
                    className="font-light"
                    onClick={() => setShowAbout(false)}
                  >
                    Our Focus Areas
                  </Link>
                  <Link
                    href="/our-target-audience"
                    className="font-light"
                    onClick={() => setShowAbout(false)}
                  >
                    Our Target Audience
                  </Link>
                </div>

                <div className="flex flex-col gap-5 text-[16px] font-inter">
                  <p className="font-semibold mb-3">Global Goals</p>
                  <Link
                    href="/sdgs"
                    className="font-light"
                    onClick={() => setShowAbout(false)}
                  >
                    SDGs We Align With
                  </Link>
                </div>

                <div className="flex flex-col gap-5 text-[16px] font-inter">
                  <p className="font-semibold mb-3">Collaborations</p>
                  <Link
                    href="/collaborations"
                    className="font-light"
                    onClick={() => setShowAbout(false)}
                  >
                    Our Partners & Investors
                  </Link>
                </div>
              </div>
            </div>
          </li>

          {/* Our Work Link + Modal */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setShowWork(true)}
            ref={workRef}
          >
            Our Work
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-16 bg-[#F6F6F6] rounded-2xl shadow-sm py-6 px-4 transition-all duration-500 ease-in-out transform min-w-[150px] lg:w-[200px] ${
                showWork
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
              }`}
            >
              <div className="flex gap-8">
                <div className="flex flex-col gap-4 text-[16px] font-inter">
                  <Link
                    href="/projects"
                    className="font-normal"
                    onClick={() => setShowWork(false)}
                  >
                    Data
                  </Link>
                  <Link
                    href="/initiatives"
                    className="font-normal"
                    onClick={() => setShowWork(false)}
                  >
                    Advocacy
                  </Link>
                  <Link
                    href="/programs"
                    className="font-normal"
                    onClick={() => setShowWork(false)}
                  >
                    Interventions
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <Link href="/news-insights" className="cursor-pointer transition">
            Insights
          </Link>
          <Link href="/get-involved" className="cursor-pointer transition">
            Get Involved
          </Link>
          <Link href="/careers" className="cursor-pointer transition">
            Careers
          </Link>
          <Link href="/contact" className="cursor-pointer transition">
            Contacts
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
