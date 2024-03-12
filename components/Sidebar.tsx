"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { RxDashboard } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { AudioLines, Receipt } from "lucide-react";
import { Button } from "./ui/button";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import CreditsModal from "./CreditsModal";

const sideBarContent = [
  {
    id: "my-projects",
    label: "My Projects",
    logo: <RxDashboard size={20} />,
  },
  {
    id: "ai-avatars",
    label: "AI Avatars",
    logo: <RxAvatar size={20} />,
  },
  {
    id: "voices",
    label: "Voices",
    logo: <AudioLines size={20} />,
  },
];

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("my-projects");

  const handleItemClick = (itemId: any) => {
    setSelectedItem(itemId);
  };

  return (
    <div className="flex flex-col justify-start border  border-1 px-3 py-4 w-full h-[98vh] rounded-xl mx-2 my-2">
      <div className="flex justify-start mt-2">
        <Logo />
      </div>

      {/* navbar content */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col mt-6 justify-start">
          {sideBarContent.map((nav) => (
            <div
              key={nav.id}
              className={`flex justify-start items-center border border-1 ${
                selectedItem === nav.id
                  ? "border-gray-200 bg-secondary"
                  : "border-transparent hover:border-gray-200 hover:bg-secondary"
              } gap-x-2 w-full h-full p-2 rounded-lg`}
              onClick={() => handleItemClick(nav.id)}
            >
              <div>{nav.logo}</div>
              <div>{nav.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full gap-y-1">
          {/* <Button className="flex justify-between bg-orange-100 hover:bg-orange-200">
            <div className="flex text-black justify-center items-center gap-x-2">
              <BsLightningChargeFill color="#FF4D00" />
              Upgrade plan
            </div>
            <FaArrowRightLong color="#FF4D00" />
          </Button> */}
          <CreditsModal />
          <Button
            className="flex justify-start items-center gap-x-2"
            variant={"ghost"}
          >
            <Receipt size={15} />
            Pricing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
