import Auth from "@/components/Auth";
import React from "react";
import { Toaster } from "react-hot-toast";
const page = () => {
  return (
    <div className=" flex flex-col mt-20">
      <Auth />
      <Toaster />
    </div>
  );
};

export default page;
