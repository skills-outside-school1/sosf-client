import React from "react";
import CountUp from "react-countup";

const ImpactMetrics = ({
  title,
  superTitle,
  subtitle,
  count,
  textColor,
  colorTitle,
}) => {
  return (
    <div className="md:p-6 py-4 font-medium text-left flex flex-col justify-start   items-start p-2  w-full">
      <div className="flex items-center justify-center">
        {subtitle && (
          <span
            className={`md:text-[50px] xl:text-[60px] text-4xl font-black font-bigshoulders ${textColor} mr-0`}
          >
            {subtitle}
          </span>
        )}
        <h2
          className={`md:text-[50px] xl:text-[60px] text-4xl font-black font-bigshoulders ${textColor}`}
        >
          <CountUp start={0} end={count} enableScrollSpy duration={2} />
        </h2>
        {superTitle && (
          <span
            className={`md:text-[50px] xl:text-[60px] text-4xl font-black font-bigshoulders ${textColor} ml-2`}
          >
            {superTitle}
          </span>
        )}
      </div>
      <p
        className={`mt-2 md:mt-4 ${colorTitle} md:text-lg text-sm text-left w-full md:w-full`}
      >
        {title}
      </p>
    </div>
  );
};

export default ImpactMetrics;
