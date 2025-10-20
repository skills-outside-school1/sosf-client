import { H2 } from "@/components/shared/Atoms/Typography/typography";
import Button2 from "@/components/shared/buttons/button2";
import Image from "next/image";
import React from "react";

const collaborationData = [
  {
    id: 1,
    title: "Investments",
    image: "/assets/images/collaborations/investmentImg.png",
    description:
      "For individuals & organizations that seek to contribute in cash, assets, or in-kind to further our work and that of our beneficiaries.",
    buttonText: "Invest Now",
  },
  {
    id: 2,
    title: "Partnerships",
    image: "/assets/images/collaborations/partnershipsImg.png",
    description:
      "For individuals / organizations that are keen to partner with us to design or execute their own initiatives & schemes, or provide grants / resources to a wide range of beneficiaries.",
    buttonText: "Partner with us",
  },
];

const PartFlexCards = () => {
  return (
    <div className="bg-milk py-6 md:py-10">
      <div className="px-4 md:px-[4rem] lg:px-[7.6rem]">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-6">
          <H2>
            At the Skills Outside School Foundation, we offer two dynamic paths
            for collaboration:
          </H2>
        </div>

        {/* Collaboration Cards */}
        <div className="grid gap-10">
          {collaborationData.map((item) => (
            <div
              key={item.id}
              className="flex md:flex-row flex-col gap-10 items-center"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={330}
                height={330}
                className="w-full md:w-[330px] h-auto object-cover"
              />

              {/* Text Section */}
              <div className="max-w-lg flex flex-col gap-4">
                <p className="text-xl font-semibold font-mont">{item.title}</p>

                <span className="font-inter">{item.description}</span>

                <div>
                  <Button2 text={item.buttonText} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartFlexCards;
