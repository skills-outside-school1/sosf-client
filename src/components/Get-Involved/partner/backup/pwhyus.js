import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

function WhyUs() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className=" flex flex-col gap-y[30px] w-full h-[fixed] justify-center items-center p-2 ">
      <h2
        className={`text-cyan text-3xl font-black font-lato  md:text-4xl mb-[30px]`}
      >
        Why Partner With Us!
      </h2>

      <section
        data-oas="fade-up"
        data-oas-easing="ease-in linear"
        data-aos-duration="2000"
        data-aos-delay="50"
        data-aos-mirror="true"
        className={` relative grid grid-cols-1 justify-center items-center  w-full   p-2     md:grid-cols-2  bg-gray-100  `}
      >
        <div className="image-container overflow-hidden  w-full h-[fixed]   flex flex-col justify-center items-center mx-auto  lg:w-[700px]  ">
          <Image
            src="https://media.tegna-media.com/assets/WZDX/images/c37c0391-46c8-42ba-98b3-a87db67ba08b/c37c0391-46c8-42ba-98b3-a87db67ba08b_1920x1080.jpg"
            alt="partner-image "
            width={800}
            height={400}
            className=" w-full h-[320px]     md:w-full      lg:w-[700px] lg:h-[500px] lg:pl-8 
            hover:scale-105 hover:duration-1000 hover:transition-all hover:ease-in-out transition-all duration-1000 ease-in-out
            "
          />
        </div>

        <div className="text-bg--container     w-full h-[400px]   flex flex-col justify-center items-center relative  bottom-[4.8rem]  md:left-[10rem] md:top-[2rem]  md:absolute lg:top-[10%] lg:left-[17rem] right-0 ">
          <section className="context-container   flex flex-col justify-center items-start  gap-y-[30px] w-[90%]      px-4  md:w-[450px]   md:h-[300px]  lg:h-[400px] lg:w-[600px] h-[400px] bg-white  shadow-2xl rounded-md ">
            <h3 className="text-2xl font-black font-lato text-secondary_blue  md:text-3xl">
              Our Commitment to Sustainability
            </h3>
            <p className="text-black  text-opacity-90   font-sans text-xl     md:text-2xl ">
              We strive to create a sustainable future for our clients, by
              providing excellent care, support, and resources to help them
              navigate the challenges of their local communities.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default WhyUs;
