import React from "react";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Link from "next/link";

export default function News() {
  const subitem = [
    {
      heading2: "News & Insights",
    },
  ];
  const newitems = [
    {
      color: "#B7C8F4",
      date: "12/23/2024",
      title: "NYCHA developments get $3million for free arts program",
      link: "",
    },

    {
      color: "#A3B2D9",
      date: "12/23/2024",
      title: "NYCHA developments get $3million for free arts program",
      link: "",
    },

    {
      color: "#7B86A3",
      date: "12/23/2024",
      title: "NYCHA developments get $3million for free arts program",
      link: "",
    },
  ];

  return (
    <div className="w-full h-[fixed]  flex flex-col  gap-y-4">
      <SubHero items={subitem} />
      <section className="grid grid-cols-1 md:grid-cols-3 justify-start items-start px-2   lg:px-[8rem] ">
        {newitems.map((card, index) => (
          <div
            key={index}
            className=" relative group overflow-hidden  transform duration-700 ease-in-out   w-full  flex flex-col gap-y-5 justify-center items-start px-3 lg:px-[3rem] p-2  lg:w-[384px] h-[390px]"
            style={{
              backgroundColor: card.color,
            }}
          >
            <div className=" w-full  flex flex-col  gap-y-5 group-hover:z-30">
              <h5 className="text-gray-800 font-thin  font-inter text-base ">
                {card.date}
              </h5>
              <h3 className="text-gray-800 text-xl  md:text-2xl font-inter  font-thin  col-span-2  ">
                {card.title}
              </h3>
              <Link
                href={card.link}
                className="text-base font-bold font-inter  flex flex-row gap-x-4 justify-stat items-start text-gray-800 mt-8 mb-4  "
              >
                Read The News <span className="brochure-icon"> &rarr; </span>
              </Link>
            </div>
            <div
              className={`hover-div  absolute top-0 left-0 right-0    
           w-full  lg:w-[384px] h-[390px] opacity-0  transform    ease-in-out duration-700  -translate-y-full 
            group-hover:transform  group-hover:duration-700 group-hover:ease-in-out group-hover:opacity-100 
             group-hover:translate-y-0 
            group-hover:rounded-br-[100%]   group-hover:bg-opacity-20

               ${
                 index === 1
                   ? "  group-hover:rounded-bl-[100%]    group-hover:rounded-br-none   group-hover:bg-blue  "
                   : index === 0
                   ? " group-hover:bg-pink "
                   : index === 2
                   ? " group-hover:bg-cyan "
                   : ""
               }`}
            ></div>
          </div>
        ))}
      </section>
    </div>
  );
}
