import { useState, useEffect } from "react";
import Link from "next/link";
import Case from "../../shared/headings/Case";
import { P } from "@/components/shared/Atoms/Typography/typography";

function Scams() {
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

  const firstcard = [
    {
      supertitle: <article> </article>,
      title: "Reporting Scams",
      description: (
        <article>
          {" "}
          Read more information about how to report correspondence claiming to
          be from, or associated with, the Skills Outside School Foundation.
        </article>
      ),
    },
  ];

  const secondcard = [
    {
      supertitle: <article> </article>,
      title: "Reporting Ethics",
      description: (
        <article>
          {" "}
          nvestors and partners such as grantees, vendors, or other third
          parties, may review the Ethics Reporting guidelines, to confidentially
          report issues that raise ethical concerns.
        </article>
      ),
    },
  ];
  return (
    <div className=" flex flex-col gap-y-5 justify-center items-start  w-full h-[fixed]  lg:h-[fixed]    px-2 lg:px-[7rem]  md:px-[4rem] ">
      <Case text="Reporting" className={`   sm:ml-2 mb-9 `} />
      <section
        className={`grid grid-cols-1   justify-center items-center gap-x-[40px] gap-y-5  h-[fixed]  relative bottom-[4rem]  md:grid-cols-3 p-3 w-full ${
          scrollDirection === "down"
            ? "translate-y-[-30px]"
            : "translate-y-[20px]"
        } transform  duration-500 ease-in-out`}
      >
        <div className="div-1  w-full h-[fixed]  flex flex-col gap-y-[30px] mb-auto ">
          {firstcard.map((card1, index) => (
            <div
              key={index}
              className=" w-full h-[fixed] flex flex-col gap-y-3 justify-start items-start  "
            >
              <h5 className="text-[#000000]  font-inter text-base text-left font-normal  md:text-xl border-b border-b-gray-300 ">
                {card1.supertitle}
              </h5>
              <h3 className="text-[#000000]  font-lato text-xl text-left  font-bold   md:text-2xl border-b border-b-gray-300 ">
                {card1.title}
              </h3>
              <P>{card1.description}</P>
              <Link
                href={`mailto: ${card1.address}`}
                className="text-blue font-bold text-base  font-inter"
              >
                {card1.email}
              </Link>
            </div>
          ))}
        </div>
        <div className="div-2  cursor-pointer  w-full h-[fixed] overflow-y-auto   flex flex-col gap-y-8  hide-scrollbar ">
          {secondcard.map((card2, index) => (
            <div
              key={index}
              className=" w-full h-[fixed] flex flex-col gap-y-3 justify-start items-start  "
            >
              <h5 className="text-[#000000] font-inter text-base text-left   md:text-xl border-b border-b-gray-300 ">
                {card2.supertitle}
              </h5>
              <h3 className="text-[#000000]  font-lato  text-xl text-left  font-bold   md:text-2xl border-b border-b-gray-300 ">
                {card2.title}
              </h3>
              <P>{card2.description}</P>
              <Link
                href={`mailto: ${card2.address}`}
                className="text-blue font-bold text-base inter "
              >
                {card2.email}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Scams;
