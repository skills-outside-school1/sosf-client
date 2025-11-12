
export const TestimonialsCard = ({ heading, items, buttonText }) => {
  return (
    <div className="rounded-[25px] p-6 flex flex-col gap-6 w-full max-w-[495px]">
      <h2 className="text-xl font-semibold text-center text-black font-mont">
        {heading}
      </h2>

      <div className="flex flex-col gap-6 mt-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start w-full gap-5">
            <div className="flex-shrink-0 w-5 h-5 border-2 border-[#4A7CFD] rounded-full mt-1" />
            <p className="flex-1 text-base font-normal leading-normal text-black font-inter">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {buttonText && (
        <button className="w-full h-auto bg-[#b7c8f4] hover:bg-[#a5b8e8] text-black rounded-[20px] p-2.5 transition-colors mt-4">
          <span className="text-base font-normal leading-7 font-mont">
            {buttonText}
          </span>
        </button>
      )}
    </div>
  );
};
