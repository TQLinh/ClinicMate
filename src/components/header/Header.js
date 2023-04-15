import React from "react";

const Header = ({ children, className, number }) => {
  return (
    <div
      className={`${className} flex items-center font-semibold text-[20px] gap-[1.6rem] mt-[3.2rem]`}
    >
      <span className="w-[42px] border border-black1 rounded-full  h-[42px] flex items-center justify-center">
        {number}
      </span>{" "}
      <h4 className="">{children}</h4>
    </div>
  );
};

export default Header;
