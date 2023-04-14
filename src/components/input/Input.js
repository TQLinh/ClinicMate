import React from "react";

const Input = ({ placeholder, type, className, ...rest }) => {
  return (
    <input
      {...rest}
      type={type || "text"}
      className={`text-xl block w-full p-[20px_23px] rounded-2xl border border-gray3 ${className}`}
      placeholder={placeholder || "Chưa có tiêu đề"}
    />
  );
};

export default Input;
