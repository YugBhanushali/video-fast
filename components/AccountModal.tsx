import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info, User } from "lucide-react";
import { Separator } from "./ui/separator";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoAlertCircleSharp } from "react-icons/io5";

const AccountModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-x-2 justify-start items-center">
          <User size={16} />
          Account
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Account</DialogTitle>
          <DialogDescription>
            Choose the avatar that best describes your use case
          </DialogDescription>
          <Separator className=" mt-2" />
        </DialogHeader>
        <div className="flex flex-col gap-y-7 justify-start">
          <div className="flex flex-col justify-start ">
            <div className=" text-gray-500">Display name</div>
            <div>Tony Stark</div>
          </div>
          <div className="flex flex-col justify-start ">
            <div className=" text-gray-500">Email address</div>
            <div>tony@gmail.com</div>
          </div>
          <div className="flex justify-between items-center ">
            <div className=" flex flex-col justify-start">
              <div className=" text-gray-500">Current plan</div>
              <div>Free</div>
            </div>
            <div>
              <Button className="flex justify-between bg-orange-100 hover:bg-orange-200 gap-x-2">
                <div className="flex text-black justify-center items-center gap-x-2">
                  <BsLightningChargeFill color="#FF4D00" />
                  Upgrade plan
                </div>
                <FaArrowRightLong color="#FF4D00" />
              </Button>
            </div>
          </div>
          <div className="flex w-full justify-start gap-x-2 items-center bg-gray-100 p-3 rounded-lg text-gray-500">
            <IoAlertCircleSharp className=" text-gray-500" />
            <span className=" text-[14px]">Your Credits = 24</span>
          </div>

          <Separator />
        </div>
        <DialogFooter className="flex flex-col">
          <div className="flex w-full justify-between items-center bg-[#FF5C00] px-4 py-2 rounded-lg">
            {/* <Separator className=" mb-2" /> */}
            <div className=" text-white ml-2 text-[14px]">
              Want to join the affiliate program?
            </div>
            <Button
              variant={"outline"}
              className="flex gap-x-2 bg-transparent px-2 py-1 text-white text-[10px] h-7 rounded-md"
            >
              Join now
              <FaArrowRightLong color="white" />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AccountModal;
