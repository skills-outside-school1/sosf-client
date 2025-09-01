import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import PropTypes from "prop-types";

const ParallaxSection = ({ title, description, linkText, linkHref, videoSrc, titleStyle, descriptionStyle, linkStyle }) => {
  useEffect(() => {
    Aos.init({ duration: 2500, easing: "ease-in-out" });
  }, []);

  return (
    <div className="relative h-[500px] w-full  gap-6">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-8 justify-center items-start p-2 px-2 pb-12 md:px-8 md:p-4 bg-black bg-opacity-50">
        <h3
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          className={`text-2xl font-bold font-playfair text-left md:text-5xl text-white ${titleStyle}`}
        >
          {title}
        </h3>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          className={`text-xl text-left md:text-3xl md:w-[80%] text-white ${descriptionStyle}`}
        >
          {description}
        </p>
        <Link
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="2000"
          data-aos-delay="50"
          data-aos-once="true"
          href={linkHref}
          className={`border-white border-2 relative top-5 hover:bg-white hover:text-black rounded-full p-3 text-white bg-transparent flex justify-center items-center text-center text-xl ${linkStyle}`}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

ParallaxSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  titleStyle: PropTypes.string,
  descriptionStyle: PropTypes.string,
  linkStyle: PropTypes.string,
};

ParallaxSection.defaultProps = {
  titleStyle: "",
  descriptionStyle: "",
  linkStyle: "",
};

export default ParallaxSection;
