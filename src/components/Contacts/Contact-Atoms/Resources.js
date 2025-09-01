import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Case from "../../shared/headings/Case";

function Resources() {
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

  const files = [
    {
      name: "SOSF Banner Logo.png",
      size: "23.9kb",
      link: "/assets/images/logos/resources/SOSF Banner Logo.png",
    },
    {
      name: "SOSF Logo - No background.png",
      size: "275.4kb",
      link: "/assets/images/logos/resources/SOSF Logo - No background.png",
    },
    {
      name: "SOSF Logo Transparent Clear.png",
      size: "600.7kb",
      link: "/assets/images/logos/resources/SOSF Logo Transparent Clear.png",
    },
    {
      name: "SOSF Logo with pillars + website.png",
      size: "98.1kb",
      link: "/assets/images/logos/resources/SOSF Logo with pillars + website.png",
    },
    {
      name: "SOSF Logo with pillars.png",
      size: "47.3kb",
      link: "/assets/images/logos/resources/SOSF Logo with pillars.png",
    },
    {
      name: "SOSF Transparent Logo Contrast.png",
      size: "247.9kb",
      link: "/assets/images/logos/resources/SOSF Transparent Logo Contrast.png",
    },

    {
      name: "Watermark SOSF Logo.png",
      size: "17.1kb",
      link: "/assets/images/logos/resources/Watermark SOSF Logo.png",
    },
  ];

  return (
    <div className="w-full h-[fixed]  flex flex-col justify-center items-center px-2  ">
      <Case
        text="Resources"
        className=" ml-2 lg:ml-[7rem] md:ml-[4rem] mb-9 "
      />
      <div
        className={`container-for-resources flex flex-col gap-y-4 justify-start items-start p-2  -translate-y-5 w-full px-2 lg:px-[8.8rem] md:px-[4rem]  h-[fixed]  ${
          scrollDirection === "down"
            ? "translate-y-[-50px]"
            : "translate-y-[20px]"
        } transform  duration-500 ease-in-out`}
      >
        <h1 className="text-xl font-semibold text-pink  text-left w-full  font-schoolbook ">
          Brand assets
        </h1>
        {files.map((file, index) => (
          <div
            key={index}
            className={`flex items-center gap-y-6  w-full p-2    border-t  border-t-gray-400  ${
              index === 6 ? "border-b border-b-gray-300" : ""
            }`}
          >
            <a
              href={file.link}
              download
              className="flex flex-row w-full gap-x-3"
            >
              <FontAwesomeIcon
                icon={faDownload}
                className="text-pink md:text-base  text-sm "
              />
              <span className="  text-base  md:text-xl text-[#000000]  font-lato font-bold mx-auto text-left flex-1 ml-5 ">
                {file.name}
              </span>

              <span className=" text-[0.6rem]  md:text-base   text-[#000000]  flex   font-inter font-normal   ">
                {file.size}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
