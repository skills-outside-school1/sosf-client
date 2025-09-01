import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { H3 } from "@/components/shared/Atoms/Typography/typography";

export default function PathStepper({
  data,
  allPaths,
  onSelectPath,
  currentPath,
  image,
}) {
  const sections = data.sections;
  const [sectionIndex, setSectionIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  const currentSection = sections[sectionIndex];

  useEffect(() => {
    if (lineIndex < currentSection.lines.length - 1) {
      const timer = setTimeout(() => {
        setLineIndex(lineIndex + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [lineIndex, currentSection]);

  const handleManualNext = () => {
    if (lineIndex < currentSection.lines.length - 1) {
      setLineIndex(lineIndex + 1);
    } else if (sectionIndex < sections.length - 1) {
      setSectionIndex(sectionIndex + 1);
      setLineIndex(0);
    }
  };

  const handleManualPrev = () => {
    if (lineIndex > 0) {
      setLineIndex(lineIndex - 1);
    } else if (sectionIndex > 0) {
      const prevSection = sections[sectionIndex - 1];
      setSectionIndex(sectionIndex - 1);
      setLineIndex(prevSection.lines.length - 1);
    }
  };

  return (
    <div className="space-y-6">
      <img src={image} alt="" className="w-40 mx-auto" />

      <H3 className="text-xl font-bold">{currentSection.heading}</H3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        {currentSection.lines.slice(0, lineIndex + 1).map((line, idx) => {
          // Simple check: if the line contains 'http' assume it’s a URL to wrap in <a>
          const isLink = line.includes("http");
          return (
            <p key={idx} className="text-sm font-inter text-black">
              <Typewriter
                words={[
                  isLink
                    ? "" // we will show the clickable link instead of typewriter for full link lines
                    : line,
                ]}
                loop={1}
                cursor={false}
              />
              {isLink && (
                <a
                  href={line.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {line.trim()}
                </a>
              )}
            </p>
          );
        })}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleManualPrev}
          disabled={sectionIndex === 0 && lineIndex === 0}
          className={`px-4 py-2 rounded ${
            sectionIndex === 0 && lineIndex === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-500 text-white"
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleManualNext}
          disabled={
            sectionIndex === sections.length - 1 &&
            lineIndex === currentSection.lines.length - 1
          }
          className={`px-4 py-2 rounded ${
            sectionIndex === sections.length - 1 &&
            lineIndex === currentSection.lines.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue text-white"
          }`}
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
        {Object.keys(allPaths).map((key) => (
          <button
            key={key}
            onClick={() => onSelectPath(key)}
            className={`py-2 px-4 rounded ${
              key === currentPath
                ? "bg-blue text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}
