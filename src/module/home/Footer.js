import React from "react";
import IconYoutb from "../../icon/IconYoutb";
import IconFb from "../../icon/IconFb";
import IconCall from "../../icon/IconCall";
import { Link } from "react-router-dom";
import IconHospital from "../../icon/IconHospital";
const Footer = () => {
  return (
    <div className="bg-[#0A0E31] py-[56px] text-white ">
      <div className="max-w-[1156px] mx-auto">
        <div className="flex ">
          <div className="w-[471px]">
            <div className="flex ">
              <div className="relative">
                <h2 className="text-[32px] font-semibold">ClinicMate</h2>
                <div className="w-[24px] h-[24px] absolute -right-2 -top-6">
                  <IconHospital></IconHospital>
                </div>
              </div>
            </div>
            <p className="italic font-light mt-[16px] w-[330px] whitespace-pre-line">
              FPT University, Hoa Hai, Ngu Hanh Son Da Nang, Viet Nam
            </p>
            <div className="mt-[32px] flex items-center gap-[32px]">
              <IconYoutb />
              <IconFb />
              <IconCall />
            </div>
          </div>
          <div className="flex justify-between flex-1">
            <div>
              <h3 className="font-semibold text-[20px]">Company Info</h3>
              <ul className="flex flex-col gap-[16px] mt-[24px]">
                <li>
                  <Link href="#">ClinicMate</Link>
                </li>
                <li>
                  <Link href="#">Fpt University</Link>{" "}
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Da Nang</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[20px]">Contact Us</h3>
              <ul className="flex flex-col gap-[16px] mt-[24px]">
                <li>
                  <Link href="#">Hello@clinicmate</Link>
                </li>
                <li>
                  <Link href="#">http://clinicmate.vn</Link>{" "}
                </li>
                <li>
                  <Link href="#">Facebook</Link>
                </li>
                <li>
                  <Link href="#">Gmail</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[20px]">Hotline</h3>
              <ul className="flex flex-col gap-[16px] mt-[24px]">
                <li>+8412345678</li>
                <li>+8412345678 </li>
                <li>Help: +84544654</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[1px] w-full bg-white my-[40px]"></div>
          <span className="block text-center">
            © 2023 ClinicMate Healthcare System. All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
