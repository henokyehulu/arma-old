"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
// import { RiMoreLine as MoreIcon } from "react-icons/ri";
import {
  PiDotsThree as MoreIcon,
  PiClipboardText as CopyIcon,
  PiDownloadSimple as DownloadIcon,
} from "react-icons/pi";
import { Button } from "./ui/button";

const DownloadAndShare: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex">
      <DropdownMenu open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <DropdownMenuTrigger asChild>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant={"secondary"}
            size={"icon"}
          >
            <MoreIcon className="w-6 h-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end">
          <DropdownMenuItem>
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download all images
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon className="w-5 h-5 mr-2" />
            Copy link
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DownloadAndShare;
