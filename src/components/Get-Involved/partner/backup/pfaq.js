import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function PartnerFaq() {
  const accordions = [
    {
      question: "Question 1  for faq 1",
      answer: <p> answer 1</p>,
    },

    {
      question: "Question 1  for faq 1",
      answer: <p> answer 1</p>,
    },

    {
      question: "Question 1  for faq 1",
      answer: <p> answer 1</p>,
    },
    {
      question: "Question 1  for faq 1",
      answer: <p> answer 1</p>,
    },
    {
      question: "Question 1  for faq 1",
      answer: <p> answer 1</p>,
    },
  ];

  return (
    <div className="   w-full   h-[fixed]    px-2    flex flex-col gap-y-[15px] justify-center items-center  md:justify-start md:items-start      md:px-8 ">
      <h2
        className={`text-cyan text-3xl font-black font-lato  md:text-4xl mb-[30px]`}
      >
        FAQ
      </h2>
      {accordions.map((cards, index) => (
        <div
          key={index}
          className=" w-full h-[fixed]   justify-start items-start  lg:w-[800px]  "
        >
          <Accordion
            style={{
              borderRadius: "20px",
            }}
          >
            <AccordionSummary
              className="    md:text-xl  hover:transition-all hover:duration-1000 hover:ease-in-out   transition-all duration-1000 ease-in-out"
              expandIcon={
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="  text-secondary_blue   border border-black rounded-[50%] p-1 "
                />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className=" text-secondary_blue font-lato text-xl  font-black    md:text-2xl ">
                {cards.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-blue-950 font-sans  text-black text-opacity-90 text-xl  md:text-2xl ">
              <Typography>{cards.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
