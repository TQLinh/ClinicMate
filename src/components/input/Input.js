import React from "react";
import { useController } from "react-hook-form";
const Input = ({ placeholder, type, className, control, name, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <input
      {...rest}
      {...field}
      type={type || "text"}
      className={`text-[2rem] block border-grayborder  w-full p-[20px_23px] rounded-[16px] border border-gray3 ${className}`}
      placeholder={placeholder || "Chưa có tiêu đề"}
    />
  );
};

export default Input;
