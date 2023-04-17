import React from "react";
import Logo from "../../components/Logo/Logo";
import { NavLink } from "react-router-dom";

const bookappointment = [
  {
    id: 1,
    to: "/dashboard",
    title: "Dashboard",
  },
  {
    id: 2,
    to: "/myappointments",
    title: "My Appointments",
  },
  {
    id: 3,
    to: "/book_appointment",
    title: "Book Appointments",
  },
];
const BookAppHeader = () => {
  return (
    <div className="max-w-[1156px] gap-[46px] mx-auto flex items-center pt-[45px]">
      <div>
        <Logo></Logo>
      </div>
      <nav className="home-nav">
        <ul>
          {bookappointment.length > 0 &&
            bookappointment.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : null)}
                    to={item.to}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

export default BookAppHeader;
