"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Animate = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 900,
  className = "",
}) => {
  useEffect(() => {
    AOS.init({
      duration: duration,
      once: true,
    });
  }, []);

  return (
    <div data-aos={animation} data-aos-delay={delay} className={className}>
      {children}
    </div>
  );
};

export default Animate;
