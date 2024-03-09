import React from "react";
import { Button } from "./ui/button";
import { PiCoinsDuotone } from "react-icons/pi";
import { Bell, Plus } from "lucide-react";
import Image from "next/image";

const UserNavbar = () => {
  return (
    <div className="flex justify-between w-full  mt-6 p-2">
      {/* page type */}
      <div className="flex">
        <p className=" font-bold text-[20px]">Projects</p>
      </div>

      {/* user */}
      <div className="flex justify-center items-center gap-x-2">
        <div className="">
          <div className="flex justify-between items-center p-[8px] bg-orange-100 rounded-lg gap-x-2">
            <div className="flex justify-center items-center gap-x-1 ml-1">
              <PiCoinsDuotone color="#FF4D00" />
              Your credits: 5
            </div>
            <div className="flex justify-center items-center">
              <Button
                variant={"default"}
                className=" bg-[#FF4D00] rounded-md p-1 h-7 w-7"
              >
                <Plus size={12} />
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Button className="p-2 rounded-full" variant={"outline"}>
            <Bell size={20} />
          </Button>
        </div>

        <div>
          <div className="flex rounded-full">
            <Image
              src={"https://github.com/shadcn.png"}
              height={38}
              width={38}
              className=" rounded-full"
              alt="test"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
