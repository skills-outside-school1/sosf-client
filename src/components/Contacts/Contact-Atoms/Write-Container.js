import { useState, useEffect } from "react";
import WriteToUs from "./WriteToUs";
import PoliciesNav from "./PoliciesNav";
import Case from "../../shared/headings/Case";

export default function WriteContainer() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        // User is scrolling up
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-start items-start sm:px-2 ">
      <section className="lg:left-[7rem]   md:left-[4rem] relative  w-full ">
        {/* big heading  */}
        <Case
          text="Write To Us"
          className={`   mr-auto  md:px-[0]  lg:px-[0] mb-9 `}
        />
        <section
          className={`  ${
            scrollDirection === "down"
              ? "translate-y-[-10px]"
              : "translate-y-[20px]"
          } transform  duration-500 ease-in-out`}
        >
          <WriteToUs />
        </section>
      </section>
      <section
        className={`  ${
          scrollDirection === "down"
            ? "translate-y-[-50px]"
            : "translate-y-[20px]"
        } transform  duration-500 ease-in-out`}
      >
        <PoliciesNav />
      </section>
    </div>
  );
}
