import React from "react";
import { Button } from "./ui/button";
import { PiCoinsDuotone } from "react-icons/pi";
import { Bell, Plus } from "lucide-react";
import Image from "next/image";
import UserProfileDropdown from "./UserProfileDropdown";
import AccountModal from "./AccountModal";
import Notifications from "./Notifications";

const UserNavbar = () => {
  return (
    <div className="flex justify-between w-full  mt-6 p-2">
      {/* page type */}
      <div className="flex">
        <p className=" font-bold text-[20px]">Projects</p>
      </div>

      {/* user */}
      <div className="flex justify-center items-center gap-x-2 mr-2">
        <div className="">
          <div className="flex justify-between items-center p-[6px] bg-orange-100 rounded-lg gap-x-2">
            <div className="flex justify-center items-center gap-x-1 ml-1">
              <PiCoinsDuotone color="#FF4D00" />
              Your credits: 5
            </div>
            <div className="flex justify-center items-center">
              <Button
                variant={"default"}
                className=" bg-[#FF4D00] rounded-sm p-1 h-5 w-5"
              >
                <Plus size={12} />
              </Button>
            </div>
          </div>
        </div>

        <div>
          {/* <Button className="p-3 rounded-full" variant={"ghost"}>
            <Bell size={18} className="m-0" />
          </Button> */}
          <Notifications />
        </div>

        <div>
          <UserProfileDropdown />
          <AccountModal />
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
