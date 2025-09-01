import { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { P, H3 } from "../Typography/typography";

function SDGs({ cards = [], aos }) {
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
  return (
    <div className="w-full lg:ml-[8rem]  p-2  md:ml-[1rem] h-[fixed]  lg:w-[1000px] px-4  lg:px-[0.2rem] flex flex-col  md:grid md:grid-cols-2    lg:grid lg:grid-cols-3 justify-center items-start  relative md:right-[0rem]   gap-y-[40px]  lg:gap-x-[2px]">
      {cards.map((card, index) => (
        <div
          data-aos={`${aos}`}
          key={index}
          className={`group relative overflow-hidden w-full h-[350px]   md:w-[400px]   lg:w-[300px]  md:h-[350px] lg:h-[256px] flex flex-col  justify-center items-start   gap-y-3 px-[2rem] cursor-pointer   ${
            index === 0
              ? "bg-[#E5243B]" // SDG 1: No Poverty (Dark Red)
              : index === 1
              ? "bg-[#DDA63A]" // SDG 2: Zero Hunger (Orange)
              : index === 2
              ? "bg-[#C5192D]" // SDG 4: Quality Education (Red)
              : index === 3
              ? "bg-[#FF3A21]" // SDG 5: Gender Equality (Dark Pink)
              : index === 4
              ? "bg-[#A21942]" // SDG 8: Decent Work and Economic Growth (Dark Purple)
              : index === 5
              ? "bg-[#DD1367]" // SDG 10: Reduced Inequalities (Pink)
              : index === 6
              ? "bg-[#BF8B2E]" // SDG 12: Responsible Consumption and Production (Brown)
              : index === 7
              ? "bg-[#19486A]" // SDG 17: Partnerships for the Goals (Blue)
              : ""
          }`}
        >
          <section className="number-title-container flex flex-row gap-x-4 justify-center items-start ">
            <span className="font-schoolbook  text-white     col-span-1 text-8xl  md:text-8xl  lg:text-7xl ">
              {card.number}
            </span>
            <H3 className="text-white"> {card.title}</H3>
          </section>

          <section className="image-icon-container flex justify-center items-center mx-auto w-auto h-auto ">
            <Image
              src={card.image}
              alt={card.title}
              width={100}
              height={100}
              className=""
            />
          </section>

          {/* Hover Content */}
          <div
            className={`absolute left-0 right-0 top-0 opacity-0 transform  duration-700 ease-in-out    w-[350px] h-[300px]   md:h-[350px] md:w-[350px] lg:w-[286px] mx-auto lg:h-[260px]
              group-hover:opacity-100  bg-opacity-60   group-hover:transform group-hover:duration-700 group-hover:ease-in-out
                ${
                  index === 0
                    ? "group-hover:bg-[#E5243B]" // SDG 1: No Poverty (Dark Red)
                    : index === 1
                    ? "group-hover:bg-[#DDA63A]" // SDG 2: Zero Hunger (Orange)
                    : index === 2
                    ? "group-hover:bg-[#C5192D]" // SDG 4: Quality Education (Red)
                    : index === 3
                    ? "group-hover:bg-[#FF3A21]" // SDG 5: Gender Equality (Dark Pink)
                    : index === 4
                    ? "group-hover:bg-[#A21942]" // SDG 8: Decent Work and Economic Growth (Dark Purple)
                    : index === 5
                    ? "group-hover:bg-[#DD1367]" // SDG 10: Reduced Inequalities (Pink)
                    : index === 6
                    ? "group-hover:bg-[#BF8B2E]" // SDG 12: Responsible Consumption and Production (Brown)
                    : index === 7
                    ? "group-hover:bg-[#19486A]" // SDG 17: Partnerships for the Goals (Blue)
                    : ""
                }`}
          >
            <section className="flex flex-col gap-y-4 justify-center items-start mt-4  p-4">
              <h4 className="title-heading text-white font-schoolbook font-bold text-xl md:text-xl lg:text-lg">
                {card.subtitle}
              </h4>
              <P className={`text-white  md:text-sm`}>{card.content}</P>
              <div className="  ">
                <Link
                  href={card.link}
                  className="text-white font-inter text-base md:text-base lg:text-base font-normal  flex flex-row gap-x-2  "
                >
                  Read More <span className="brochure-icon"> &rarr; </span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SDGs;
