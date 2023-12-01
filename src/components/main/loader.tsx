import { cn } from "@/lib/utils";
import React from "react";

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div>
      <span
        className={cn(
          "animate-flash ml-1 inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground",
          className,
        )}
      ></span>
      <span
        className={cn(
          "animate-flash ml-1 inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground [animation-delay:0.2s]",
          className,
        )}
      ></span>
      <span
        className={cn(
          "animate-flash ml-1 inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground [animation-delay:0.4s]",
          className,
        )}
      ></span>
    </div>
  );
};

export default Loader;
