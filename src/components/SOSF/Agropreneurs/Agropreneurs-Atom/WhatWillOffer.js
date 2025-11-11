import Image from "next/image";
import React from "react";

const WhatWillOffer = () => {
  return (
    <section className="px-4 md:px-[4rem] lg:px-[7.6rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Image
            src="/assets/images/sosf-images/Offer.png"
            alt="offer pics"
            width={400}
            height={100}
            className="w-auto h-auto"
          />
        </div>
        <div>
          <p className=" font-mont text-[#000000] font-semibold text-[20px] mb-4">
            What we offer
          </p>
          <span className=" font-inter font-normal text-[16px] leading-7">
            Technical training (with IITA and others) + simplified business
            training (pricing, negotiation, bookkeeping, etc.), Subsidized
            tools, fertilizers, seeds, and herbicides, Ongoing business
            advisory, productivity tracking, M&E, Non-cash input vouchers,
            working capital loans, equipment leasing, AI-platform access,
            Personalized guidance, real-time farm records, market discovery, and
            supplier directory via AI assistant and offline-first mobile apps
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatWillOffer;
