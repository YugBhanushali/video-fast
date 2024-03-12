import React from "react";
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
import { Bell } from "lucide-react";
import { Separator } from "./ui/separator";

const notifications = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum odio nec lorem efficitur, et tempus sapien hendrerit.",
    date: "12 May, 2025",
    status: "seen",
  },
  {
    id: 2,
    text: "Sed ac ligula nec odio volutpat consequat. Nulla facilisi. Proin ullamcorper.",
    date: "12 May, 2025",
    status: "unseen",
  },
  // Add more notifications as needed
];

const Notifications = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center rounded-full text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-150">
          <Bell className="h-6 w-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <ul>
          <li>
            <div className="flex justify-between items-center px-3 py-2 border-b border-gray-200">
              <h3 className="text-gray-800 text-md font-medium">
                Notifications
              </h3>
              <div className="text-gray-400 text-md hover:text-gray-800 focus:outline-none cursor-pointer">
                Clear All
              </div>
            </div>
          </li>
          {notifications.map((notification) => (
            <>
              <DropdownMenuItem>
                <div className="px-3 py-2">
                  <p
                    className={`text-sm ${notification.status === "seen" ? "text-gray-400" : "text-gray-900"}`}
                  >
                    {notification.text}
                  </p>
                  <p className="text-xs mt-1 text-gray-400">
                    {notification.date}
                  </p>
                </div>
              </DropdownMenuItem>
              <Separator />
            </>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notifications;
