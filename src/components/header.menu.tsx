import Link from "next/link";
import React from "react";
import {
  PiArrowUpRight as ExternalLinkIcon,
  PiList as MenuIcon,
} from "react-icons/pi";
import ThemeSubMenu from "./theme.sub-menu";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { pages, socials } from "@/data/links";

const HeaderMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <MenuIcon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        {pages.map((page) => (
          <DropdownMenuItem key={page.label} asChild>
            <Link
              href={page.path}
              target={page.isExternalLink ? "_blank" : undefined}
              className="flex min-w-[200px] items-center justify-between"
            >
              <div className="flex items-center">
                {page.icon && <page.icon className="mr-2 h-5 w-5" />}
                {page.label}
              </div>
              {page.isExternalLink ? (
                <ExternalLinkIcon className="ml-2 h-4 w-4" />
              ) : null}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <ThemeSubMenu />
        <DropdownMenuSeparator />
        <div className="grid grid-cols-1">
          {socials.map((social) => (
            <DropdownMenuItem key={social.label} asChild>
              <Link
                href={social.path}
                target={social.isExternalLink ? "_blank" : undefined}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  {social.icon && <social.icon className="mr-2 h-5 w-5" />}
                  {social.label}
                </div>
                {social.isExternalLink ? (
                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                ) : null}
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
