import React, { useState } from "react";
import Input from "../../components/input/Input";
import DateTimePicker from "react-datetime-picker";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

const RegisterStep1 = ({ control }) => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="p-[9rem_154px] gap-[76px] flex">
      <div className="flex flex-col flex-1 gap-[32px]">
        <Input
          placeholder="First Name *"
          type="text"
          control={control}
          name="first"
        ></Input>
        <Input
          placeholder="Last Name *"
          type="text"
          control={control}
          name="last"
        ></Input>
        <div className="date_picker">
          <DateTimePicker
            clearIcon={null}
            format="dd/MM/yyyy"
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-[32px]">
        <Input
          placeholder="Your Email or mobile phone *"
          type="text"
          control={control}
          name="email"
        ></Input>
        <Input
          placeholder="Your Password *"
          type="text"
          control={control}
          name="password"
        ></Input>
        <Input
          placeholder="Social Security Number *"
          type="text"
          control={control}
          name="ocialsecurity"
        ></Input>
      </div>
    </div>
  );
};

export default RegisterStep1;
