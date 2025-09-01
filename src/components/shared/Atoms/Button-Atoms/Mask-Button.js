import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Aos from "aos";
import "aos/dist/aos.css";

export default function MaskButton({
  buttontext,
  className1,

  className2,
  className,
  onClick,
  icon,
  aos,
}) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-cubic",
      mirror: true,
      anchorPlacement: "top-center",
      throttleDelay: 5000,
      throttle: true,
    });
  }, []);

  return (
    <button
      data-aos={`${aos}`}
      onClick={onClick}
      className={` hover:bg-black  hover:text-white   transition-all ease-in-out duration-700  bg-secondary_blue  font-medium   text-[#000000]  font-mont   text-lg  md:text-lg xl:text-xl  flex justify-center items-center flex-row gap-x-2  w-[180px] h-[45px] p-2 ${className}`}
    >
      {buttontext}{" "}
    </button>
  );
}
