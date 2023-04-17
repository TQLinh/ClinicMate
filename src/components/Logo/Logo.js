import React from "react";
import logo from "../../Images/Clinicmate 1.png";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        navigate("/");
      }}
    >
      <div className="w-[68px] h-[68px]">
        <img src={logo} alt="" />
      </div>
      <span className="text-[14px] text-[#fff0] font-medium bg-clip-text w-max bg-gradient-to-tr from-gradientLeft to-gradientRight">
        ClinicMate
      </span>
    </div>
  );
};

export default Logo;
