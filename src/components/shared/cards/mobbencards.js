import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const MobileCarousel = ({ cards, swiperStyle, swiperClass }) => {
  return (
    <div className="md:hidden flex justify-center items-center mx-auto">
      <Swiper
        style={{
          width: "300px",
          height: "500px",
          flexDirection: "column",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          ...swiperStyle,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={`mySwiper-content ${swiperClass}`}
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            className="mySwiper-item w-[300px] flex flex-col justify-start items-start gap-12 shadow-xl rounded-lg"
          >
            <Image
              style={{
                width: "400px",
                borderTopRightRadius: "0",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "50%",
              }}
              src={card.image}
              alt={card.title}
              width={300}
              height={50}
              className="cards-slide-image w-[300px]"
            />
            <Link href={card.link}>
              <h2 className="text-2xl font-sans text-black hover-line px-4 pt-4 w-[250px]">
                {card.title}
              </h2>
            </Link>
            <article className="text-base px-4 font-sans text-black mt-12">
              {card.description}
            </article>
            <Link
              href={card.link}
              className="hover-line text-base px-4 relative top-8"
            >
              Learn More &rarr;
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MobileCarousel.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  swiperStyle: PropTypes.object,
  swiperClass: PropTypes.string,
};

MobileCarousel.defaultProps = {
  swiperStyle: {},
  swiperClass: "",
};

export default MobileCarousel;
