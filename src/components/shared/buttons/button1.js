// Button.js

import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={` border relative top-5  hover:text-black rounded-full p-3   flex justify-center items-center text-center font-sans font-black  text-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
