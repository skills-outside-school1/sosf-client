import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Heading from "../headings/Case";

const VModal = ({ onClose }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });

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

  //function to close modal by clicking on the overlay
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleOverlay}
      className="w-full fixed bg-secondary_blue bg-opacity-15 flex flex-col justify-center items-center z-30 inset-0 top-0"
    >
      <div
        data-aos="flip-up"
        data-aos-easing="ease-in-out cubic"
        data-aos-duration="2000"
        className="modal-container-contents  p-3 flex flex-col justify-center items-center  relative  top-[4rem]  md:top-[3rem] shadow-2xl bg-white rounded-md w-full pr-2 pl-2  md:w-[800px] h-[500px] z-50"
      >
        <button
          onClick={onClose}
          className="flex justify-center items-center rounded-[50%] p-1  mr-5 font-bold text-xl font-passion text-black  pb-9"
        >
          close X
        </button>

        <section className=" hide-scrollbar grid grid-cols-1  gap-y-5 md:grid md:grid-cols-2 p-3 gap-x-5 justify-center items-center h-[500px] w-full overflow-y-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full pr-2 pl-2  bg-milk   h-[fixed] rounded-md p-2 flex flex-col gap-y-2 justify-start items-start shadow-2xl"
            >
              <Heading className="text-secondary_blue font-semibold text-3xl font-playfair text-left">
                {card.description}
              </Heading>
              <p className="text-blue font-sans text-xl text-left">
                {card.email}
              </p>
              <a href={`mailto:${card.email}`} className="w-[160px]">
                <button
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  data-aos-delay="200"
                  data-aos-mirror="true"
                  data-aos-easing="ease-in linear"
                  className="bg-blue flex justify-center items-center h-[50px] hover:bg-slate-500 text-white font-bold text-xl w-full"
                >
                  {card.button || "Connect"}
                </button>
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

const cards = [
  {
    description: "For Media Queries",
    email: "communications@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For Careers",
    email: "careers@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For Investment",
    email: "SOSFtrust@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For partnership, if you are an individual,",
    email: "indivinnovpartners@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For SOSF Headstart,",
    email: "headstart@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For lead4change,",
    email: "lead4change@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For SOSF Technology Grants,",
    email: "SOSFgrants-Tech@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For SOSF Research Grants,",
    email: "SOSFgrants-Research@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For SOSF Educational Institutions Grants,",
    email: "SOSFgrants-eduinst@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For SOSF Interventions Grants,",
    email: "SOSFgrants-interv@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For data queries,",
    email: "data.research@skillsoutsideschool.com",
    button: "",
  },
  {
    description:
      "For partnership, if you are a corporate (government, private entity or NGO),",
    email: "corpinnovpartners@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For SOSF Bridge",
    email: "bridge@skillsoutsideschool.com",
    button: "",
  },
  {
    description: "For Advocacy",
    email: "advocacy@skillsoutsideschool.com",
    button: "",
  },
];

export default VModal;
