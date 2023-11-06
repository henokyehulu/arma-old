import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { PiFlagBannerDuotone as FlagIcon } from "react-icons/pi";
import HeaderMenu from "../header.menu";
import ModeToggle from "../mode.toggle";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between flex-shrink-0 gap-4 px-4 border-b h-14 bg-background/75 backdrop-blur-lg">
      <div>
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "p-0 font-semibold hover:bg-transparent",
          )}
        >
          <FlagIcon className="w-5 h-5 mr-1 text-primary" />
          Arma
          <Badge
            variant={"secondary"}
            className="ml-1 text-xs font-medium rounded"
          >
            Alpha
          </Badge>
        </Link>
      </div>
      {/* <div className="items-center justify-center flex-1 hidden md:flex">
        <Input placeholder="Search..." className="max-w-sm" />
      </div> */}
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

        <ModeToggle />
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
