import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Heading from "../headings/Case";
import Button from "@/components/shared/buttons/button1";
import Link from "next/link";

const BeneficiariesM = ({ beneficiaries }) => {
  return (
    <Swiper
   
      autoplay={{
        disableOnInteraction: false,
      }}
      loop={2000}
      speed={2000}
      pagination={{ el: ".swiper-pagination", clickable: false }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "@1.50": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
      slidesPerView={1.4}
      spaceBetween={25}
      modules={[Pagination, Autoplay]}
      className="w-full pt-0 pb-4  flex  md:w-[700px] md:h-[450px]  md:justify-center md:items-center md:pt-4 md:px-4 md:p-2"
    >
      {beneficiaries.map((slide, index) => (
        <SwiperSlide
       
        key={index} className=" w-full h-[fixed]  flex flex-col gap-5 justify-center items-center mdw-[600px] md:h-[fixed]  ">
          <Heading
            className={`text-xl font-bold text-black font-passion md:text-3xl `}
          >
            {slide.heading}
          </Heading>
          <article className="text-base  text-black   md:text-xl  font-sans text-left ">
            {slide.content}
          </article>
          <Link href={slide.route}>
            <Button className={``}>{slide.btntext}</Button>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BeneficiariesM;
