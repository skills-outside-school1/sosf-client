import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { P, H1, H3, H2 } from "../Typography/typography";

function SubHero({
  items = [],
  aos,
  className,
  className2,
  className3,
  className4,
  className5,
  className6,
}) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out-linear",
      mirror: true,
      anchorPlacement: "top-center",
      throttleDelay: 50,
      throttle: true,
    });
  }, []);

  return (
    <div
      data-aos={`${aos}`}
      className={`w-full  justify-start items-start flex flex-col px-4 gap-y-4 md:w-[80%] ${className}`}
    >
      {items.map((item, index) => (
        <div
          className={`flex flex-col gap-y-4 justify-start items-start h-[fixed]  ${className5}`}
          key={index}
        >
          <span
            className={` ${className2}  text-base  font-inter  font-semibold   text-[#000000] md:text-xl lg:text-[18.56px]  `}
          >
            {item.heading1}
          </span>
          <span
            className={`text-[#000000] font-bold  font-mont  md:leading-[70.4px] text-3xl md:text-5xl lg:text-[60.25px]  ${className3} `}
          >
            {item.heading2}
          </span>

          <P
            className={`${className4} lg:w-[80%]   leading-normal  tracking-wide `}
          >
            {item.paragraph}
          </P>
        </div>
      ))}
    </div>
  );
}

export default SubHero;
