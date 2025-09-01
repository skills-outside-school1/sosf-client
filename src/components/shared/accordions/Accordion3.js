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
import { P } from "../Atoms/Typography/typography";

export default function Accordion3({
  accordions = [],
  className = "",
  contentClass,
  imageClass,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-full h-auto ml-auto flex flex-col justify-start items-start gap-y-2">
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          style={{
            backgroundColor: "#ebecee",
            width: "100%",
          }}
          className={`hover:border-l-8 hover:border-l-secondary_blue hover:transition-transform hover:duration-1000 hover:ease-in-out transition-transform duration-1000 ease-in-out ${
            expanded === `panel${index}`
              ? "border-l-8 border-l-secondary_blue"
              : ""
          }`}
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
              className={`group-hover:-translate-y-3 transition-transform duration-700 ease-in-out font-mont group-hover:text-secondary_blue text-gray-800 text-3xl    ${
                expanded === `panel${index}` ? "text-secondary_blue" : ""
              }`}
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
                className={`contents-container pb-[3rem] px-2 bg-[#ebecee] pt-5 w-full flex  flex-col-reverse   md:flex-row gap-x-8 justify-start items-start text-base font-inter text-gray-800 font-medium ${className}`}
              >
                <P className={`  w-full md:w-[50%]  ${contentClass} `}>
                  {accordion.content}
                </P>
                <div className=" w-full  pb-5 md:w-[50%] h-auto">
                  {accordion.image && (
                    <Image
                      src={accordion.image}
                      alt={accordion.title || "Accordion Image"}
                      width={1000}
                      height={1000}
                      className={`rounded-lg shadow-xl object-fill contain-layout lg:h-[300px] lg:w-auto ${imageClass}`}
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
