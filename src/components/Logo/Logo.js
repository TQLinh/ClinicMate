import React from "react";
import logo from "../../Images/Clinicmate 1.png";
const Logo = () => {
  return (
    <>
      <div className="w-[68px] h-[68px]">
        <img src={logo} alt="" />
      </div>
      <span className="text-[14px] text-[#fff0] font-medium bg-clip-text w-max bg-gradient-to-tr from-gradientLeft to-gradientRight">
        ClinicMate
      </span>
    </>
  );
};

export default Logo;
