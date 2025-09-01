import { useEffect } from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleCarry,
  faHandHoldingUsd,
  faHandsHelping,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { P } from "@/components/shared/Atoms/Typography/typography";

export default function MissionVision() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out-linear",
      mirror: true,
      anchorPlacement: "top-center",
      throttleDelay: 500,
      throttle: true,
    });
  }, []);

  const carditems = [
    {
      heading2: "Mission & Vision",
      // heading2: <span className="text-cyan">  Mission <span className="text-blue"> & </span>  <span className="text-yellow"> Vision </span> </span>
    },
  ];

  const collabo = [
    {
      color: "#B7C8F4",
      opacity: 20,
      icon: faPeopleCarry,
      title: "Mission",
      content:
        " Deploying data-driven interventions and advocacy in education, employability & entrepreneurship to achieve transformational sustainable socio-economic development globally.",
      // link: "",
    },

    {
      color: "#6A80B8",
      opacity: 20,
      icon: faEye,
      title: "Vision",
      content:
        "A world where human capital drives sustainable socio-economic growth. ",
      // link: "",
    },
  ];
  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-5  justify-start items-start  ">
      <SubHero items={carditems} aos="" />
      <section className="grid grid-cols-1  md:flex md:flex-row gap-x-3 gap-y-3 justify-start items-start px-4 w-full  md:px-[4rem]  lg:px-[7rem] ">
        {collabo.map((card, index) => (
          <div
            key={index}
            className="
             relative group overflow-hidden    transform duration-700 ease-in-out   w-full  flex flex-col gap-y-5 justify-start items-start px-3 md:px-[3rem] p-2  md:h-[600px]  py-auto  lg:w-[389px] h-[270px] "
            style={{
              backgroundColor: card.color,
              opacity: card.opacity,
            }}
          >
            <div
              className={` w-full h-[fixed] flex flex-col  gap-y-8 justify-start items-start `}
            >
              <div className="icon-title-container  flex flex-col gap-y-4 mb-auto ">
                <FontAwesomeIcon
                  icon={card.icon}
                  className="text-4xl  group-hover:-rotate-45 transform duration-700 ease-in-out   md:text-4xl  lg:text-4xl   text-[#000000]  mr-auto  "
                />
                <h4 className="text-[#000000] font-bold font-mont text-lg  md:text-xl lg:text-3xl">
                  {card.title}
                </h4>
              </div>
            </div>
            <P> {card.content}</P>
          </div>
        ))}
      </section>
    </div>
  );
}
