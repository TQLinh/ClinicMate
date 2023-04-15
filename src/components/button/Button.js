import React from "react";

const Button = ({ children, type, className, ...rest }) => {
  return (
    <button
      className={`block w-full p-[16px] text-[18px] text-white rounded-full bg-gradient-to-br from-gradientLeft to-gradientRight ${className}`}
      {...rest}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
