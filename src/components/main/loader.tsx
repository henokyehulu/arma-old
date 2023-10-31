import { cn } from "@/lib/utils";
import React from "react";
import { PiSpinner as LoadingIcon } from "react-icons/pi";

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <LoadingIcon className={cn("h-5 w-5 shrink-0 animate-spin", className)} />
  );
};

export default Loader;
