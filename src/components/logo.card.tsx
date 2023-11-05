import type { Logo } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiDownloadSimple as DownloadIcon } from "react-icons/pi";
import { Button } from "./ui/button";

interface LogoCardProps {
  logo: Logo;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo }) => {
  return (
    <Link
      href={`/logos/${logo.id}`}
      className="flex aspect-[16/10] flex-col gap-4 overflow-hidden rounded-lg border"
    >
      <main className="group relative flex h-full rounded-lg bg-accent">
        {/* <div className="absolute z-10 right-4 top-4">
          <DownloadAndShare />
        </div> */}
        <Image
          src={logo.url}
          alt="logo"
          fill
          className="cursor-pointer rounded-lg object-cover "
        />
        <footer className="absolute bottom-0 z-10 hidden w-full items-center gap-2 bg-gradient-to-t from-black/50 to-transparent p-4 group-hover:flex">
          <Button size={"lg"} className="w-full">
            <DownloadIcon className="mr-2 h-5 w-5" />
            Download
          </Button>
        </footer>
      </main>
    </Link>
  );
};

export default LogoCard;
