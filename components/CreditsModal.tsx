import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiCoins } from "react-icons/pi";
import { Slider } from "./ui/slider";

const CreditsModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button className="flex justify-between bg-orange-100 hover:bg-orange-200">
          <div className="flex text-black justify-center items-center gap-x-2">
            <BsLightningChargeFill color="#FF4D00" />
            Upgrade plan
          </div>
          <FaArrowRightLong color="#FF4D00" />
        </Button> */}
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle>
            <PiCoins color="#FF4D00" size={20} />
          </DialogTitle>
          <div className="flex text-[18px] font-semibold">Buy more credits</div>
          <div className=" text-[14px] text-gray-400">
            1 video requires around 2 credits
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-y-3 w-full">
          <div className="flex justify-center items-center w-full gap-x-2">
            <div className="flex w-full">
              <Slider color="black" defaultValue={[50]} max={100} step={2} />
            </div>
            <div className="flex p-1 border border-1 rounded-lg">10</div>
            <div>credits</div>
          </div>

          <div className="flex justify-center items-center mt-2">
            <div className=" text-[14px] text-gray-400">1 credit ≈ $2</div>
          </div>
        </div>
        <DialogFooter className="flex w-full">
          {/* <DialogClose asChild></DialogClose> */}
          <Button
            type="button"
            variant="outline"
            className="w-full
          "
          >
            Cancel
          </Button>
          <Button type="button" className=" bg-[#3C50E0] text-white w-full">
            Buy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreditsModal;
