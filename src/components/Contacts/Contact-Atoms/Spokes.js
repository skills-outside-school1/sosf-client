import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Case from "../../shared/headings/Case";
import Tabs from "@/components/shared/Atoms/Tab-Atoms/Tab";

function Spokes() {
  const tabsData = [""];
  const worksData = {
    Software: [
      {
        image: "/assets/images/teams/halimaabba (2).png",
        title: "Chair & Founder ",
        name: "Halima Ibrahim Abba",
        route: "#",
      },
      {
        image: "/assets/images/teams/salamatu (2).png",
        title: "Secretary, Nigeria Board ",
        name: "Salamatu Sule",
        route: "#",
      },
    ],
  };

  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        // User is scrolling up
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-2 lg:px-[5.7rem]">
      <Case
        text="Spokespeople"
        className="t ml-[2rem] lg:ml-6 md:ml-[2.9rem] mb-9"
      />
      <section
        className={`scrollable-con w-full relative bottom-[5rem] md:ml-9 ${
          scrollDirection === "down"
            ? "translate-y-[-12px]"
            : "translate-y-[20px]"
        } transform  duration-500 ease-in-out`}
      >
        <Tabs
          tabs={tabsData}
          works={worksData}
          className=" w-[300px] bg-secondary_blue  h-[500px]  md:h-[500px] "
          className3={`hidden`}
        />
      </section>
    </div>
  );
}

export default Spokes;
