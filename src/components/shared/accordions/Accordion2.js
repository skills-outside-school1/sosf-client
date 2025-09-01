import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { motion } from "framer-motion";
import SubHero from "../Atoms/Subhero-Atoms/Subhero";

export default function Accordion2({ accordions = [], className = "" }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      className={`w-full h-auto ml-auto  flex flex-col justify-start items-start gap-y-2 `}
    >
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          style={{
            backgroundColor: "#ebecee",
          }}
        >
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon
                icon={expanded === `panel${index}` ? faMinus : faPlus}
                className="transition-transform duration-300 ease-in-out border border-gray-800 p-2 rounded-full "
              />
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className="group w-full"
          >
            <Typography
              className="group-hover:-translate-y-3 transition-transform duration-700 ease-in-out font-mont group-hover:text-secondary_blue
              text-gray-800 text-3xl"
              style={{
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              {accordion.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <motion.div
              key={expanded}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-transparent w-full h-auto flex flex-col justify-start items-start"
            >
              <section
                className={`contents-container h-[fixed] pb-[3rem] px-2 bg-[#ebecee]  pt-5 w-full flex  flex-col-reverse gap-y-4 md:flex-row gap-x-8 justify-start items-start text-base font-inter text-gray-800 font-medium ${className}`}
              >
                <p
                  className={` w-full  md:w-[50%] text-[#000000] font-normal md:leading-[35px]   font-inter text-base md:text-[18.56px]  text-left md:tracking-wide `}
                >
                  {accordion.content}
                </p>
                <div className=" w-full px-2  md:w-[50%] h-auto  ">
                  {accordion.image && (
                    <Image
                      src={accordion.image}
                      alt={accordion.title || "Accordion Image"}
                      width={1000}
                      height={1000}
                      className="rounded-lg shadow-xl  object-fill contain-layout  lg:h-[300px] lg:w-auto "
                    />
                  )}
                </div>
              </section>
            </motion.div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
