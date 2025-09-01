import { useEffect } from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleCarry,
  faHandHoldingUsd,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CollaborateWithUs() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-cubic",
      mirror: true,
      anchorPlacement: "top-center",
      throttleDelay: 300,
      throttle: true,
    });
  }, []);

  const collabo = [
    {
      color: "#A3B2D9",
      icon: faHandsHelping,
      title:
        "to deploy interventions; collect & /manage data; advocate with us",
      link: "",
    },
    {
      color: "#7B86A3",
      icon: faHandHoldingUsd,
      title:
        "cash, in-kind products, & services & expertise, liquid & illiquid assets) ",
      link: "",
    },
  ];
  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-5  justify-start items-start  ">
      <section className="grid grid-cols-1 md:grid-cols-2 justify-start items-start px-2  md:px-[3rem] lg:px-0   gap-x-5 gap-y-4   ">
        {collabo.map((card, index) => (
          <div
            data-aos="fade-in"
            key={index}
            className=" relative group overflow-hidden  transform duration-700 ease-in-out   w-full  h-[180px] flex flex-col gap-y-5 justify-center items-start px-3 lg:px-[3rem] p-2  lg:w-[384px] md:h-[390px]"
            style={{
              backgroundColor: card.color,
            }}
          >
            <div
              className={` w-full  flex flex-col  gap-y-6 group-hover:z-30   h-[fixed]  ${
                index === 1 ? "mb-[3rem]" : ""
              }`}
            >
              {/* <h5 className="text-gray-800 font-thin  font-inter text-base ">
                {card.date}
              </h5> */}
              <FontAwesomeIcon
                icon={card.icon}
                className="text-4xl  group-hover:-rotate-45 transform duration-700 ease-in-out   md:text-4xl  lg:text-4xl  text-gray-800 mr-auto  "
              />
              <h3 className="text-gray-800 font-inter text-lg md:text-xl text-left col-span-1  ">
                {card.title}
              </h3>
              {/* <div className={` link-container  col-span-2  relative  overflow-hidden  `}>
              <Link
                href={card.link}
                className="text-lg font-bold font-inter  flex flex-row gap-x-4 justify-stat items-start text-gray-800  absolute top-0 left-0 right-0  "
              >
                Explore <span className="brochure-icon"> &rarr; </span>
              </Link>
              </div> */}
            </div>
            <div
              className={`hover-div  absolute top-0 left-0 right-0    
           w-full  lg:w-[384px] h-[390px]     
           
           

               ${
                 index === 1
                   ? "  rounded-bl-[100%]    rounded-br-none   g  "
                   : index === 0
                   ? "  "
                   : index === 2
                   ? "  "
                   : ""
               }`}
            ></div>
          </div>
        ))}
      </section>
    </div>
  );
}
