import MyVideos from "@/components/MyVideos";
import Sidebar from "@/components/Sidebar";
import UserNavbar from "@/components/UserNavbar";
import { supabase } from "@/supabase/supabase";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  return (
    <div className="flex w-full ">
      <div className=" fixed w-[20%] left-0 top-0 h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col ml-[22%] w-full h-full">
        <div className="flex w-full">
          <UserNavbar />
        </div>
        <div className="flex w-full ">
          <MyVideos />
        </div>
      </div>
    </div>
  );
};

export default page;
