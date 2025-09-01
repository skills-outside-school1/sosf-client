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
import { P } from "../Atoms/Typography/typography";

export default function Accordion4({
  accordions = [],
  className = "",
  className1,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="     w-full  md:w-[91%] h-auto ml-auto flex flex-col justify-start items-start gap-y-2 px-2">
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          style={{
            backgroundColor: "#ebecee",
            width: "100%",
          }}
          className={`    ${expanded === `panel${index}` ? "" : ""}`}
        >
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon
                icon={expanded === `panel${index}` ? faMinus : faPlus}
                className="transition-transform duration-300 ease-in-out border border-gray-800 p-2 rounded-full"
              />
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className="group w-full"
          >
            <Typography
              className={` transform duration-700 ease-in-out font-mont group-hover:text-secondary_blue text-gray-800 text-3xl    ${
                expanded === `panel${index}` ? "scale-105" : ""
              }`}
              style={{
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              <div className="flex flex-row gap-x-8 justify-start items-center  w-full ">
                <div className="w-[50%] h-auto gap-x-1 grid grid-cols-2 gap-y-4  md:w-[300px]   md:flex  md:flex-row  md:gap-x-4">
                  {accordion.avatar &&
                    accordion.avatar.map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt={`${accordion.title || "Accordion avatar"} ${
                          i + 1
                        }`}
                        width={50}
                        height={50}
                        className="rounded-lg  object-contain w-[40px] h-[40px]   md:w-[50px] md:h-[50px]"
                      />
                    ))}
                </div>
                <div className="md:w-[300px]">{accordion.title}</div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                expanded === `panel${index}`
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.9, opacity: 0 }
              }
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-transparent w-full h-auto flex flex-col justify-start items-start"
            >
              <section
                className={`contents-container pb-[3rem] px-2 bg-[#ebecee] pt-5 w-full flex flex-row gap-x-8 justify-start items-start ${className}`}
              >
                <P className={` `}>{accordion.content}</P>
                {/* <div className="w-[50%] h-auto">
                  {accordion.image && (
                   <Image
                      src={accordion.image}
                      alt={accordion.title || "Accordion Image"}
                      width={1000}
                      height={1000}
                      className="rounded-lg shadow-xl object-fill contain-layout lg:h-[300px] lg:w-auto"
                    /> 
                  )}
                </div> */}
              </section>
            </motion.div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
