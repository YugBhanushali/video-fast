import Auth from "@/components/Auth";
import { supabase } from "@/supabase/supabase";
import { redirect } from "next/navigation";
import React from "react";
import { Toaster } from "react-hot-toast";

async function checkSession() {
  const res = await supabase.auth.getSession();
  console.log(res);
  if (res.data.session) {
    redirect("/user");
  }
  return res;
}

const page = async () => {
  const check = await checkSession();
  return (
    <div className=" flex flex-col mt-20">
      <Auth />
      <Toaster />
    </div>
  );
};

export default page;
