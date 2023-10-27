import GoBack from "@/components/go-back.button";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/server";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PiSidebarSimple as InspectorIcon } from "react-icons/pi";

interface PageProps {
  params: {
    id: string;
  };
}
const Page: NextPage<PageProps> = async ({ params }) => {
  const logo = await api.logo.show.query({ id: params.id });
  if (!logo) notFound();
  return (
    <div className="flex-1">
      <header className="flex items-center justify-between h-12 gap-4 px-4 -mx-4 -mt-8 border-b">
        <div className="flex-shrink-0">
          <GoBack />
        </div>
        <div className="flex items-center justify-between flex-1 gap-2 px-4 border-x">
          <div className="flex items-center justify-center flex-1">
            <Link
              href={`/companies/${logo.companyId}`}
              className="flex items-center gap-2 group"
            >
              <div className="relative w-8 h-8 border rounded-lg">
                {logo.company.avatar ? (
                  <Image
                    src={logo.company.avatar}
                    alt={`${logo.company.name}-avatar`}
                    fill
                    className="object-cover rounded-lg"
                  />
                ) : (
                  <p className="text-sm font-bold">
                    {logo.company.name.slice(0, 1)}
                  </p>
                )}
              </div>
              <h3 className="font-medium group-hover:underline">
                {logo.company.name}
              </h3>
            </Link>
          </div>
          {/* <div className="flex items-center gap-2">
              <Button size={"sm"}>
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download
              </Button>
            </div> */}
        </div>
        <div className="flex-shrink-0">
          <Button variant={"ghost"} size={"icon"}>
            <InspectorIcon className="w-5 h-5 rotate-180" />
          </Button>
        </div>
      </header>
      <main className="relative flex items-center justify-center px-4 py-20 -mx-4 bg-muted">
        <div className="relative flex w-full max-w-3xl -mx-4 bg-white border aspect-video">
          <Image src={logo.url} alt="logo" fill />
        </div>
        {/* <Button className="absolute bottom-4 right-4">
          <RelatedIcon className="w-5 h-5 mr-2" /> See related logos
        </Button> */}
      </main>
    </div>
  );
};

export default Page;
