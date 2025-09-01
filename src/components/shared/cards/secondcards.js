import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import PropTypes from "prop-types";

const BeneficiariesCards2 = ({ cards }) => {
  useEffect(() => {
    Aos.init({ duration: 2500, easing: "ease-in-out" });
  }, []);

  return (
    <div className="flex flex-col gap-6 justify-center items-center p-2 px-2 bg-milk h-[fixed] w-full pb-12 md:p-2 md:h-[600px] md:gap-1 md:grid md:grid-cols-2">
      {cards.map((card, index) => (
        <div
          key={index}
          style={{ background: card.colors }}
          className="card-container cut-edge flex flex-col justify-start pt-7 items-start p-2 gap-5 w-[350px] h-[300px] shadow-lg lg:w-[500px] md:h-[350px] md:w-[400px] md:mx-auto rounded-tl-[10%] rounded-bl-[10%] px-4 rounded-tr-[10%]"
        >
          <h3
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="text-white font-bold font-passion text-left text-2xl md:text-5xl"
          >
            {card.title}
          </h3>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            className="text-white font-sans text-xl md:text-2xl"
          >
            {card.content}
          </p>
          <Link
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="2500"
            data-aos-delay="50"
            href={card.link}
            className="border border-white left-3 p-2 w-[40px] relative top-[4rem] rounded-[100%] text-white font-bold"
          >
            &rarr;
          </Link>
          <div
            className="card-image flex flex-col justify-start pt-7 items-start p-2 px-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,3, 0.5), rgba(0,0,3,0.5)), url(${card.image})`,
            }}
          >
            <h3 className="text-white font-bold font-passion text-left text-2xl md:text-5xl">
              {card.title}
            </h3>
            <Link
              href={card.link}
              className="bg-white p-2 w-[40px] relative top-[11.4rem] md:top-[13rem] rounded-[100%] text-black font-bold"
            >
              &rarr;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

BeneficiariesCards2.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      colors: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BeneficiariesCards2;
