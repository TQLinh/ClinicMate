import React from "react";

const Button = ({ children, type, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`block w-full p-[16px] text-[18px] text-white rounded-full bg-gradient-to-br from-gradientLeft to-gradientRight ${className}`}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
