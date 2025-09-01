import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { P } from "@/components/shared/Atoms/Typography/typography";

export default function PartClientSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Our Clients",
      description: (
        <span>
          As a service-oriented organization, our clients are our
          ambassadors/beneficiaries. We do after all exist for them and to
          ensure we disrupt development for our individual and institutional
          beneficiaries.
        </span>
      ),
      link: "our-work",
    },
    {
      title: "Our Partners",
      description: (
        <span>
          We’re honored to partner with organizations who have a similar mandate
          that we do. We have partnered with organizations including UNICEF,
          IITA, Nigerian Breweries, WAYMA, Opportunity Desk, Areai, Open Fees
          Foundation, Nigerian Breweries, Kaftan TV, Secondary Education Board,
          Child & Green Foundation, FCT Agency for Science & Technology, Leprosy
          Mission and more.
        </span>
      ),
      link: "our-work",
    },

    {
      title: "Our Investors",
      description: (
        <span>
          We are honoured to have been supported by numerous philanthropic
          individuals whether through cash, mentoring, training, volunteering,
          or our diligent trustees & advisors, and institutions through cash,
          in-kind products & services and expertise. We couldn’t do this without
          them and count on more! Tongston, Access Bank, ACT Foundation, Alpha
          Praxis Nigeria Limited, Petroflow Integrated Consultants, Tocam
          Capital
        </span>
      ),
      link: "our-work",
    },
  ];

  return (
    <div className="parallax-container relative  overflow-hidden  ">
      <section className="absolute  top-0 left   w-full  h-[600px] flex flex-col justify-center items-start ">
        <div className=" bg-white w-full  rounded-md shadow-xl   md:w-[700px] h-[350px] p-2 px-4   md:ml-auto  md:mr-6  flex flex-col justify-center items-start ">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            speed={5000}
            spaceBetween={50}
            loop={true}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            className="slider-container w-full h-full flex justify-between  items-center "
            style={{ marginTop: "2rem" }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  key={
                    currentSlide === index ? `slide-${index}` : `hidden-slide`
                  }
                  className="flex flex-col gap-y-5 justify-center items-start mt-2"
                >
                  <h3 className="text-gray-800 font-bold font-mont text-2xl md:text-3xl">
                    {slide.title}
                  </h3>
                  <P className="lg:w-[90%]">{slide.description}</P>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <style jsx>
        {`
          .parallax-container {
            width: 100%;
            height: 500px;
             {
              /* background: url("/assets/images/our_work/hero_1.jpg") no-repeat */
            }
            background: url("https://cdn.pixabay.com/photo/2023/06/14/12/30/hands-8062985_640.jpg")
              no-repeat center center;
            background-size: cover;
            background-attachment: fixed;
             {
              /* filter: grayscale(100%); */
            }
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding-bottom: 1rem;
          }
        `}
      </style>
    </div>
  );
}
