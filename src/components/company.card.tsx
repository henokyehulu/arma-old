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
      className="flex flex-col gap-4 asz group"
    >
      <main className="flex p-6 rounded-lg group aspect-video bg-accent group-hover:bg-accent/50">
        <div className="relative w-full h-full bg-white rounded-lg pointer-events-none">
          {/* <Badge className="absolute z-10 -left-4 -top-2">New</Badge> */}
          {company.avatar ? (
            <Image
              src={company.avatar}
              alt={`${company.name}-avatar`}
              fill
              className="object-cover rounded-lg"
            />
          ) : null}
        </div>
      </main>
      <footer className="flex items-center gap-2">
        <div className="flex items-center flex-1 gap-4">
          <div className="relative flex items-center justify-center flex-shrink-0 w-10 h-10 overflow-hidden border rounded-md pointer-events-none">
            {company.avatar ? (
              <Image
                src={company.avatar}
                alt={`${company.name}-avatar`}
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <p className="text-xl font-bold">{company.name.slice(0, 1)}</p>
            )}
          </div>
          <div className="leading-5">
            <h4 className="font-medium line-clamp-1 group-hover:underline">
              {company.name}
            </h4>
            <p className="text-sm line-clamp-1 text-muted-foreground">
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
