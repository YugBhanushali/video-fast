import Auth from "@/components/Auth";
import { supabase } from "@/supabase/supabase";
import { redirect } from "next/navigation";
import React from "react";
import { Toaster } from "react-hot-toast";

const page = async () => {
  return (
    <div className=" flex flex-col mt-20">
      <Auth />
      <Toaster />
    </div>
  );
};

export default page;
