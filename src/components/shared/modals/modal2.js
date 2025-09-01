import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";
import Button from "@/components/shared/buttons/button1";

const CookiesSettings = ({ onClose }) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const initialItems = [
    {
      text: "Privacy Overview",
      description: (
        <p className="text-sm font-inter font-normal text-gray-800">
          This website uses cookies so that we can provide you with the best
          user experience possible. Cookie information is stored in your browser
          and performs functions such as recognising you when you return to our
          website and helping our team to understand which sections of the
          website you find most interesting and useful.
          <br />
          <br />
          Strictly Necessary Cookies should be enabled at all times so that we
          can save your preferences for cookie settings.
        </p>
      ),
      isChecked: true,
    },
    {
      icon: <FaCheckCircle />,
      text: "Strictly Necessary Cookies",
      description: (
        <p className="text-sm font-inter font-normal text-gray-800">
          Strictly Necessary Cookies should be enabled at all times so that we
          can save your preferences for cookie settings.
        </p>
      ),
      isChecked: false,
    },
    {
      icon: <FaCheckCircle />,
      text: "Functional Cookies",
      description: (
        <p className="text-sm font-inter font-normal text-gray-800">
          Functional cookies remember choices you make (such as your language
          preferences) and provide enhanced, personalized features. These
          cookies can also be used to remember changes you’ve made to text size,
          fonts, and other customizable parts of the website.
        </p>
      ),
      isChecked: false,
    },
    {
      icon: <FaCheckCircle />,
      text: "Performance Cookies",
      description: (
        <p className="text-sm font-inter font-normal text-gray-800">
          These cookies help us understand how visitors interact with the site
          by collecting and reporting information anonymously. This allows us to
          analyze usage patterns and improve the overall performance and
          functionality of the site.
        </p>
      ),
      isChecked: false,
    },
    {
      icon: <FaCheckCircle />,
      text: "Third-Party Cookies",
      description: (
        <p className="text-sm font-inter font-normal text-gray-800">
          This website uses Google Analytics to collect anonymous information
          such as the number of visitors to the site, and the most popular
          pages. Enabling these cookies helps us to improve our website.
        </p>
      ),
      isChecked: false,
    },
  ];

  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const savedPreferences = JSON.parse(
      localStorage.getItem("cookiePreferences")
    );
    if (savedPreferences) {
      // Reassign the description when restoring saved preferences
      const newItems = initialItems.map((item) => {
        const savedItem = savedPreferences.find(
          (saved) => saved.text === item.text
        );
        return savedItem ? { ...item, isChecked: savedItem.isChecked } : item;
      });
      setItems(newItems);
    }
  }, []);

  const toggleItem = (index) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, isChecked: !item.isChecked } : item
    );
    setItems(newItems);
  };

  const toggleAll = () => {
    const allChecked = items.every((item) => item.isChecked);
    const newItems = items.map((item) => ({ ...item, isChecked: !allChecked }));
    setItems(newItems);
  };

  const saveSettings = () => {
    // Save only the necessary data (without JSX descriptions)
    const settingsToSave = items.map(({ text, isChecked }) => ({
      text,
      isChecked,
    }));
    localStorage.setItem("cookiePreferences", JSON.stringify(settingsToSave));
    onClose();
  };

  return (
    <div
      data-aos="flip-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out cubic"
      className="fixed inset-0 z-50 bg-white mt-[10%] mx-4  p-3 pb-[4rem] flex flex-col justify-start items-center h-[500px] md:h-[400px]  md:w-[1000px] md:mx-auto rounded-md md:shadow-current md:shadow-sm"
    >
      <button className="ml-auto text-3xl text-gray-800 px-4" onClick={onClose}>
        X
      </button>
      <section className="settings-class-list flex flex-col gap-4 w-full h-[300px] p-3 justify-start items-center overflow-y-auto ">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-md w-full p-2 flex flex-row justify-between items-center gap-2 md:w-[800px] "
          >
            <div className="flex items-start gap-2">
              {item.icon}
              <section className="flex flex-col gap-y-3 justify-start items-start ">
                <span className="text-gray-800 font-mont font-bold  text-base  md:text-xl ">
                  {item.text}
                </span>
                <span className="text-gray-500  w-[90%]">
                  {item.description}
                </span>
              </section>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={item.isChecked}
                onChange={() => toggleItem(index)}
              />
              <div className="w-11 h-6 bg-secondary_blue rounded-full border-2 border-gray-200 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition duration-200"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white shadow-md w-5 h-5 rounded-full transition ${
                  item.isChecked ? "transform translate-x-5" : ""
                }`}
              ></div>
            </label>
          </div>
        ))}
      </section>

      <section className="buttons-settings-list mt-4 flex gap-4 md:mr-auto  md:px-[5rem]">
        <Button
          className={`hover:text-gray-800  border-secondary_blue  hover:bg-secondary_blue text-gray-800     font-inter font-normal  `}
          onClick={toggleAll}
        >
          Accept All
        </Button>
        <Button
          className={`hover:text-gray-800  border-secondary_blue  hover:bg-secondary_blue text-gray-800     font-inter font-normal `}
          onClick={saveSettings}
        >
          Save Settings
        </Button>
      </section>
    </div>
  );
};

export default CookiesSettings;
