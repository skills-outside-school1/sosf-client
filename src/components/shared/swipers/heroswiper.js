import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Heading from "../headings/Case";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectFade,
} from "swiper/modules";

const HeroSwiper = ({ swipes }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const handleSlideChange = () => {
    Aos.refresh();
  };

  return (
    <div className="w-full h-[550px]">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        spaceBetween={30}
        effect="fade"
        autoplay={{ delay: 7000 }}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectFade]}
        className="mySwiper-slides"
        style={{
          width: "100%",
          height: "550px",
          borderTopLeftRadius: "0",
          borderBottomRightRadius: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {swipes.map((swipe, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 4, 0.8), rgba(0, 0, 4, 0.8)), url(${swipe.background})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              fill: "none",
            }}
            className="flex flex-col justify-center items-center h-[550px]"
          >
            <motion.div
              className="contents-container flex flex-col justify-center items-center gap-8 w-full h-[550px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 5 }}
            >
              <Heading
                className="text-white font-bold text-3xl md:text-6xl font-passion"
                data-aos="fade-up"
              >
                {swipe.caption}
              </Heading>
              <div className="flex flex-col space-x-6 gap-x-6 justify-center items-center mx-auto w-[80%]">
                <motion.article
                  className="text-white font-semibold text-center text-base md:text-3xl w-[70%] flex justify-center items-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {swipe.content}
                </motion.article>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
