import React from "react";
import Logo from "../../components/Logo/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import EnsignVN from "../../Images/vn.png";
import EnsignAnh from "../../Images/anh.png";
const HomeNav = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/faq",
    title: "FAQ",
  },
  {
    id: 3,
    to: "/book_appointment",
    title: "Function",
  },
  {
    id: 4,
    to: "/book_appointment",
    title: "About",
  },
];
const HomeHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="max-w-[1156px] gap-[46px] mx-auto flex items-center pt-[45px]">
      <div>
        <Logo></Logo>
      </div>
      <div className="flex items-center justify-between w-full">
        <nav className="home-nav">
          <ul>
            {HomeNav.length > 0 &&
              HomeNav.map((item) => {
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
        <div className="flex items-center gap-8">
          <Button
            onClick={() => {
              navigate("/login");
            }}
            className="!p-[10px_40px] rounded-lg text-[18px]"
          >
            Login
          </Button>
          <div className="flex gap-2">
            <div className="w-[50px] h-[35px]">
              <img src={EnsignVN} alt="" />
            </div>
            <div className="w-[50px] h-[35px]">
              <img src={EnsignAnh} alt="" width={50} height={35} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
