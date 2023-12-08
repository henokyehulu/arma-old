import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NextPage } from "next";
import Link from "next/link";
import { PiSealWarningFill as NotFoundIcon } from "react-icons/pi";

const NotFound: NextPage = () => {
  return (
    <div className="relative flex items-center justify-center pt-20">
      <div className="mx-auto max-w-sm space-y-4">
        <div className="space-y-2">
          <NotFoundIcon className="h-12 w-12 text-destructive" />
          <h1 className="text-xl font-medium">Category was not found.</h1>
          <p className="text-sm text-muted-foreground">
            If you think this category should be added to our list, click the
            button below.
          </p>
        </div>
        <Link
          href={"/contribute?tab=category"}
          className={cn(buttonVariants(), "w-full")}
        >
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
