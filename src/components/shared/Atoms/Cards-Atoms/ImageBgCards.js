import Image from "next/image";
import React from "react";
import { H3, P } from "../Typography/typography";

export default function ImageBgCards({ cards = [], containerStyles = "" }) {
  return (
    <div
      className={`w-full justify-center items-center p-2 ${containerStyles}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center w-full  ">
        {cards.map((card, index) => (
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            key={index}
            className="flex flex-col  relative overflow-hidden group    h-[280px] w-[340px]   md:w-[350px] rounded-2xl md:hover:scale-105 transform   duration-1000 "
            style={{
              backgroundImage: card.bg ? `url("${card.bg}")` : undefined,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="opacity-div     h-[280px] w-[350px] bg-black px-6 pt-8 bg-opacity-50   ">
              {/* ICON SLOT — fixed height */}
              <div className="h-[40px] flex items-start">
                {card.icon && (
                  <Image
                    src={card.icon}
                    alt={card.title || "card-icon"}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                )}
              </div>

              {/* TITLE + DESCRIPTION SLOT */}
              <div className="mt-6 flex flex-col gap-y-2">
                <div className="min-h-[28px]">
                  {card.title && (
                    <H3 className="text-lg font-mont font-semibold text-white">
                      {card.title}
                    </H3>
                  )}
                </div>

                <div className="min-h-[60px]">
                  {card.description && (
                    <P className="font-normal font-inter text-sm text-white">
                      {card.description}
                    </P>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
