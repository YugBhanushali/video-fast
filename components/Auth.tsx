import React from "react";
import LogoImg from "../public/image.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

const Auth = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        {/* logo */}
        <div className="flex  justify-center items-center">
          <Image className=" h-10 w-10" src={LogoImg} alt="test" />
          <p className="flex gap-x-1">
            <span className=" font-bold">Video</span>
            <span className=" italic">fast</span>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-14 min-w-[330px] max-w-[430px]">
          {/* auth type */}
          <div className=" flex flex-col justify-center items-center">
            <div className=" font-semibold text-[18px]">Log In</div>
            <div className=" text-[12px] text-gray-600">
              Let’s get started by creating your account
            </div>
          </div>

          {/* google auth btn */}
          <Button
            variant={"outline"}
            className="flex justify-center items-center gap-x-2 w-full mt-2"
          >
            <div>
              <FcGoogle />
            </div>
            <div>Login with Google</div>
          </Button>

          {/* seprator */}
          <div className=" flex justify-center items-center w-full gap-x-2 my-3 ">
            <hr className="flex border-gray-200 border-[0.1px] w-full" />
            <p className=" text-[10px] text-gray-500">OR</p>
            <hr className="flex border-gray-200 border-[0.1px]  w-full" />
          </div>

          {/* login / signup */}
          <div className="flex flex-col w-full gap-y-6">
            <div className="flex flex-col justify-start gap-y-1">
              <Label className=" text-[13px]">Enter Name *</Label>
              <Input type="email" placeholder="lets.join@audionotes.com" />
            </div>
            <div className="flex flex-col justify-start gap-y-1">
              <Label className=" text-[13px]">Enter Password *</Label>
              <Input type="password" placeholder="password" />
            </div>

            {/* checkbox and forget password */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Checkbox className=" border-secondary-foreground" id="terms" />
                <Label htmlFor="terms" className=" text-[#3E52E1]">
                  Remember Me
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="terms" className=" text-[#3E52E1]">
                  Forget password?
                </Label>
              </div>
            </div>

            {/* button */}
            <div className="flex w-full">
              <Button
                variant={"default"}
                className="flex w-full bg-[#3E52E1] text-white"
              >
                Log In
              </Button>
            </div>

            {/* if */}
            <div className=" flex justify-center">
              <p className=" text-[12px]">
                Don’t have an account?{" "}
                <span className="text-[#3E52E1] font-semibold">Sign up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
