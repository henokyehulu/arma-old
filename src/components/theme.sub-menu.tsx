"use client";
import { useTheme } from "next-themes";
import React from "react";
import {
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";
import { themes } from "@/data/themes";
import { PiCheck as CheckIcon, PiPalette as ThemeIcon } from "react-icons/pi";

const ThemeSubMenu: React.FC = () => {
  const { theme: currentTheme, setTheme } = useTheme();
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <ThemeIcon className="mr-2 h-5 w-5" />
        Themes
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setTheme(theme.value)}
          >
            {theme.name}
            <DropdownMenuShortcut>
              {theme.value === currentTheme && <CheckIcon />}
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        ))}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
};

export default ThemeSubMenu;
