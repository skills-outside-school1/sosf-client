const OverviewCard = ({ title, items, className = "", style }) => {
  return (
    <div
      className={`flex-1 min-w-[300px] max-w-[470px] bg-white rounded-[20px] shadow-[2px_3px_4px_-1px_#b7c8f480] ${className}`}
      style={style}
    >
      <div className="flex flex-col items-start gap-[26px] p-5">
        <h3 className="flex items-start justify-start self-stretch font-mont font-semibold text-black text-xl tracking-[0] leading-6">
          {title}
        </h3>

        <div className="flex flex-col items-start w-full gap-[12px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-full ${
                index < items.length - 1 && "border-b border-[#d9d9d9] pb-3"
              }`}
            >
              <div className="flex items-center w-full gap-4 p-4 rounded-[25px]">
                <div className="flex-shrink-0 w-5 h-5 bg-white border-2 border-[#4A7CFD] rounded-full" />
                <p className="font-inter font-medium text-lg text-black tracking-[0] leading-[normal]">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
