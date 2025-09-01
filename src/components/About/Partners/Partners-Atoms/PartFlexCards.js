// components/PartFlexCards.jsx
import React from "react";
import Image from "next/image";
import { P } from "@/components/shared/Atoms/Typography/typography";
import MaskButton from "@/components/shared/Atoms/Button-Atoms/Mask-Button";
import { useRouter } from "next/router";

export default function PartFlexCards() {
  const router = useRouter();

  const cards_data = [
    {
      image: "/assets/images/home/invest.png",
      heading: "Investments",
      content: (
        <span>
          For individuals & organizations that seek to contribute in cash,
          assets or in-kind to further our work and that of our beneficiaries.
        </span>
      ),
      route_name: "Invest Now",
      sectionRef: "investment-section",
    },
    {
      image: "/assets/images/home/partner.webp",
      heading: "Partnerships",
      content: (
        <span>
          For individuals / organizations that are keen to partner with us to
          design/execute their own initiatives & schemes; or provide grants /
          resources to a wide range of beneficiaries
        </span>
      ),
      route_name: "Partner with us",
      sectionRef: "partnership-section",
    },
  ];

  const handleNavigate = (sectionId) => {
    router.push(`/get-involved#${sectionId}`);
  };

  return (
    <div className="w-full pb-5 flex flex-col gap-y-8 md:gap-y-1 px-2 pt-5 md:px-[4rem] lg:px-[7rem] bg-gray-50 bg-opacity-70">
      <section className="w-full">
        <h3 className="text-gray-800 font-mont text-xl lg:text-2xl font-bold text-center md:text-left md:w-[59%] md:ml-auto">
          At the Skills Outside School Foundation, we offer two dynamic paths
          for collaboration:
        </h3>
      </section>

      <section className="flex flex-col gap-y-[4rem]">
        {cards_data.map((card, index) => (
          <div
            key={index}
            className="w-full flex flex-col gap-y-[3rem] md:flex-row gap-x-[5rem] justify-center items-center"
          >
            <section className="w-full md:w-[600px] bg-gray-100 shadow-xl rounded-md p-2 flex justify-center">
              <Image
                src={card.image}
                alt={card.heading}
                width={500}
                height={300}
                className="w-[400px] lg:w-full h-[300px] object-cover rounded-md"
              />
            </section>
            <section className="w-full flex flex-col gap-y-5">
              <h3 className="text-gray-800 font-mont text-xl lg:text-2xl font-bold">
                {card.heading}
              </h3>
              <P>{card.content}</P>
              <MaskButton
                buttontext={card.route_name}
                onClick={() => handleNavigate(card.sectionRef)}
              />
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}
