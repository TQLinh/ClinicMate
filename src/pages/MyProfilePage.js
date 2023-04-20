import React from "react";
import { Link } from "react-router-dom";
import IconHeart from "../icon/IconHeart";
import IconLock from "../icon/IconLock";
import IconUsers from "../icon/IconUsers";
import HomeHeader from "../module/home/HomeHeader";

const MyProfilePage = () => {
  return (
    <div>
      <HomeHeader />
      <div className="max-w-[1156px] mx-auto mt-[5rem]">
        <h3 className="text-[5.6rem] font-semibold text-gradient">
          My Profile
        </h3>

        <div className="grid grid-cols-2 gap-[2.4rem] mt-[6rem]">
          <div className="rounded-[1.6rem] p-[4.5rem_8rem] shadow-lg bg-white">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[6.4rem] h-[6.4rem] rounded-full overflow-hidden">
                <img
                  src="https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-avatar-anime-anh-dai-dien-anime.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col mt-[1.4rem]">
                <h2 className="text-gradient text-[2.4rem] font-bold">
                  Quang Hung
                </h2>
                <span className="text-subhead">hungnq@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col gap-[2.4rem] mt-[4.5rem]">
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-[3rem]">
                  <span>
                    <IconUsers />
                  </span>
                  <span className="text-subhead">Personal Information</span>
                </div>
                <Link to="$" className="font-bold text-gradient">
                  Detail
                </Link>
              </div>
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-[3rem]">
                  <span>
                    <IconHeart />
                  </span>
                  <span className="text-subhead">Health Information</span>
                </div>
                <Link to="$" className="font-bold text-gradient">
                  Detail
                </Link>
              </div>
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-[3rem]">
                  <span>
                    <IconLock />
                  </span>
                  <span className="text-subhead">Change Password</span>
                </div>
                <Link to="$" className="font-bold text-gradient">
                  Change
                </Link>
              </div>
            </div>
          </div>
          <div className="gap-[1rem] flex flex-col">
            <div className="rounded-[1.6rem] bg-grayborder flex-1 p-[1.8rem_3.8rem]">
              <h2 className="text-gradient text-[2.4rem] font-bold">
                Terms and Regulations
              </h2>
            </div>
            <div className="rounded-[1.6rem] bg-grayborder flex-1 p-[1.8rem_3.8rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
