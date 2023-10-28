import Link from "next/link";
import React from "react";
import { PiFlagBannerDuotone as FlagIcon } from "react-icons/pi";
import { RiGithubFill as GithubIcon, RiTwitterXLine } from "react-icons/ri";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import ModeToggle from "../mode.toggle";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between gap-4 border-b bg-background/75 px-4 backdrop-blur-lg">
      <div>
        <Link
          href={"/"}
          className={buttonVariants({
            variant: "ghost",
            class: "px-0 hover:bg-transparent",
          })}
        >
          <FlagIcon className="mr-1 h-5 w-5 text-primary" />
          Arma
          <Badge variant={"secondary"} className="ml-1 rounded text-xs">
            Alpha
          </Badge>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
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
          <GithubIcon className="h-5 w-5" />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <RiTwitterXLine className="h-5 w-5" />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
