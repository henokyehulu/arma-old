import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex-1">
      <header className="-mx-4 -mt-8 flex h-12 items-center justify-between gap-4 border-b px-4">
        <div className="flex-shrink-0">
          <Skeleton className="h-9 w-9" />
        </div>
        <div className="flex flex-1 items-center justify-between gap-2 border-x px-4">
          <div className="flex flex-1 items-center justify-center">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-lg" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
          {/* <div className="flex items-center gap-2">
            <Button size={"sm"}>
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download
            </Button>
          </div> */}
        </div>
        <div className="flex-shrink-0">
          <Skeleton className="h-9 w-9" />
        </div>
      </header>
      <main className="relative -mx-4 flex items-center justify-center bg-muted px-4 py-20">
        <Skeleton className="-mx-4 aspect-video w-full max-w-3xl" />
      </main>
    </div>
  );
};

export default Loading;
