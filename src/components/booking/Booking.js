import React from "react";

const Booking = ({ icon, value }) => {
  return (
    <div className="flex gap-[1.6rem] items-center p-[2rem_2.4rem] rounded-[1.6rem] border border-grayborder">
      <span>{icon}</span>
      <span className="text-[2rem]">{value}</span>
    </div>
  );
};

export default Booking;
