import type { IconType } from "react-icons/lib";
import {
  PiHouseSimple as BrowseIcon,
  PiSquaresFour as CategoriesIcon,
  PiListPlus as ContributeIcon,
} from "react-icons/pi";
import {
  RiGithubFill as GithubIcon,
  RiTwitterXLine as XIcon,
} from "react-icons/ri";

export interface LinkProps {
  icon?: IconType;
  label: string;
  path: string;
  isExternalLink?: boolean;
}

export const pages: LinkProps[] = [
  {
    icon: BrowseIcon,
    label: "Browse",
    path: "/",
  },
  {
    icon: ContributeIcon,
    label: "Contribute",
    path: "/contribute",
  },
  {
    icon: CategoriesIcon,
    label: "Categories",
    path: "/categories",
  },
];

export const socials: LinkProps[] = [
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

export const resources: LinkProps[] = [
  {
    label: "Privacy",
    path: "/privacy",
  },
  {
    label: "Terms",
    path: "/terms",
  },
];
