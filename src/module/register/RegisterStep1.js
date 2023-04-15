import React, { useState } from "react";
import Input from "../../components/input/Input";
import ReactDatePicker from "react-datepicker";

const RegisterStep1 = () => {
  const [date, setDate] = useState(new Date());
  return (
    <form className="p-[56px_154px] gap-[76px] flex">
      <div className="flex flex-col flex-1 gap-[32px]">
        <Input placeholder="First Name *" type="text"></Input>
        <Input placeholder="Last Name *" type="text"></Input>
        <div>
          <ReactDatePicker
            onChange={(date) => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
            required={true}
            name="nsx"
          />
        </div>
        <Input placeholder="Mobile Phone *" type="text"></Input>
      </div>
      <div className="flex flex-col flex-1 gap-[32px]">
        <Input placeholder="Your Email *" type="text"></Input>
        <Input placeholder="Your Password *" type="text"></Input>
        <Input placeholder="Social Security Number *" type="text"></Input>
        <Input placeholder="Insurance Member *" type="text"></Input>
      </div>
    </form>
  );
};

export default RegisterStep1;
