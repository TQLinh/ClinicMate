import React from "react";
import HomeHeader from "../module/home/HomeHeader";
import { Outlet } from "react-router-dom";

const BookAppointmentPage = () => {
  return (
    <div className="bg-white">
      <HomeHeader></HomeHeader>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
