"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { IconType } from "react-icons/lib";
import {
  PiSquaresFour as BrowseIcon,
  PiFlagBannerDuotone as FlagIcon,
  PiUploadSimple as UploadIcon,
} from "react-icons/pi";
import {
  RiGithubFill as GithubIcon,
  RiTwitterXLine as XIcon,
} from "react-icons/ri";
import HeaderMenu from "../header.menu";
import ModeToggle from "../mode.toggle";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import SearchDialog from "./search.dialog";

export interface LinkProps {
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
];
const socials: LinkProps[] = [
  {
    icon: GithubIcon,
    label: "Github",
    path: "https://github.com/henokyehulu/arma",
    isExternalLink: true,
  },
  {
    icon: XIcon,
    label: "Twitter",
    path: "https://x.com/henokyehulu",
    isExternalLink: true,
  },
];

// interface HeaderProps {
// categories: ({
//   _count: {
//     companies: number;
//   };
// } & Category)[];
// companies: Company[];
// }
const Header: React.FC = () => {
  const [openSearchDialog, setOpenSearchDialog] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenSearchDialog((openSearchDialog) => !openSearchDialog);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
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
      <div className="flex items-center justify-center flex-1">
        <SearchDialog
          open={openSearchDialog}
          setOpen={setOpenSearchDialog}
          links={links}
          socials={socials}
        />
        {/* <Input placeholder="Search..." className="max-w-sm" /> */}
      </div>
      <ModeToggle />
      <div className="items-center hidden gap-2 md:flex">
        <HeaderMenu links={links} socials={socials} />
      </div>
    </header>
  );
};

export default Header;
