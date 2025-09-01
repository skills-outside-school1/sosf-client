import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

function PartnerInvolved() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const cards = [
    {
      image: "https://wepnigeria.net/wp-content/uploads/2018/01/IMG_3450.jpg",
      title: "Skills-Based Volunteering and Mentorship Programs",
      text: <p>Engage employees in mentorship and skills-based volunteering</p>,
    },
    {
      image: "https://jil.sh/wp-content/uploads/2023/06/Hackathon-2020.jpg",
      title: "Joint Innovation Labs and Hackathons",
      text: (
        <p>
          Collaborate on innovation labs and hackathons for problem-solving.
        </p>
      ),
    },
    {
      image:
        "https://c8.alamy.com/comp/2B7F0XW/training-development-gears-concept-3d-illustration-2B7F0XW.jpg",
      title: "Co-Developed Educational and Training Content",
      text: <p>Co-create industry-aligned educational content with us.</p>,
    },
  ];

  return (
    <div className=" w-full gap-y-[30px]  flex flex-col  h-[fixed]  justify-center items-center ">
      <h2 className="text-cyan text-3xl font-black font-lato   md:text-4xl mb-[30px]">
        How to Get Involved
      </h2>
      <section className="   grid grid-cols-1 justify-center items-center gap-y-[100px]  gap-x-[30px]  w-full p-2 h-[fixed]  md:grid-cols-3  lg:px-[4rem]">
        {cards.map((card, index) => (
          <div
            data-aos="flip-right"
            data-aos-easing="ease-in cubic"
            data-aos-duration="2500"
            data-aos-delay="100"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-bottom"
            data-aos-once="true"
            data-aos-throttle="true"
            key={index}
            className=" bg-stone-100  md:hover:scale-105 md:hover:duration-1000 md:hover:transition-all  md:hover:ease-in-out    md:transition-all  md:duration-1000 md:ease-in-out  mx-auto flex flex-col gap-y-[30px] justify-start items-start  w-full  h-[fixed]  md:hover:shadow-current    lg:w-[320px]    shadow-xl  "
          >
            <div className="image-container w-full h-[fixed] overflow-hidden ">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={300}
                className="w-full h-[300px]     md:h-[250px]   "
              />
            </div>
            <section className="title-description-container  px-4 flex flex-col gap-y-[5px] justify-start items-start w-full h-[fixed] mb-5">
              <h1 className="text-secondary_blue  font-black font-lato text-xl  md:text-2xl">
                {card.title}
              </h1>
              <p className="text-black text-opacity-90 font-sans   text-xl   md:text-2xl">
                {card.text}
              </p>
            </section>
          </div>
        ))}
      </section>
    
    </div>
  );
}

export default PartnerInvolved;
