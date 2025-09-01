import React, { useState, useEffect } from "react";
import Button from "@/components/shared/buttons/button1";
import { useRouter } from "next/router";
import Modal2 from "./modal2";
import Aos from "aos";
import "aos/dist/aos.css";
import SubHero from "../Atoms/Subhero-Atoms/Subhero";
import { P } from "../Atoms/Typography/typography";

const Modal1 = ({ onClose }) => {
  const content = [
    {
      heading1: "Cookies Policy Notice",
    },
  ];
  const router = useRouter();
  const handleRoute = () => {
    router.push("/contact/cookie-policy");
    onClose();
  };
  const [settings, setSettings] = useState(false);

  // Function to check modal open and close state
  const openSettings = () => {
    setSettings(true);
  };
  const closeSettings = () => {
    setSettings(false);
  };

  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 1500,
      easing: "ease-in-cubic",
    });

    // Function to close modal using the Escape key
    const keyboardPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", keyboardPress);

    return () => {
      document.removeEventListener("keydown", keyboardPress);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  useEffect(() => {
    if (settings) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [settings]);

  const handleClick = () => {
    onClose();
  };

  return (
    <div
      className="inset-0 fixed bg-black  px-4 bg-opacity-70 z-50 flex flex-col justify-center items-center modal-overlay-container"
      // onClick={handleOverlayClick}
    >
      <div
        data-aos="fade-in"
        easing="ease-in-out linear"
        duration="2000"
        className="modal-itself relative z-50 flex flex-col overflow-y-auto    md:gap-x-4 p-4 inset-0 shadow-xl bg-white justify-start  items-start  md:justify-center md:items-start    w-full  h-[fixed] md:top-[5%] rounded-md md:w-[1000px] md:h-[350px] "
      >
        <section className="text-section-top w-full h-[fixed] flex flex-col gap-y-2 relative  justify-center items-start  ">
          <h3 className="text-gray-800 font-mont text-3xl  font-bold  md:ml-[6rem] md:text-3xl">
            Cookie Policy Notice
          </h3>
          <article className="text-gray-800   md:px-[6rem]   mt-8  font-inter font-normal  md:mr-[4rem] w-full  ">
            {/* Article for the cookie notification */}
            We use necessary cookies to improve your user experience and to make
            our site and services work. Additionally, we would also like to set
            optional analytical cookies to help us improve our site. By clicking
            (Accept) you are allowing us to set these optional cookies.
            <br />
            <br />
            You can find out more about which cookies we are using in our{" "}
            <button onClick={() => handleRoute()} className=" underline ">
              cookie policy
            </button>{" "}
            and switch them on or off in{" "}
            <button className=" underline" onClick={() => openSettings()}>
              settings
            </button>
          </article>
          {settings && <Modal2 onClose={() => closeSettings()} />}
        </section>
        <section className=" flex   flex-col gap-y-5     md:flex-row gap-x-9  mt-7">
          {/* accept button */}
          <p
            onClick={handleClick}
            className={`   md:ml-[6.5rem] text-gray-800 font-bold text-base    hover-line  hover:text-secondary_blue cursor-pointer  `}
          >
            Accept
          </p>

          {/* decline button */}
          <p
            onClick={onClose}
            className={`    text-gray-800 font-bold text-base   hover-line  hover:text-secondary_blue  cursor-pointer `}
          >
            Decline
          </p>
        </section>
      </div>
    </div>
  );
};

export default Modal1;
