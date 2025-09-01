import React from "react";
import Transition from "@/components/shared/Atoms/Text-Transitions/Transition";

export default function TextTransition() {
  const phrases = ["Hello, World!", "Welcome to React", "Framer Motion is awesome"];

  return (
    <div  className="">
      {/* Pass the array of phrases to the Transition component */}
      <Transition texts={phrases} interval={3000} className="text-4xl font-bold text-black " />
    </div>
  );
}
