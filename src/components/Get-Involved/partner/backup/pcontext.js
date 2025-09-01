import React from "react";
import Heading from "@/components/shared/headings/Case";

function PContext() {
  const cards = [
    {
      heading: "Partner With Us",
      subheading: "Become Part of the Transformation",
      descriptors: (
        <article className="  ">
          We partner with entrepreneurs, educators, and employers to drive
          meaningful change. By supporting education, enhancing employability,
          and fostering entrepreneurship, we empower individuals to overcome
          poverty and build sustainable futures. Together, we transform lives,
          uplift families, and strengthen communities.
        </article>
      ),
    },
  ];
  return (
    <div className="w-full max-h-full flex flex-col justify-center items-center pt-12 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className={` w-full max-h-full  flex flex-col  gap-7 justify-center items-center  gap-y-[30px] mx-auto  `}
        >
          <h2 className={`text-cyan   text-3xl font-black font-lato  md:text-4xl`}>
            {card.heading}
          </h2>
          <h5 className="text-secondary_blue  t text-center px-4  font-semibold text-2xl   md:text-3xl font-lato md:px-0 ">
            {card.subheading}
          </h5>
          <article
            className="  px-4  text-black text-opacity-90 font-sans text-xl   md:text-2xl
             w-full  md:w-[50%] md:px-0  text-center"
          >
            {card.descriptors}
          </article>
        </div>
      ))}
    </div>
  );
}

export default PContext;
