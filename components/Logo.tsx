import Image from "next/image";
import React from "react";
import LogoImg from "../public/image.png";

const Logo = () => {
  return (
    <div className="flex  justify-center items-center">
      <Image className=" h-10 w-10" src={LogoImg} alt="test" />
      <p className="flex gap-x-1">
        <span className=" font-bold">Video</span>
        <span className=" italic font-bold text-[#4559E8]">fast</span>
      </p>
    </div>
  );
};

export default Logo;
