"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { FaRegQuestionCircle } from "react-icons/fa";
import Image from "next/image";
import { Badge } from "./ui/badge";
import AccountModal from "./AccountModal";
import { supabase } from "@/supabase/supabase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import random from "random-name";

const UserProfileDropdown = () => {
  const [userInfo, setuserInfo] = useState<any>();
  const router = useRouter();
  const handleLogOut = async () => {
    const res = await supabase.auth.signOut();
    router.push("/auth");
  };

  const handleUserData = async () => {
    const user = supabase.auth.getUser();
    if (user) {
      const email = (await user).data.user?.email;
      console.log(email);

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .select();

      console.log(data);

      if (error) {
        console.error("Error fetching user:", error.message);
      } else {
        setuserInfo(data);
      }
    }
  };
  useEffect(() => {
    const handleGoogleAuth = async () => {
      const res = await supabase.auth.getUser();

      if (res.data.user) {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", String(res.data.user.email))
          .select();
        console.log(data, "from google ");

        if (data?.length === 0) {
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
    handleGoogleAuth().then(() => {
      handleUserData();
    });
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex rounded-full">
          <Image
            src={"https://github.com/shadcn.png"}
            height={33}
            width={33}
            className=" rounded-full"
            alt="test"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <div className="flex justify-start items-center gap-x-3 ml-2">
          <div>
            <div className="flex rounded-full">
              <Image
                src={"https://github.com/shadcn.png"}
                height={35}
                width={35}
                className=" rounded-full"
                alt="test"
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-[14px] flex justify-center items-center gap-x-2">
              {userInfo ? userInfo[0].name : "Free"}{" "}
              <Badge className=" bg-gray-400 text-[10px] ">
                {userInfo ? userInfo[0].plan_type : "Free"}
              </Badge>
            </div>
            <div className=" text-gray-400 text-[12px]">
              {userInfo ? userInfo[0].email : "tony@gmail.com"}
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={(e) => e.preventDefault()}>
            {userInfo ? <AccountModal {...userInfo[0]} /> : null}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex gap-x-2 justify-start items-center">
              <FaRegQuestionCircle size={16} />
              Support
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogOut}>
            <div className="flex gap-x-2 justify-start items-center">
              <LogOut size={16} />
              Logout
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileDropdown;
