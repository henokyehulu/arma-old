"use client";
import type { Logo } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { PiDownloadSimple as DownloadIcon } from "react-icons/pi";
import { Button } from "./ui/button";

interface LogoCardProps {
  logo: Logo;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo }) => {
  const router = useRouter();
  return (
    <Link
      href={`/logos/${logo.id}`}
      className="flex aspect-[16/10] flex-col gap-4 overflow-hidden rounded-lg border"
    >
      <main className="relative flex h-full rounded-lg group bg-accent">
        {/* <div className="absolute z-10 right-4 top-4">
          <DownloadAndShare />
        </div> */}
        <Image
          src={logo.url}
          alt="logo"
          fill
          onClick={() => router.push(`/logos/${logo.id}`)}
          className="object-cover rounded-lg cursor-pointer "
        />
        <footer className="absolute bottom-0 z-10 items-center hidden w-full gap-2 p-4 bg-gradient-to-t from-black/50 to-transparent group-hover:flex">
          <Button size={"lg"} className="w-full">
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download
          </Button>
        </footer>
      </main>
    </Link>
  );
};

export default LogoCard;
