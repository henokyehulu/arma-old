import type { Company } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DownloadAndShare from "./downloadandshare.menu";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <Link
      href={`/companies/${company.id}`}
      className="asz group flex flex-col gap-4"
    >
      <main className="group flex aspect-video rounded-lg bg-accent p-6 transition-all group-hover:bg-accent/50">
        <div className="pointer-events-none relative h-full w-full rounded-lg bg-white">
          {/* <Badge className="absolute z-10 -left-4 -top-2">New</Badge> */}
          {company.avatar ? (
            <Image
              src={company.avatar}
              alt={`${company.name}-avatar`}
              fill
              className="rounded-lg object-cover"
            />
          ) : null}
        </div>
      </main>
      <footer className="flex items-center gap-2">
        <div className="flex flex-1 items-center gap-4">
          <div className="pointer-events-none relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border">
            {company.avatar ? (
              <Image
                src={company.avatar}
                alt={`${company.name}-avatar`}
                fill
                className="rounded-lg object-cover"
              />
            ) : (
              <p className="text-xl font-bold">{company.name.slice(0, 1)}</p>
            )}
          </div>
          <div className="leading-5">
            <h4 className="line-clamp-1 font-medium group-hover:underline">
              {company.name}
            </h4>
            <p className="line-clamp-1 text-sm text-muted-foreground">
              {company.motto}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <DownloadAndShare />
        </div>
      </footer>
    </Link>
  );
};

export default CompanyCard;
