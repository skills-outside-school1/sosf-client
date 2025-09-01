import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        data-aos-anchor-placement="top-bottom"
        className={`  fixed          top-[89%]    left-[86%]    shadow-2xl     md:top-[80%]  md:left-[94%]  z-50  back-to-top w-auto h-auto bg-[#8A96B8]  hover:bg-[#000000] transform duration-700 ease-in-out rounded-[100%]  p-[0.4rem] md:p-3  flex justify-center items-center  ${
          showBackToTop ? "visible" : "invisible"
        }`}
      >
        <button onClick={scrollToTop}>
          <FontAwesomeIcon
            icon={faChevronUp}
            className="text-white text-3xl mx-auto  "
          />
        </button>
      </div>
    </div>
  );
}
