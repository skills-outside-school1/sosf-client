import React, { useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";
// import Colums from "../../assets/images/icons/objects-column-svgrepo-com.svg";

const AccordionContainer = styled("div")({
  width: "100%",
});

const CustomAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const CustomAccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIconPosition="right"
    expandIcon={
      <FontAwesomeIcon
        icon={faChevronRight}
        className="p-2 text-black font-bold"
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#d3d3d3" : "#d3d3d3",
  flexDirection: "row",
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const CustomAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Disclosure as="nav" className="p-7 bg-grey bg-opacity-10 hidden lg:flex  lg:flex-col h-[fixed] w-[50px] sticky top-[4rem] z-10 ">
      {({ open }) => (
        <>
          <div className="container mx-auto flex items-center justify-between">
          

            <div className="hidden lg:flex ">
              <Disclosure.Button
                className="text-pink border-2 border-blue p-2 rounded-[50%]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Transition
            show={menuOpen}
            as={Fragment}
            enter="transition duration-300 ease-in-out transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition duration-200 ease-in-out transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Disclosure.Panel className="hidden  lg:flex bg-grey    inset-0  w-[310px]  fixed flex flex-col top-[12rem] h-[400px]">
              <div className="flex flex-col space-y-4 p-4 pt-16 justify-start items-start gap-6 text-sm">
                <div className="hidden lg:flex lg:flex-col lg:gap-5 lg:w-[290px] lg:px-4 lg:h-[300px] overflow-y-auto">
                  <section className="header-section flex flex-col w-[225px] h-[70px] bg-white border border-black justify-start items-start px-2">
                    <h1 className="text-xl font-bold font-sans text-center">
                      GET INVOLVED TODAY!
                    </h1>
                  </section>

                  <AccordionContainer className="hidden lg:flex lg:flex-col gap-3  ">
                    <CustomAccordion
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <CustomAccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <Image
                          src="/assets/images/icons/objects-column-svgrepo-com.svg"
                          alt="bojectscolumn"
                          width={19}
                          height={19}
                        />
                        <Typography className="text-black font-bold font-passion text-2xl text-center px-4">
                          Our Data
                        </Typography>
                      </CustomAccordionSummary>
                      <CustomAccordionDetails className="bg-grey">
                        <Typography>
                          <div className="links-container flex flex-col gap-2 justify-start items-start p-2">
                            <ul className="text-base flex flex-col gap-4 font-bold font-passion text-black">
                              <li className="space-x-2">
                                <Link href="/">End to End Evaluation</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Thought Leadership</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Advocacy</Link>
                              </li>
                            </ul>
                          </div>
                        </Typography>
                      </CustomAccordionDetails>
                    </CustomAccordion>

                    <CustomAccordion
                      expanded={expanded === "panel2"}
                      onChange={handleChange("panel2")}
                    >
                      <CustomAccordionSummary
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                      >
                        <Image
                          src={Colums}
                          alt="bojectscolumn"
                          width={19}
                          height={19}
                        />
                        <Typography className="text-black font-bold font-passion text-2xl text-center px-4">
                          Our Intervention
                        </Typography>
                      </CustomAccordionSummary>
                      <CustomAccordionDetails className="bg-grey">
                        <Typography>
                          <div className="links-container flex flex-col gap-2 justify-start items-start p-2">
                            <ul className="text-base flex flex-col gap-4 font-bold font-passion text-black">
                              <li className="space-x-2">
                                <Link href="/">Bridge</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Headstart</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Lead4Change</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Scale Up</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Partnerships</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Grants</Link>
                              </li>
                            </ul>
                          </div>
                        </Typography>
                      </CustomAccordionDetails>
                    </CustomAccordion>

                    <CustomAccordion
                      expanded={expanded === "panel3"}
                      onChange={handleChange("panel3")}
                    >
                      <CustomAccordionSummary
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                      >
                        <Image
                          src={Colums}
                          alt="bojectscolumn"
                          width={19}
                          height={19}
                        />
                        <Typography className="text-black font-bold font-passion text-2xl text-center px-4">
                          Our Advocacy
                        </Typography>
                      </CustomAccordionSummary>
                      <CustomAccordionDetails className="bg-grey">
                        <Typography>
                          <div className="links-container flex flex-col gap-2 justify-start items-start p-2">
                            <ul className="text-base flex flex-col gap-4 font-bold font-passion text-black">
                              <li className="space-x-2">
                                <Link href="/">Ambassadors</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Volunteering</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Stakeholders</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Mainstreaming</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Awareness</Link>
                              </li>
                              <li className="space-x-2">
                                <Link href="/">Policy</Link>
                              </li>
                            </ul>
                          </div>
                        </Typography>
                      </CustomAccordionDetails>
                    </CustomAccordion>
                  </AccordionContainer>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
