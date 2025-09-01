import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { P } from "../Typography/typography";

export default function Profile({ data = [], className }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/leadership#executive-leadership"); // Navigate to the previous page with a hash
  };

  return (
    <div className="w-full pt-[5rem] md:mt-[7rem] pb-2 flex flex-col gap-y-5">
      <div className="router-button p-2 rounded-md flex justify-center items-center mr-auto ml-5">
        <button
          onClick={handleClick}
          className="text-gray-800 font-thin text-2xl"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-gray-800 text-3xl"
          />{" "}
          Go Back
        </button>
      </div>

      <section className="profiles-container w-full md:w-[1146px] md:ml-auto bg-gray-50 pb-5 pt-4 border-b-2 border-b-gray-300">
        <section className="profile-details-container flex flex-col gap-y-[8rem] justify-start items-start p-2 pb-4 pt-3 w-full">
          {data.map((profile, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-y-[4rem] justify-start items-start p-2"
            >
              <Image
                src={profile.picture}
                alt={profile.nomenclature}
                width={500}
                height={500}
                className="w-[500px] h-auto object-cover rounded-md"
              />
              <section className="name-social-icons-container flex flex-row gap-x-[3rem] justify-between items-start">
                <div className="name-container flex flex-col gap-y-2 justify-start items-start">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {profile.nomenclature}
                  </h2>
                  <h3 className="text-lg font-semibold text-gray-600">
                    {profile.profession}
                  </h3>
                </div>
                <div className="social-icons-container flex flex-row gap-x-2 justify-start items-center">
                  {profile.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-gray-600 text-2xl"
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </section>

              <P className="text-gray-800 font-normal lg:text-base md:w-[90%] text-justify">
                {profile.bio}
              </P>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
