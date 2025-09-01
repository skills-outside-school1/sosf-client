import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label, Tooltip } from "recharts";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const CoreValueAccordionItem = ({ name, description, expanded, onChange }) => (
  <Accordion 
  style={{
    background: "transparent"
  }}
  expanded={expanded} onChange={onChange}>
    <AccordionSummary
      className=" hover:transition-all hover:ease-in-out hover:duration-1000 transition-all duration-1000 ease-in-out"
      expandIcon={
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-black p-2 transition-transform duration-300 ${expanded ? "rotate-160" : ""}`}
        />
      }
      aria-controls={`panel-${name}-content`}
      id={`panel-${name}-header`}
    >
      <Typography
        style={{
          fontSize: "30px",
          fontWeight: "700",
          fontFamily: "passion",
        }}
      >
        {name}
      </Typography>
    </AccordionSummary>
    <AccordionDetails className="text-black font-bold">
      <Typography>{description}</Typography>
    </AccordionDetails>
  </Accordion>
);

const PieAccordion = ({ data, colors, centerImageSrc }) => {
  const [selectedItem, setSelectedItem] = useState(data[0].name);

  const handleAccordionChange = (item) => {
    setSelectedItem((prevSelectedItem) => (prevSelectedItem === item ? "" : item));
  };

  const handlePieClick = (data) => {
    setSelectedItem(data.name);
  };

  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {data[index].name}
      </text>
    );
  };

  const CustomLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <foreignObject x={cx - 30} y={cy - 30} width="60" height="60">
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#fafafa",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={centerImageSrc}
            alt="center image"
            width={30}
            height={20}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
      </foreignObject>
    );
  };

  const activeSector = data.find((item) => item.name === selectedItem);

  return (
    <div className="flex flex-col-reverse  gap-8   h-[fixed] md:p-2 md:gap-6 md:flex md:flex-row-reverse md:pr-9 md:gap-2 w-full">
      <div className="w-full h-[fixed] md:w-[600px] md:h-[fixed] md:px-8">
        {data.map((item) => (
          <CoreValueAccordionItem
            key={item.name}
            name={item.name}
            description={item.description}
            expanded={selectedItem === item.name}
            onChange={() => handleAccordionChange(item.name)}
          />
        ))}
      </div>

      <div className="w-full h-[400px] md:w-[600px] md:h-[400px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%" borderRadius="50%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={180}
              fill=""
              dataKey="value"
              onMouseEnter={handlePieClick}
              labelLine={false}
              label={renderLabel}
              
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                  stroke={selectedItem === entry.name ? "indigo" : ""}
                  strokeWidth={selectedItem === entry.name ? "4" : ""}
                />
              ))}
              <Label content={<CustomLabel viewBox={{ cx: "50%", cy: "50%" }} />} position="center" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieAccordion;
