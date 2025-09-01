import React, { useState, useRef, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const SearchBar = ({ onSearch, onClose }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    onSearch(query);
  };

  const [isClosing, setIsClosing] = useState(false);

  const contentRef = useRef(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 1000); // Match the duration of the closing animation
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const closeOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    } else {
      return null;
    }
  };

  return (
    <div
      className={`search-modal w-full inset-0 flex flex-col justify-start items-start z-50 fixed bg-black bg-opacity-70 `}
      onClick={closeOutside}
    >
      <div
        onClick={closeOutside}
        className="bg-transparent bg-opacity-40 rounded-md w-full h-[500px] p-2 flex flex-col justify-center items-center md:w-[700px] md:mx-auto relative"
      >
        <section className="py-4 p-2 flex flex-col justify-center items-center w-full h-auto">
          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-y-[30px] justify-center items-center mx-auto"
          >
            <input
              data-aos="fade-down"
              data-aos-easing="ease-in linear "
              data-aos-duration="2500"
              data-aos-delay="100"
              type="search"
              placeholder="enter search keyword"
              className="focus:outline-none bg-white text-gray  rounded-xl  font-semibold text-sm px-2 border-t-r-rounded-[23%] border-b-l-rounded-[25%] w-[330px] h-[60px]  md:w-[800px] flex justify-center items-center"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-blue text-white rounded"
            >
              Search
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
export default SearchBar;
