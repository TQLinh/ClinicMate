import React from "react";

const LayoutSign = ({ header, children, nextStep, childrenStyle }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-br from-gradientLeft to-gradientRight ">
      <h2 className="font-semibold text-[32px] block text-center text-white">
        {header || "Chưa có tiêu đề!"}
      </h2>
      <div className={` mt-[42px] w-full overflow-hidden ${childrenStyle}`}>
        {children}
      </div>
      {nextStep}
    </div>
  );
};

export default LayoutSign;
