import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arma · Page not found",
};

const NotFound: NextPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="relative aspect-square w-40 overflow-hidden rounded-lg border border-border bg-muted">
        <Image fill src={"/images/DancingBaby.gif"} alt="dancing-baby-gif" />
      </div>
      <h1 className="font-medium text-muted-foreground">
        <span className="text-red-500">L</span> &quot;Page not found&quot;. But{" "}
        <span className="text-green-500">W</span> baby!
      </h1>
      <Link href={"/"} className={cn(buttonVariants({ variant: "outline" }))}>
        Take me home
      </Link>
    </div>
  );
};

export default NotFound;
