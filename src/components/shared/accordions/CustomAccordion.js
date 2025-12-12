import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/**
 * Props:
 * - accordionData: Array<{ accordionTitle: string | React.ReactNode, accordionContent: React.ReactNode }>
 * - defaultExpandedIndex?: number (default: 0)
 * - allowMultiple?: boolean (default: false)
 * - containerClassName?: string
 * - itemClassName?: string
 */
export default function CustomAccordion({
  accordionData = [],
  defaultExpandedIndex = 0,
  allowMultiple = false,
  containerClassName = "",
  itemClassName = "",
}) {
  // Exclusive mode (only one open)
  const [expandedIndex, setExpandedIndex] = React.useState(
    allowMultiple ? null : defaultExpandedIndex
  );

  // Multi-open mode (many can be open)
  const [expandedMap, setExpandedMap] = React.useState(() => {
    if (!allowMultiple) return {};
    const init = {};
    if (defaultExpandedIndex != null) init[defaultExpandedIndex] = true;
    return init;
  });

  const handleChange = (index) => (_, isExpanded) => {
    if (allowMultiple) {
      setExpandedMap((prev) => ({ ...prev, [index]: isExpanded }));
    } else {
      setExpandedIndex(isExpanded ? index : false);
    }
  };

  return (
    <div className={`w-full space-y-3 ${containerClassName}`}>
      {accordionData.map((item, index) => {
        const isExpanded = allowMultiple
          ? !!expandedMap[index]
          : expandedIndex === index;

        return (
          <Accordion
            key={index}
            expanded={isExpanded}
            onChange={handleChange(index)}
            disableGutters
            elevation={0}
            className={`!border-b !border-[#D9D9D9] !bg-white !shadow-none overflow-hidden ${itemClassName}`}
          >
            <AccordionSummary
              expandIcon={
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-black transition-transform duration-300 ease-in-out ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              }
              className="!min-h-[56px] !px-5 !py-3"
              classes={{
                content: "my-0",
                expandIconWrapper: "!transform-none", // disables MUI's default rotation
              }}
            >
              <div className="w-full flex items-center justify-between">
                <div className="text-gray-700  font-normal  font-mont  text-lg">
                  {item.accordionTitle}
                </div>
              </div>
            </AccordionSummary>

            <AccordionDetails className="!px-5 !pb-5 !pt-0">
              <div className="text-gray-700 font-inter font-normal  text-base leading-relaxed">
                {item.accordionContent}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
