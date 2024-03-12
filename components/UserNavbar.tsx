"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { PiCoinsDuotone } from "react-icons/pi";
import { Bell, Plus } from "lucide-react";
import Image from "next/image";
import UserProfileDropdown from "./UserProfileDropdown";
import AccountModal from "./AccountModal";
import Notifications from "./Notifications";
import { supabase } from "@/supabase/supabase";
import CreditsModal from "./CreditsModal";
import random from "random-name";

const UserNavbar = () => {
  const [userInfo, setuserInfo] = useState<any>();
  useEffect(() => {
    const handleGoogleAuth = async () => {
      const res = await supabase.auth.getUser();

      if (res.data.user) {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", String(res.data.user.email))
          .select();

        if (!data) {
          const addUser = await supabase
            .from("users")
            .insert([
              {
                created_at: new Date().toUTCString(),
                email: String(res.data.user.email),
                coins: 20,
                name: String(random.first() + " " + random.last()),
                plan_type: String("free"),
              },
            ])
            .select();

          console.log(addUser);
        }
      }
    };
    handleGoogleAuth();
    const testing = async () => {
      const res = await supabase.auth.getUser();
      console.log(res);
      if (res.data.user) {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", String(res.data.user.email))
          .select();

        if (data) {
          setuserInfo(data[0]);
        }
      }
    };
    testing();
  }, []);
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
              Your credits: {userInfo ? userInfo.coins : "0"}
            </div>
            <div className="flex justify-center items-center">
              <CreditsModal>
                <Button
                  variant={"default"}
                  className=" bg-[#FF4D00] rounded-sm p-1 h-5 w-5"
                >
                  <Plus size={12} />
                </Button>
              </CreditsModal>
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
          {/* <AccountModal /> */}
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
