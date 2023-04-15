import React from "react";
import HomeHeader from "../module/home/HomeHeader";
import { Outlet } from "react-router-dom";
import Footer from "../module/home/Footer";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HomeHeader></HomeHeader>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
