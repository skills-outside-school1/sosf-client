import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const BeneficiariesCards = ({ cards }) => {
  useEffect(() => {
    Aos.init({ duration: 2500, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-transparent flex flex-col gap-6 justify-center items-center p-2 px-2 bg-gray-100 w-full pb-12 md:p-2 md:h-[600px] md:gap-1 md:grid md:grid-cols-3">
      {cards.map((card, index) => (
        <motion.div
          data-aos="zoom-in-up"
          data-aos-duration="2500"
          data-aos-delay="50"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-easing="ease-in-out linear"
          key={index}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,3, 0.8), rgba(0,0,3,0.8)), url(${card.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="relative card-container container cut-edge flex flex-col justify-start pt-7 items-start p-2 gap-5 w-[350px] h-[400px] shadow-lg lg:w-[300px] md:h-[450px] md:w-[250px] md:mx-auto rounded-tl-[10%] rounded-bl-[10%] px-4 rounded-tr-[10%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.9 }}
        >
          <h3
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            className="text-white font-bold font-passion text-left text-2xl md:text-3xl"
          >
            {card.title}
          </h3>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
            data-aos-delay="50"
            data-aos-once="true"
            className="text-white font-greatvibes text-sm  md:text-base"
          >
            {card.content}
          </p>
          <Link
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
            data-aos-once="true"
            href={card.link}
            className="absolute bottom-4 left-4 border border-white p-2 w-[40px] rounded-full text-white font-bold hover:bg-white hover:text-black transition-colors"
          >
            &rarr;
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

BeneficiariesCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BeneficiariesCards;
