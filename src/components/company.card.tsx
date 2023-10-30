import type { Company, Logo } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CompanyCardProps {
  company: Company & { logos: Logo[] };
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <Link
      href={`/companies/${company.id}`}
      className="group flex flex-col gap-4 rounded-lg transition-all"
    >
      <main className="aspect-[16/10] rounded-lg bg-accent group-hover:bg-accent/75 md:p-8">
        <div className="relative h-full rounded-lg border bg-white">
          <Image
            src={company.logos[0]?.url ?? ""}
            alt={`${company.name}-logo`}
            fill
            className="rounded-lg object-cover object-top"
          />
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
          {/* <DownloadAndShare /> */}
        </div>
      </footer>
    </Link>
  );
};

export default CompanyCard;
