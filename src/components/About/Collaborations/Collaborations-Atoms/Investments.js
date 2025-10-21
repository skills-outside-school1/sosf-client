import React from "react";

const Investments = () => {
  return (
    <div className="py-8 md:py-10">
      <div className="px-4 md:px-[3rem] lg:px-[7.6rem]">
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div>
            <p className=" font-semibold text-xl font-mont mb-2">Investment</p>
            <span className="font-inter leading-7">
              We at SOSF recognize that Investments play a crucial role in
              enhancing our reach, effectiveness, and impact. Investments can be
              from individuals, private & public sector; and other NGOs to
              support SOSF interventions linked to SDG goals 1,2,4,5,8,9,10,13,
              17; and in various as shown:
            </span>
            <p className=" font-semibold font-inter my-4">
              Investments can be:
            </p>
            <div>
              <div className="flex gap-4 items-center">
                <p>
                  Restricted: Tailored to specific areas of our work with
                  restriction
                </p>
              </div>
            </div>
          </div>
          <div className=" col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Investments;
