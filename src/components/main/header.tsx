import Link from "next/link";
import React from "react";
import { PiFlagBannerDuotone as FlagIcon } from "react-icons/pi";
import {
  RiGithubFill as GithubIcon,
  RiSunLine as LightModeIcon,
  RiTwitterXLine,
} from "react-icons/ri";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-4 px-4 border-b h-14 bg-white/75 backdrop-blur-lg">
      <div>
        <Link
          href={"/"}
          className={buttonVariants({
            variant: "ghost",
            class: "px-0 hover:bg-transparent",
          })}
        >
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
      <div className="flex items-center gap-2">
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={"icon"} variant={"ghost"}>
              <MenuIcon className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" className="w-40">
            <DropdownMenuItem>Changelog</DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                target="_blank"
                href={"https://github.com/henokyehulu/arma"}
                className="flex items-center justify-between cursor-pointer"
              >
                Github <ExternalLinkIcon className="w-5 h-5" />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                target="_blank"
                href={"https://x.com/henokyehulu"}
                className="flex items-center justify-between cursor-pointer"
              >
                X <ExternalLinkIcon className="w-5 h-5" />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}

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
