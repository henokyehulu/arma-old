import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center flex-shrink-0 px-4 py-8 text-center border-t">
      <p className="text-sm text-muted-foreground">
        Built by{" "}
        <Link
          target="_blank"
          href={"https://x.com/uglyhenok"}
          className={cn(buttonVariants({ variant: "link" }), "h-fit p-0")}
        >
          Henok Yehulu
        </Link>
        . The source code is available on{" "}
        <Link
          target="_blank"
          href={"https://github.com/henokyehulu/arma"}
          className={cn(buttonVariants({ variant: "link" }), "h-fit p-0")}
        >
          GitHub
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
