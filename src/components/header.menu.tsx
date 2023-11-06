import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import type { IconType } from "react-icons/lib";
import {
  RiGithubFill as GithubIcon,
  RiTwitterXLine as XIcon,
} from "react-icons/ri";
import {
  PiArrowUpRight as ExternalLinkIcon,
  PiList as MenuIcon,
  PiUploadSimple as UploadIcon,
  PiSquaresFour as BrowseIcon,
} from "react-icons/pi";
import Link from "next/link";

interface LinkProps {
  icon: IconType;
  label: string;
  path: string;
  isExternalLink?: boolean;
}

const links: LinkProps[] = [
  {
    icon: BrowseIcon,
    label: "Browse",
    path: "/",
  },
  {
    icon: UploadIcon,
    label: "Upload",
    path: "/contribute",
  },
  //   {
  //     icon: GithubIcon,
  //     label: "Github",
  //     path: "/",
  //     isExternalLink: true,
  //   },
  //   {
  //     icon: XIcon,
  //     label: "Twitter",
  //     path: "/",
  //     isExternalLink: true,
  //   },
];
const socials: LinkProps[] = [
  {
    icon: GithubIcon,
    label: "Github",
    path: "/",
    isExternalLink: true,
  },
  {
    icon: XIcon,
    label: "Twitter",
    path: "/",
    isExternalLink: true,
  },
];

const HeaderMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <MenuIcon className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        {links.map((link) => (
          <DropdownMenuItem key={link.label} asChild>
            <Link
              href={link.path}
              target={link.isExternalLink ? "_blank" : undefined}
              className="flex min-w-[200px] items-center justify-between"
            >
              <div className="flex items-center">
                <link.icon className="w-5 h-5 mr-2" />
                {link.label}
              </div>
              {link.isExternalLink ? (
                <ExternalLinkIcon className="w-4 h-4 ml-2" />
              ) : null}
            </Link>
          </DropdownMenuItem>
        ))}
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
                  <social.icon className="w-5 h-5 mr-2" />
                  {social.label}
                </div>
                {social.isExternalLink ? (
                  <ExternalLinkIcon className="w-4 h-4 ml-2" />
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
