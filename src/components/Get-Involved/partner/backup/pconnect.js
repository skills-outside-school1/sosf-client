import React, { useEffect } from "react";
import Button from "@/components/shared/buttons/button1";
import Aos from "aos";
import "aos/dist/aos.css";

function PartnerConnect() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className=" flex flex-col  w-full h-[fixed]  ">
      <div
        className="w-full h-[500px]  flex flex-col justify-center items-center p-2  "
        style={{
          background: `linear-gradient(rgba(0, 0, 4, 0.5), rgba(0, 0, 4, 0.5)), url(" https://jil.sh/wp-content/uploads/2023/06/Hackathon-2020.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover%",
        }}
      ></div>
      <section className="px-2 w-full justify-center flex flex-col       md:px-0">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in linear"
          data-aos-duration="2000"
          data-aos-delay="50"
          data-aos-mirror="true"
          data-aos-once="true"
          className="connect-container  bg-stone-200 z-20  relative   bottom-[8rem]  shadow-2xl      w-full  m  h-[500px]    md:w-[800px]     md:h-[450px]  p-2  flex flex-col justify-center items-center gap-y-[30px]
    lg:w-[900px] mx-auto
     "
        >
          <h2
            className={`text-cyan text-3xl font-black font-lato  md:text-4xl mb-[30px]`}
          >
            Partner With Us !
          </h2>
          <h4 className="text-lato  text-2xl font-bold md:text-3xl text-secondary_blue">
            We Would Love to Hear From You
          </h4>
          <p className="text-black  text-center  text-opacity-90 font-sans text-xl     md:text-2xl ">
            We&apos;d love to hear more about your church, and see how we can
            partner together to transform lives with Christ&apos;s love and
            fulfill your calling to care for the poor. Call us at 800-755-5022
            or email us at info@worldconcern.org and we&apos;ll connect you with
            our Church Mobilization team.
          </p>
          <Button
            onClick={() => alert(" this is a modal function ")}
            className="  w-[200px] bg-secondary_blue font-sans  rounded-none text-white  hover:bg-opacity-20 "
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}

export default PartnerConnect;
