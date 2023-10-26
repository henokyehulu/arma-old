"use client";
import type { Logo } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { PiDownloadSimple as DownloadIcon } from "react-icons/pi";
import DownloadAndShare from "./downloadandshare.menu";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface LogoCardProps {
  logo: Logo;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <main className="relative flex p-6 rounded-lg group aspect-video bg-accent">
        <div className="absolute z-10 right-4 top-4">
          <DownloadAndShare />
        </div>
        <Image
          src={logo.url}
          alt="logo"
          fill
          onClick={() => router.push(`/logos/${logo.id}`)}
          className="object-cover rounded-lg cursor-pointer"
        />
      </main>
      <footer className="flex items-center gap-2">
        <Button size={"lg"} className="w-full">
          <DownloadIcon className="w-5 h-5 mr-2" />
          Download
        </Button>
      </footer>
    </div>
  );
};

export default LogoCard;
