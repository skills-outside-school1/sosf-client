import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AccordionComponent({
  accordions = [],
  className = "",
  textStyle = "",
  className3 = "",
  imageStyle,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={`w-full h-auto  md:hidden lg:hidden `}>
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon
                icon={faChevronDown}
                className={` transition-transform duration-700 ease-in-out   relative left-8${
                  expanded === `panel${index}` ? "rotate-180" : "rotate-0"
                }`}
              />
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className="group w-full "
          >
            <Typography
              className="group-hover:-translate-y-3 transition-transform duration-700 ease-in-out font-mont group-hover:text-secondary_blue
              text-gray-800 text-3xl"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
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
                className={`contents-container h-[290px] px-2 bg-secondary_blue mt-2 pt-5 w-full flex  flex-col justify-start items-start text-base font-inter text-gray-800 font-medium ${className}`}
              >
                {accordion.content}
              </section>
              {accordion.image && (
                <section className="image-container w-full mx-auto flex h-[200px] relative bottom-[2rem]">
                  <Image
                    src={accordion.image}
                    alt={accordion.title || "Accordion Image"}
                    layout="fill"
                    className="rounded-md"
                    style={{
                      objectFit: "cover",
                      ...imageStyle,
                    }}
                  />
                </section>
              )}
            </motion.div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
