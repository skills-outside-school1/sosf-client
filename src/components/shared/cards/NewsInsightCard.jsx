import React from "react";
import Link from "next/link";
import Image from "next/image";

// ${
//     index === currentIndex ? "opacity-100" : "opacity-1"
//   }
const NewsInsightCard = ({ card }) => {
  return (
    <div>
      <div
        className={`transition-opacity duration-500 opacity-100  lg:w-[350px] lg:h-[450px] bg-transparent  md:w-[250px] md:h-[500px] bg-milk flex flex-col justify-start items-start gap-5`}
      >
        <Image
          src={card.image}
          alt={card.title}
          width={350}
          height={200}
          className=" w-[350px] h-[200px]"
        />
        <Link href={card.link}>
          <h2 className="text-2xl font-sans text-black hover:underline">
            {card.title}
          </h2>
        </Link>
        <article className="text-base font-sans text-black mt-1">
          {card.description}
        </article>
        <Link href={card.link} className="hover-line text-base">
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default NewsInsightCard;
