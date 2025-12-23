import Image from "next/image";
import React from "react";

const Catalyzing = () => {
  return (
    <section className="px-4 md:px-[4rem] lg:px-[7.6rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14">
        <div>
          <Image
            src="/assets/images/our_work/grants_side.png"
            alt="grants-side"
            width={400}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <div>
          <p className=" font-mont text-[#000000] font-semibold text-[20px] mb-4">
            Catalyzing Disruptive Development Across Africa
          </p>
          <span className=" font-inter font-normal text-[16px] leading-7">
           At SOSF, we believe in the power of collaboration to achieve far more than any single entity can alone. Our grant-giving philosophy is built on principles of outcomes-focus, comprehensive support, strategic coherence, valuing our partners, fostering learning, and genuine partnership. We are not just funders; we are active collaborators in your mission to disrupt development across the continent.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Catalyzing;
