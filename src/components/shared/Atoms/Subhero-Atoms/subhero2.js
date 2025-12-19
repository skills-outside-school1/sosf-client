import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { P } from "../Typography/typography"; // Removed unused imports for cleanliness

function SubHero({
  items = [],
  aos,
  className,
  className2,
  className3,
  className4,
  className5,
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
      className={`w-full justify-start items-start flex flex-col px-4 md:px-[4rem] gap-y-4 lg:px-[7.6rem] md:w-[80%] ${className}`}
    >
      {items.map((item, index) => (
        <div
          className={`flex flex-col gap-y-4 justify-start items-start ${className5}`}
          key={index}
        >
          {/* Heading 1 (Top small text) */}
          {item.heading1 && (
            <span
              className={`${className2} text-base font-inter font-semibold text-[#000000] md:text-xl lg:text-[18.56px]`}
            >
              {item.heading1}
            </span>
          )}

          {/* Heading 2 (Main Big Title: SOSF GRANTS) */}
          <span
            className={`text-[#000000] font-bold font-mont md:leading-[70.4px] text-3xl md:text-5xl lg:text-[60.25px] ${className3}`}
          >
            {item.heading2}
          </span>

          {/* --- NEW ADDITION: Subheading --- */}
          {item.subheading && (
            <span className="text-black font-semibold text-lg md:text-xl font-inter leading-tight">
              {item.subheading}
            </span>
          )}
          {/* -------------------------------- */}

          {/* Paragraph */}
          <P
            className={`${className4} lg:w-[80%] leading-normal tracking-wide`}
          >
            {item.paragraph}
          </P>
        </div>
      ))}
    </div>
  );
}

export default SubHero;