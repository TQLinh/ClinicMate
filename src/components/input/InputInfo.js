import React from "react";

const InputInfo = ({ name, type, icon, placeholder }) => {
  return (
    <div className="relative flex gap-[2.4rem] py-[1.6rem] items-center border-b border-grayborder">
      <span>{icon}</span>
      <input
        placeholder={placeholder || "Content"}
        className="text-black1 placeholder:text-black1 font-semibold text-[2rem]"
        type={type || "text"}
        name={name}
      />
    </div>
  );
};

export default InputInfo;
