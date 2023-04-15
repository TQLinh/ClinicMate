import React from "react";
import Button from "./Button";

const ButtonIcon = ({ className, children, iconLeft, iconRight, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={`flex gap-[8px] items-center w-full p-[16px] text-[18px] text-white rounded-full bg-gradient-to-br from-gradientLeft to-gradientRight ${className}`}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Button>
  );
};

export default ButtonIcon;
