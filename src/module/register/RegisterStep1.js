import React from "react";
import Input from "../../components/input/Input";

const RegisterStep1 = () => {
  return (
    <div className="p-[56px_154px] gap-[76px] flex">
      <div className="flex flex-col flex-1 gap-5">
        <Input placeholder="First Name *" type="text"></Input>
        <Input placeholder="Last Name *" type="text"></Input>
        <Input placeholder="First Name *" type="text"></Input>
        <Input placeholder="Mobile Phone *" type="text"></Input>
      </div>
      <div className="flex flex-col flex-1 gap-5">
        <Input placeholder="Your Email *" type="text"></Input>
        <Input placeholder="Your Password *" type="text"></Input>
        <Input placeholder="Social Security Number *" type="text"></Input>
        <Input placeholder="Insurance Member *" type="text"></Input>
      </div>
    </div>
  );
};

export default RegisterStep1;
