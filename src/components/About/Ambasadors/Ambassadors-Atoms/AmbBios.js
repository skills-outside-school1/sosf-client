import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { P } from "@/components/shared/Atoms/Typography/typography";

export default function AmbBios() {
  const team_bios = [
    {
      image:
        "https://teachforall.org/sites/default/files/styles/person_thumbnail/public/2024-03/karin_ariane.png?h=8ba16c07&itok=rxRyjurU",
      name: "John Doe",
      position: "CEO",
      biodata: <span classname=""></span>,

      description: (
        <span classname=" ">
          4. Social Change Projects: Our beneficiaries have deployed meaningful
          businesses and social change projects including Online platform with
          Q&A for senior secondary students on difficult subjects, Abuja
          Entertainment Hub, an FCT events planning platform, Silent Stars that
          supports youths with hearing disabilities with sign language training,
          public speaking and confidence skills training for youth church
          members, member of the ECOWAS youth parliament, Shea butter export
          business to Germany and the US.
        </span>
      ),
      socialLinks: [
        { icon: faXTwitter, url: "https://twitter.com/johndoe" },
        { icon: faLinkedin, url: "https://linkedin.com/in/johndoe" },
        { icon: faInstagram, url: "https://instagram.com/johndoe" },
        { icon: faFacebook, url: "https://facebook.com/johndoe" },
      ],
    },
    {
      image:
        "https://teachforall.org/sites/default/files/styles/person_thumbnail/public/2024-03/sama_al_lakoud_1.png?h=8ba16c07&itok=sEZ0TuvH",
      name: "Jane Smith",
      position: "CTO",
      biodata: <span classname=""></span>,

      description: (
        <span classname=" ">
          4. Social Change Projects: Our beneficiaries have deployed meaningful
          businesses and social change projects including Online platform with
          Q&A for senior secondary students on difficult subjects, Abuja
          Entertainment Hub, an FCT events planning platform, Silent Stars that
          supports youths with hearing disabilities with sign language training,
          public speaking and confidence skills training for youth church
          members, member of the ECOWAS youth parliament, Shea butter export
          business to Germany and the US.
        </span>
      ),
      socialLinks: [
        { icon: faXTwitter, url: "https://twitter.com/johndoe" },
        { icon: faLinkedin, url: "https://linkedin.com/in/johndoe" },
        { icon: faInstagram, url: "https://instagram.com/johndoe" },
        { icon: faFacebook, url: "https://facebook.com/johndoe" },
      ],
    },
    {
      image:
        "https://teachforall.org/sites/default/files/styles/person_thumbnail/public/2024-03/aurora_delgado_-_photo_1.jpg?h=8ba16c07&itok=rmEIhcRo",
      name: "Alice Johnson",
      position: "COO",
      biodata: <span classname=""></span>,

      description: (
        <span classname=" ">
          4. Social Change Projects: Our beneficiaries have deployed meaningful
          businesses and social change projects including Online platform with
          Q&A for senior secondary students on difficult subjects, Abuja
          Entertainment Hub, an FCT events planning platform, Silent Stars that
          supports youths with hearing disabilities with sign language training,
          public speaking and confidence skills training for youth church
          members, member of the ECOWAS youth parliament, Shea butter export
          business to Germany and the US.
        </span>
      ),
      socialLinks: [
        { icon: faXTwitter, url: "https://twitter.com/johndoe" },
        { icon: faLinkedin, url: "https://linkedin.com/in/johndoe" },
        { icon: faInstagram, url: "https://instagram.com/johndoe" },
        { icon: faFacebook, url: "https://facebook.com/johndoe" },
      ],
    },

    {
      image:
        "https://teachforall.org/sites/default/files/styles/person_thumbnail/public/2024-03/naseer.jpg?h=26188ce4&itok=q7D1xNd6",
      name: "John Doe",
      position: "CEO",
      biodata: <span classname=""></span>,

      description: (
        <span classname=" ">
          4. Social Change Projects: Our beneficiaries have deployed meaningful
          businesses and social change projects including Online platform with
          Q&A for senior secondary students on difficult subjects, Abuja
          Entertainment Hub, an FCT events planning platform, Silent Stars that
          supports youths with hearing disabilities with sign language training,
          public speaking and confidence skills training for youth church
          members, member of the ECOWAS youth parliament, Shea butter export
          business to Germany and the US.
        </span>
      ),
      socialLinks: [
        { icon: faXTwitter, url: "https://twitter.com/johndoe" },
        { icon: faLinkedin, url: "https://linkedin.com/in/johndoe" },
        { icon: faInstagram, url: "https://instagram.com/johndoe" },
        { icon: faFacebook, url: "https://facebook.com/johndoe" },
      ],
    },
    {
      image:
        "https://teachforall.org/sites/default/files/styles/person_thumbnail/public/2024-03/manvel.jpg?h=8ba16c07&itok=bhXQAOI4",
      name: "Jane Smith",
      position: "CTO",
      biodata: <span classname=""></span>,

      description: (
        <span classname=" ">
          4. Social Change Projects: Our beneficiaries have deployed meaningful
          businesses and social change projects including Online platform with
          Q&A for senior secondary students on difficult subjects, Abuja
          Entertainment Hub, an FCT events planning platform, Silent Stars that
          supports youths with hearing disabilities with sign language training,
          public speaking and confidence skills training for youth church
          members, member of the ECOWAS youth parliament, Shea butter export
          business to Germany and the US.
        </span>
      ),
      socialLinks: [
        { icon: faXTwitter, url: "https://twitter.com/johndoe" },
        { icon: faLinkedin, url: "https://linkedin.com/in/johndoe" },
        { icon: faInstagram, url: "https://instagram.com/johndoe" },
        { icon: faFacebook, url: "https://facebook.com/johndoe" },
      ],
    },
    {
      image:
        "https://teachforall.org/sites/default/files/styles/person_thumbnail/public/2024-03/lilit_n.jpg?h=8ba16c07&itok=8yROvyR8",
      name: "Alice Johnson",
      position: "COO",
      biodata: <span classname=""></span>,

      description: (
        <span classname=" ">
          4. Social Change Projects: Our beneficiaries have deployed meaningful
          businesses and social change projects including Online platform with
          Q&A for senior secondary students on difficult subjects, Abuja
          Entertainment Hub, an FCT events planning platform, Silent Stars that
          supports youths with hearing disabilities with sign language training,
          public speaking and confidence skills training for youth church
          members, member of the ECOWAS youth parliament, Shea butter export
          business to Germany and the US.
        </span>
      ),
      socialLinks: [
        { icon: faXTwitter, url: "https://twitter.com/johndoe" },
        { icon: faLinkedin, url: "https://linkedin.com/in/johndoe" },
        { icon: faInstagram, url: "https://instagram.com/johndoe" },
        { icon: faFacebook, url: "https://facebook.com/johndoe" },
      ],
    },
    // Additional team members
  ];

  // State for the modal ad loading
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Close modal function
  const closeModal = () => setSelectedTeamMember(null);

  useEffect(() => {
    if (selectedTeamMember) {
      document.body.style.overflow = "hidden";

      // Simulate loading for 5 seconds
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      // Clear timer on cleanup
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedTeamMember]);

  return (
    <div className="w-full h-[fixed] flex flex-col lg:flex-row gap-y-8  gap-x-4 justify-start items-start bg-secondary_blue bg-opacity-70 pb-8  lg:pt-8 ">
      <section className="title-container  w-full lg:w-[500px]   lg:px-[7rem]   ">
        <h3 className="text-gray-800 font-mont text-2xl lg:text-3xl font-bold text-center lg:text-left ">
          Showcasing Our Ambassadors
        </h3>
      </section>

      <section className="ambassadors-bio-container h-[fixed]    w-full  md:w-[800px] ml-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-8 gap-x-3 justify-center items-center px-2  pt-2  ">
        {" "}
        {team_bios.map((team, index) => (
          <div
            onClick={() => setSelectedTeamMember(team)}
            key={index}
            className={` mx-auto   w-[340px] h-[500px]   lg:w-[240px] lg:h-[370px] flex flex-col bg-gray-100 rounded-md gap-y-5 justify-start items-start p-2 shadow-xl cursor-pointer  group  overflow-hidden `}
          >
            <Image
              src={team.image}
              alt={team.name}
              width={400}
              height={400}
              className="      h-[350px]  lg:h-[250px] w-full object-cover rounded-b-md rounded-t-md group-hover:scale-110 transform ease-in-out duration-1000 "
            />
            <h4 className="text-gray-800 font-mont font-bold md:text-base text-sm">
              {team.name}
            </h4>
            <P className=" text-sm md:text-base">{team.position}</P>
          </div>
        ))}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedTeamMember && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 60 }}
          >
            <motion.div
              className="bg-white   w-full px-2 z-50    h-[700px] pb-8   top-[2rem]   md:h-[600px] overflow-y-auto  relative  lg:top-[4rem] inset-0 lg:w-[800px] lg:ml-auto shadow-lg p-6 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="relative top-5 left-3 ml-[80%] border-2  mb-4   text-gray-800 font-bold  text-5xl lg:mb-[4rem]  mt-5 "
              >
                &times;
              </button>
              <div className="  grid grid-cols-1    md:grid-cols-2 items-start justify-start  gap-y-4 w-full  h-[600px]  hide-scrollbar ">
                <section className="member-profile-image-container    w-[170px]   h-[190px] lg:h-[320px]  rounded-[50%] border-2 border-secondary_blue  shadow-2xl  lg:w-[300px] p-2  flex justify-center items-center    ">
                  {isLoading ? (
                    <FadeLoader
                      color="black"
                      className="justify-center items-center flex flex-col "
                    />
                  ) : (
                    <Image
                      src={selectedTeamMember.image}
                      alt={selectedTeamMember.name}
                      width={600}
                      height={600}
                      className="w-[170px]   h-[160px] lg:w-[300px] lg:h-[300px] object-cover rounded-[50%] "
                    />
                  )}
                  <section
                    classname="social-links-container  absolute top-0 left-0 right-0  group-hover:cursor-pointer
                   group-hover:w-[300px] group-hover:h-[300px]   opacity-0  transfrom duration-700 ease-in-out -translate-y-0   group-hover:translate-y-full group-hover:transform group-hover:ease-in-out group-hover:opacity-100 group-hover:bg-secondary_blue "
                  ></section>
                </section>

                <section className="memebrs-bios-data-container  w-full  h-full   lg:h-[fixed]  flex flex-col  gap-y-4  justify-start items-start p-2 ">
                  <h4 className="text-gray-800 font-mont font-black md:text-2xl text-base">
                    {selectedTeamMember.name}
                  </h4>
                  <p className="text-gray-800 font-inter text-sm md:text-base">
                    {selectedTeamMember.position}
                  </p>
                  <p className="text-gray-800 font-inter text-sm md:text-base">
                    {selectedTeamMember.description}
                  </p>

                  <div className="social-icons-container flex gap-4 mt-4">
                    {selectedTeamMember.socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-secondary_blue transition duration-300"
                      >
                        <FontAwesomeIcon
                          icon={social.icon}
                          classname="text-base  border-2 border-x-secondary_blue p-2 rounded-full "
                        />
                      </a>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
