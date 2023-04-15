import React from "react";
import LayoutSign from "../layout/LayoutSign";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
const LoginPage = () => {
  return (
    <LayoutSign header="Login" childrenStyle="!max-w-[500px]">
      <div className="bg-white p-[40px_42px]">
        <div className="flex flex-col items-center justify-center">
          <Logo></Logo>
          <span className="text-[9px] text-gray2">Clinic Management</span>
        </div>
        <form autoComplete="off" className="mt-9">
          <Input type="text" placeholder="Username or Email"></Input>
          <Input
            type="password"
            className="mt-8"
            placeholder="Username or Email"
          ></Input>
          <div className="flex justify-between mt-[10px]">
            <div className="flex items-center gap-1 text-textColor">
              <input
                type="checkbox"
                className="w-[16px] h-[16px] border border-textColor"
              />
              <label htmlFor="">Remember me</label>
            </div>
            <div>
              <Link to="" className="text-gradientLeft">
                Forgot Password?
              </Link>
            </div>
          </div>
          <Button className="mt-8" type="submit">
            Login
          </Button>
        </form>
        <div className="mt-[32px] flex items-center justify-center gap-1 ">
          <span className="text-gray2">New User?</span>
          <Link to="/register" className="text-textColor">
            Sign up here!
          </Link>
        </div>
      </div>
    </LayoutSign>
  );
};

export default LoginPage;
