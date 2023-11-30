import Link from "next/link";
import React from "react";
import {
  PiArrowUpRight as ExternalLinkIcon,
  PiList as MenuIcon,
} from "react-icons/pi";
import type { LinkProps } from "./main/header";
import ThemeSubMenu from "./theme.sub-menu";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderMenuProps {
  links?: LinkProps[];
  socials?: LinkProps[];
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ links, socials }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <MenuIcon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        {links?.map((link) => (
          <DropdownMenuItem key={link.label} asChild>
            <Link
              href={link.path}
              target={link.isExternalLink ? "_blank" : undefined}
              className="flex min-w-[200px] items-center justify-between"
            >
              <div className="flex items-center">
                <link.icon className="mr-2 h-5 w-5" />
                {link.label}
              </div>
              {link.isExternalLink ? (
                <ExternalLinkIcon className="ml-2 h-4 w-4" />
              ) : null}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <ThemeSubMenu />
        <DropdownMenuSeparator />
        <div className="grid grid-cols-1">
          {socials?.map((social) => (
            <DropdownMenuItem key={social.label} asChild>
              <Link
                href={social.path}
                target={social.isExternalLink ? "_blank" : undefined}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <social.icon className="mr-2 h-5 w-5" />
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
