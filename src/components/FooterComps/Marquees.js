import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";

function Marquees() {
  const marquees1 = [
    {
      image: "/assets/images/logos/resources/SOSF Banner Logo.png",
      name: "SOSF Advocacy/",
      to: "/our-focus-areas",
    },

    {
      image: "/assets/images/logos/resources/SOSF Banner Logo.png",
      name: "SOSF Data/",
      to: "/our-focus-areas",
    },
    {
      name: "Get Involved/",
      to: "get-involved",
      image: "/assets/images/logos/resources/SOSF Banner Logo.png",
    },
    {
      name: "News & Insights/",
      to: "#news-insights",
      image: "/assets/images/logos/resources/SOSF Banner Logo.png",
    },
    {
      name: "About SOSF/",
      to: "/who-we-are",
      image: "/assets/images/logos/resources/SOSF Banner Logo.png",
    },
  ];
  const marquees2 = [
    {
      image: "/assets/images/logos/resources/SOSF Banner Logo.png",
      name: "Policies & Guidelines/",
      to: "/contact",
    },

    {
      image: "/assets/images/logos/resources/SOSF Banner Logo.png",
      name: "SOSF Strategic Impact Corporate Partnerships/",
      to: "/collaborations",
    },
    {
      image: "/assets/images/logos/resources/SOSF Banner Logo.png",
      name: "SOSF Scale Up Impact Individual Partnerships/",
      to: "/collaborations",
    },
  ];

  return (
    <div className="w-full h-[fixed] flex flex-col gap-y-8 justify-star items-start p-2  mb-9 ">
      {/* create three different marquess using the react fast marque  , let the first move from right-left and the second from left t- right and the third from right - left  */}
      <Marquee
        speed={15}
        gradient={false}
        pauseOnHover={true}
        direction="left"
        className="custom-marquee h-full w-full overflow-hidden  flex flex-row gap-x-5 "
      >
        <section className="w-full flex flex-row  gap-x-5  space-x-2 justify-start items-start ">
          {marquees1.map((marquee, index) => (
            <div key={index} className="flex  ">
              <Link href={marquee.to} className="flex items-center space-x-2">
                {/* <Image
                  src={marquee.image}
                  alt={marquee.name}
                  height={50}
                  width={50}
                  className="h-auto w-[60px] object-contain"
                />  */}
                <span className="text-[#000000] font-lato   hover:text-blue  text-2xl      lg:text-4xl  text-left font-normal  hover:text-opacity-40 transition-transform  duration-700 ease-in-out hover:transition-transform  hover:duration-700 hover:ease-in-out  ">
                  {marquee.name}
                </span>
              </Link>
            </div>
          ))}
        </section>
      </Marquee>
      <Marquee
        speed={15}
        gradient={false}
        pauseOnHover={true}
        direction="right"
        className="custom-marquee h-[full] w-full overflow-hidden "
      >
        <section className="w-full flex flex-row  gap-x-5  space-x-5 justify-start items-start  p-2">
          {marquees2.map((marquee, index) => (
            <div key={index} className="flex  ">
              <Link href={marquee.to} className="flex items-center space-x-2">
                {/* <Image
                  src={marquee.image}
                  alt={marquee.name}
                  height={50}
                  width={50}
                  className="h-auto w-[60px] object-contain"
                /> */}
                <span className="text-[#000000] hover:text-blue  transform duration-700 ease-in-out font-lato font-normal   text-2xl  lg:text-4xl    text-left   hover:text-opacity-40 transition-transform   hover:transition-transform  hover:duration-700 hover:ease-in-out  ">
                  {marquee.name}
                </span>
              </Link>
            </div>
          ))}
        </section>
      </Marquee>
      {/* <Marquee
          speed={15}
          gradient={false}
          pauseOnHover={true}
          direction="left"
          className="custom-marquee h-full w-full overflow-hidden "
        >
     
      </Marquee> */}
    </div>
  );
}

export default Marquees;
