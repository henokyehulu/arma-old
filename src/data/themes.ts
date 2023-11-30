import type { IconType } from "react-icons/lib";
import {
  PiMoon as MoonIcon,
  PiSun as SunIcon,
  PiMonitor as SystemIcon,
} from "react-icons/pi";

export interface ThemeProps {
  name: string;
  value: string;
  icon: IconType;
}

export const themes: ThemeProps[] = [
  {
    name: "Light",
    value: "light",
    icon: SunIcon,
  },
  {
    name: "Dark",
    value: "dark",
    icon: MoonIcon,
  },
  {
    name: "System",
    value: "system",
    icon: SystemIcon,
  },
];
