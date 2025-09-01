import React, { useState } from "react";

function ContactNav({ setActiveComponent }) {
  const [active, setActive] = useState("contact");

  const btns = [
    {
      title: "Contact",
      component: "contact",
    },
    {
      title: "Volunteer",
      component: "volunteer",
    },
    {
      title: "Partner",
      component: "partner",
    },
    {
      title: "Invest",
      component: "invest",
    },
    {
      title: "Governance",
      component: "governance",
    },
  ];

  const handleClick = (component) => {
    setActiveComponent(component);
    setActive(component);
  };

  return (
    <div className="grid grid-cols-3   md:flex md:flex-col md:justify-start items-start px-2 gap-y-8 h-[fixed]">
      {btns.map((btn, index) => (
        <p
          onClick={() => handleClick(btn.component)}
          key={index}
          className={`bg-transparent text-black font-medium font-lato text-xl text-left hover-line ${
            active === btn.component ? "border-b-2 border-blue w-2/3" : ""
          }`}
        >
          {btn.title}
        </p>
      ))}
    </div>
  );
}

export default ContactNav;
