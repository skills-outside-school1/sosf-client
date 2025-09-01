import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Heading from "@/components/shared/headings/Case";
import Aos from "aos";
import "aos/dist/aos.css";

const GridsPlacement = ({ grids }) => {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-in-out-linear" });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4  md:gap-10 ">
      {grids.map((grid, index) => (
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          key={index}
          className=" gap-4 md:gap-10  flex flex-col  md:grid md:grid-cols-2  p-4 md:px-[4rem]"
        >
          {/* Left Content */}
          <div className="    md:w-[90%]  ">
            <Heading className="text-xl text-opacity-75 md:text-3xl">
              {grid.leftcontent}
            </Heading>
          </div>
          {/* Right Content */}
          <div className=" p-4">
            <section className="right-section">
              <Heading className="text-base font-normal md:text-2xl">
                {grid.rightcontent}
              </Heading>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

GridsPlacement.propTypes = {
  grids: PropTypes.arrayOf(
    PropTypes.shape({
      leftcontent: PropTypes.string.isRequired,
      rightcontent: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GridsPlacement;
