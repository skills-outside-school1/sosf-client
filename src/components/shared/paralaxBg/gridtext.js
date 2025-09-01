import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Heading from "@/components/shared/headings/Case";
import Aos from "aos";
import "aos/dist/aos.css";

const GridText = ({ mainHeading, subHeading, mainHeadingClass, subHeadingClass, animationDuration, animationDelay }) => {
  useEffect(() => {
    Aos.init({ duration: animationDuration });
  }, [animationDuration]);

  return (
    <div className="flex flex-col justify-start items-start px-3 gap-8 w-full h-[300px] md:gap-0 md:grid md:grid-cols-2 md:justify-center md:items-start md:px-5">
      <section data-aos="fade-up" className="first-section-subhero">
        <Heading className={`text-xl text-opacity-75 md:text-5xl ${mainHeadingClass}`}>
          {mainHeading}
        </Heading>
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration={animationDuration}
        data-aos-delay={animationDelay}
        className="second-section-subhero"
      >
        <Heading className={`text-base font-normal md:text-2xl w-full ${subHeadingClass}`}>
          {subHeading}
        </Heading>
      </section>
    </div>
  );
};

GridText.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  mainHeadingClass: PropTypes.string,
  subHeadingClass: PropTypes.string,
  animationDuration: PropTypes.number,
  animationDelay: PropTypes.number,
};

GridText.defaultProps = {
  mainHeadingClass: "",
  subHeadingClass: "",
  animationDuration: 1500,
  animationDelay: 50,
};

export default GridText;
