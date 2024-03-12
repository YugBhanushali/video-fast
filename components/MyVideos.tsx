import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
  FileVideo,
  Plus,
  RectangleHorizontal,
  RectangleVertical,
} from "lucide-react";
import { IoMdArrowDropright } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";
import { FcLandscape } from "react-icons/fc";

const templates = [
  {
    type: "Presentation",
    imagePath: "/templates/Image.png",
    width: 210,
    height: 210,
  },
  {
    type: "Presentation",
    imagePath: "/templates/Template-1.png",
    width: 210,
    height: 210,
  },
  {
    type: "Presentation",
    imagePath: "/templates/Template-2.png",
    width: 210,
    height: 210,
  },
  {
    type: "Presentation",
    imagePath: "/templates/Template-3.png",
    width: 210,
    height: 210,
  },

  {
    type: "Presentation",
    imagePath: "/templates/Image.png",
    width: 210,
    height: 210,
  },
  {
    type: "Presentation",
    imagePath: "/templates/Template-1.png",
    width: 210,
    height: 210,
  },
  {
    type: "Presentation",
    imagePath: "/templates/Template-2.png",
    width: 210,
    height: 210,
  },
  {
    type: "Presentation",
    imagePath: "/templates/Template-3.png",
    width: 210,
    height: 210,
  },

  {
    type: "Presentation",
    imagePath: "/templates/Template-4.png",
    width: 210,
    height: 210,
  },
  {
    type: "Presentation",
    imagePath: "/templates/Template-5.png",
    width: 210,
    height: 210,
  },
  {
    type: "Presentation",
    imagePath: "/templates/Template-6.png",
    width: 210,
    height: 210,
  },
  {
    type: "Presentation",
    imagePath: "/templates/Template-4.png",
    width: 210,
    height: 210,
  },
];

const MyVideos = () => {
  return (
    <div className="flex flex-col w-full px-2 overflow-y-auto">
      <div className="flex justify-between items-center w-full mt-4">
        {/* my videos */}
        <div className="flex flex-col gap-y-0">
          <div className="flex justify-center items-center">
            <IoMdArrowDropright size={25} />
            <div>My Videos</div>
          </div>
          <hr className="flex border border-1 border-primary" />
        </div>
        <div>
          <Button
            className=" bg-[#3C50E0] flex justify-center items-center"
            variant={"default"}
          >
            <div className="flex gap-3 justify-center items-center">
              <Plus />
              New Video
            </div>
          </Button>
        </div>
      </div>

      {/* upload image */}
      <div className="flex flex-col justify-center items-center w-full mt-3">
        <FileVideo size={40} className=" text-gray-500" />
        <div className="mt-3 text-lg font-semibold tracking-tighter leading-7 whitespace-nowrap text-zinc-800">
          Create your first video
        </div>
        <div className="mt-3 leading-7 text-center text-zinc-500 w-[30%]">
          Click on the below button to kickstart your video creation journey
          with video fast
        </div>
        <div className="flex gap-2 justify-center px-2 py-3 mt-3 font-medium text-white whitespace-nowrap rounded-lg">
          <Button
            className=" bg-[#3C50E0] flex justify-center items-center"
            variant={"default"}
          >
            <div className="flex gap-3 justify-center items-center">
              <Plus />
              New Video
            </div>
          </Button>
        </div>
      </div>

      {/* templetes */}
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-y-0">
          <div className="flex justify-center items-center">
            <HiTemplate size={25} className="m-0 p-0" />
            <div>Templetes</div>
          </div>
          <hr className="flex border border-1 border-primary" />
        </div>
        <div className="flex justify-center items-center gap-x-2 ">
          <div>
            <Button className="px-3 rounded-xl" variant={"outline"}>
              All
            </Button>
          </div>
          <div>
            <Button
              className="px-3 rounded-xl justify-center items-center gap-x-1"
              variant={"outline"}
            >
              <RectangleHorizontal size={14} />
              Landscape Video (16:9)
            </Button>
          </div>
          <div>
            <Button
              className="px-3 rounded-xl justify-center items-center gap-x-1"
              variant={"outline"}
            >
              <RectangleVertical size={14} />
              Portrait Video (9:16)
            </Button>
          </div>
        </div>
      </div>

      {/* all types */}
      <div className="flex justify-center items-center w-full mt-4 px-3">
        <div className="flex justify-center items-center w-full mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
            {templates.map((eachTemplate, index) => (
              <div key={index} className="flex flex-col justify-start">
                <Image
                  src={eachTemplate.imagePath}
                  alt="temp"
                  width={eachTemplate.width}
                  height={eachTemplate.height}
                />
                <div>{eachTemplate.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVideos;
