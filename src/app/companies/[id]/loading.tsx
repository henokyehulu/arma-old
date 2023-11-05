import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-8 pb-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-9 w-9" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-32" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <Skeleton className="h-[140px] w-[140px] rounded-lg" />
          <Skeleton className="h-[40px] w-1/5" />
          <Skeleton className="h-[20px] w-1/4 rounded-lg" />
          <Skeleton className="h-[20px] w-1/12 rounded-lg" />
          <Skeleton className="h-[80px] w-[160px] rounded-lg border" />
        </div>
      </header>
      <main className="grid gap-4 md:grid-cols-2">
        <Skeleton className="aspect-[16/10] rounded-lg" />
        <Skeleton className="aspect-[16/10] rounded-lg" />
        <Skeleton className="aspect-[16/10] rounded-lg" />
        <Skeleton className="aspect-[16/10] rounded-lg" />
      </main>
    </div>
  );
};

export default Loading;
