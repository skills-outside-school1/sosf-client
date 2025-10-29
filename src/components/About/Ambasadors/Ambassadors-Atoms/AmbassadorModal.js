import React from "react";
import { X, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function AmbassadorModal({ ambassador, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl py-10 px-6 md:px-10 max-w-4xl w-[95%] md:w-[60%] lg:w-[45%] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute p-2 bg-gray-200 rounded-full top-4 right-4 hover:bg-gray-300"
        >
          <X size={18} color="black" />
        </button>

        {/* Grid Container */}
        <div className="grid items-center justify-center grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left">
          {/* Image Section */}
          <div className="flex justify-center md:justify-center">
            <img
              src={ambassador.image}
              alt={ambassador.name}
              className="rounded-xl w-[240px] h-[240px] md:w-[260px] md:h-[260px] object-cover border-4 border-[#B7C8F4]"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center justify-center space-y-4 md:items-start">
            <h2 className="text-2xl font-bold text-gray-900 font-mont">
              {ambassador.name}
            </h2>
            <p className="text-sm text-gray-600 font-inter">{ambassador.title}</p>
            <p className="text-sm font-medium leading-relaxed text-gray-800 font-inter max-w-[90%] md:max-w-full">
              {ambassador.bio}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 pt-2 md:justify-start">
              <a href={ambassador.social.facebook} aria-label="Facebook">
                <Facebook color="black" />
              </a>
              <a href={ambassador.social.twitter} aria-label="Twitter">
                <Twitter color="black" />
              </a>
              <a href={ambassador.social.instagram} aria-label="Instagram">
                <Instagram color="black" />
              </a>
              <a href={ambassador.social.linkedin} aria-label="LinkedIn">
                <Linkedin color="black" />
              </a>
              <a href={ambassador.social.email} aria-label="Email">
                <Mail color="black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
