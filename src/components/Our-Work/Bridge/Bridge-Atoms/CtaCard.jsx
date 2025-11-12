const CtaCard = ({ items, heading }) => {
  return (
    <div className="bg-white max-w-[470px] rounded-[20px] shadow-[0px_2px_3px_-1px_#b7c8f480] border-0 px-6 py-8 flex flex-col h-full">
      <h2 className="mb-8 text-xl font-semibold leading-6 text-black font-mont">
        {heading}
      </h2>

      <div className="flex flex-col flex-1 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center flex-1 ${
              index < items.length - 1 && "border-b border-[#d9d9d9] pb-3"
            }`}
          >
            <div className="flex items-start w-full gap-6">
              <div className="flex-shrink-0 w-5 h-5 bg-white border-2 border-[#4A7CFD] rounded-full" />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold leading-normal text-black font-mont">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-base font-normal leading-normal text-black font-inter">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CtaCard;
