// components/QuestionStep.jsx
import { motion } from "framer-motion";

export default function QuestionStep({ question, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full h-[150px] bg-primary_blue mb-4 flex flex-col justify-center items-center ">
        <h2 className="text-xl text-white text-center  font-mont font-bold mb-4">
          {question.text}
        </h2>
      </div>
      <div className="flex flex-col gap-y-4">
        {question.options.map((opt) => (
          <button
            key={opt.value}
            className="border border-blue font-inter text-lg  transition-transform  duration-700 ease-in-out  shadow-xl  rounded-md  px-4 py-2  hover:bg-blue text-black hover:text-white "
            onClick={() => onSelect(opt)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
