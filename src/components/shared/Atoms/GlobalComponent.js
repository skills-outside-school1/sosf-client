import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import MaskButton from "./Button-Atoms/Mask-Button";
import { P } from "./Typography/typography";

export default function GlobalComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Framer Motion animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const slides = [
    {
      title: "Data-Driven Sustainable Interventions for Impact",
      description:
        "We collect, assess & leverage on data to design, deploy & disseminate interventions, advocate & inform for collaborative impact",
      link: "#",
    },
    {
      title: "Advocating for Sustainable Socio-Economic Development ",
      description:
        "We champion evidence-based advocacy by creating awareness, mobilizing volunteers, joining coalitions, influencing policy & regulation, institutionalizing change & leveraging our ambassadors for sustained impact in the ‘virtuous circle of good”",
      link: "#",
    },
    {
      title: "Strategic Direct & Indirect Interventions for our Beneficiaries ",
      description:
        "We design, implement & partner with key stakeholders & intermediaries to deploy initiatives, programs & schemes to drive quality education, decent work & sustainable and scalable enterprises for development. ",
      link: "#",
    },
  ];

  return (
    <div
      className="w-full h-[600px] flex justify-start items-center"
      style={{
        background: `url("/assets/images/home/interested-in-applying.jpg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full md:w-[782.4px] h-[500.17px] justify-center items-start  py-[4rem]  flex flex-col bg-[#000000] bg-opacity-60 border border-white px-6">
        <Swiper
          modules={[Autoplay]} // Only using Autoplay module
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          speed={7000} // Slower speed (1000ms)
          loop={true} // Enable looping
          spaceBetween={50}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)} // Track active slide
          className="slider-container w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                key={currentSlide === index ? `slide-${index}` : `hidden-slide`}
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-y-5 justify-start   h-[400px] items-start mt-2   py-4"
              >
                <h3 className="text-white font-bold font-mont text-2xl md:text-3xl">
                  {slide.title}
                </h3>
                <P className="text-white  lg:w-[80%] ">{slide.description}</P>
                <div className=" flex flex-col w-full  button-container  my-auto">
                  <Link href={slide.link}>
                    <MaskButton
                      buttontext="Explore our work"
                      className="w-full lg:w-[400px]  md:w-[700px] px-4 mt-auto  md:text-sm  font-medium "
                    />
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
