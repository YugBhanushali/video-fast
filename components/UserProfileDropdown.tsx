import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { FaRegQuestionCircle } from "react-icons/fa";
import Image from "next/image";
import { Badge } from "./ui/badge";
import AccountModal from "./AccountModal";

const UserProfileDropdown = () => {
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
              Tony stark{" "}
              <Badge className=" bg-gray-400 text-[10px] ">Free</Badge>
            </div>
            <div className=" text-gray-400 text-[12px]">tony@gmail.com</div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <AccountModal />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex gap-x-2 justify-start items-center">
              <FaRegQuestionCircle size={16} />
              Support
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
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
