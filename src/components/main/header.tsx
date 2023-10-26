import Link from "next/link";
import React from "react";
import {
  RiGithubFill as GithubIcon,
  RiTwitterXLine,
  RiSunLine as LightModeIcon,
} from "react-icons/ri";
import { PiFlagBannerDuotone as FlagIcon } from "react-icons/pi";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between gap-4 px-4 border-b h-14">
      <div>
        <Link href={"/"} className="flex items-center font-medium">
          <FlagIcon className="w-5 h-5 mr-1 text-primary" />
          Arma
          <Badge variant={"secondary"} className="ml-1 text-xs rounded">
            Alpha
          </Badge>
        </Link>
      </div>
      <div className="flex items-center justify-center flex-1">
        <Input placeholder="Search..." className="max-w-sm" />
      </div>
      <div className="items-center hidden gap-1 md:flex">
        <Button size={"icon"} variant={"ghost"}>
          <GithubIcon className="w-5 h-5" />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <RiTwitterXLine className="w-5 h-5" />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <LightModeIcon className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
