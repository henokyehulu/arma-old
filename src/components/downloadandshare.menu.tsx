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
            <MoreIcon className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end">
          <DropdownMenuItem>
            <DownloadIcon className="mr-2 h-5 w-5" />
            Download all images
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon className="mr-2 h-5 w-5" />
            Copy link
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DownloadAndShare;
