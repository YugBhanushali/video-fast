"use client";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { supabase } from "@/supabase/supabase";
import { ArrowRight } from "lucide-react";
import random from "random-name";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
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
  const router = useRouter();

  useEffect(() => {
    handleGoogleAuth();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-7 mt-[200px]">
      <div>
        <Logo />
        <h1 className=" font-bold text-[20px]">Welcome to video fast</h1>
      </div>
      <Button
        className="flex justify-between gap-x-2 items-center "
        variant={"outline"}
        onClick={() => router.push("/auth")}
      >
        Get Started <ArrowRight />
      </Button>
    </div>
  );
}
