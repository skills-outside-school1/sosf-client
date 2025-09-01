// src/components/TypewriterText.jsx

import { P } from "@/components/shared/Atoms/Typography/typography";
import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText({ text }) {
  return (
    <p className="text-xs font-normal text-black">
      <Typewriter words={[text]} loop={1} cursor />
    </p>
  );
}
