import MyVideos from "@/components/MyVideos";
import Sidebar from "@/components/Sidebar";
import UserNavbar from "@/components/UserNavbar";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <UserNavbar />
        <MyVideos />
      </div>
    </div>
  );
};

export default page;
