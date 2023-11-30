import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { PiFlagBannerDuotone as FlagIcon } from "react-icons/pi";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

const Logo: React.FC = () => {
  return (
    <Link
      href={"/"}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "w-fit rounded-sm p-0 font-semibold hover:bg-transparent",
      )}
    >
      <FlagIcon className="mr-1 h-5 w-5 text-primary" />
      Arma
      <Badge variant={"secondary"} className="ml-1 rounded text-xs font-medium">
        Alpha
      </Badge>
    </Link>
  );
};

export default Logo;
