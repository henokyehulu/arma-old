import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 pb-4">
        <Skeleton className="w-1/2 h-5 md:w-1/5" />
        <Skeleton className="w-1/3 h-9 md:w-1/6" />
        {/* <h1 className="text-4xl font-bold">Browse</h1> */}
        <Skeleton className="w-1/2 h-4 mt-6 md:w-1/4" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Skeleton className="aspect-[16/10] rounded-lg" />
        <Skeleton className="aspect-[16/10] rounded-lg" />
        <Skeleton className="aspect-[16/10] rounded-lg" />
        <Skeleton className="aspect-[16/10] rounded-lg" />
      </div>
    </div>
  );
};

export default Loading;
