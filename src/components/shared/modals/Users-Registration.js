import React from "react";

export default function UserRegistrationModal({ onClose }) {
  return (
    <div
      className="w-full  h-full   fixed inset-0 flex flex-col justify-center items-center   bg-[#000000] bg-opacity-40  z-50"
      role="modal"
      aria-modal="true"
      onClick={onClose}
    >
      <div className=" modal-container  relative   top-[50%] bg-white w-[800px] h-[400px] flex flex-col gap-y-7 justify-start items-start p-2 "></div>
    </div>
  );
}
