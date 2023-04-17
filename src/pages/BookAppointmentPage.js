import React from "react";
import { Outlet } from "react-router-dom";
import BookAppHeader from "../module/bookAppointment/BookAppHeader";

const BookAppointmentPage = () => {
  return (
    <div className="bg-white">
      <BookAppHeader></BookAppHeader>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
