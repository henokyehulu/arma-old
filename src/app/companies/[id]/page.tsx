import DownloadAndShare from "@/components/downloadandshare.menu";
import GoBack from "@/components/go-back.button";
import LogoCard from "@/components/logo.card";
import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { api } from "@/trpc/server";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PiPlanet as GlobeIcon } from "react-icons/pi";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: NextPage<PageProps> = async ({ params }) => {
  const company = await api.company.show.query({ id: params.id });
  if (!company) notFound();
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-8 pb-4">
        <div className="flex items-center justify-between">
          <GoBack />
          <div className="flex items-center gap-2">
            <DownloadAndShare />
            {company.website ? (
              <Link
                target="_blank"
                href={company.website}
                className={buttonVariants({ class: "px-2.5" })}
              >
                <div className="flex items-center gap-2">
                  <GlobeIcon className="h-5 w-5" />
                  <div className="flex flex-col leading-3">
                    <p className="text-[8px]">Visit</p>
                    <h5 className="text-sm leading-3">{company.name}</h5>
                  </div>
                </div>
              </Link>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="pointer-events-none relative flex h-[140px] w-[140px] items-center justify-center rounded-lg border">
            {company.avatar ? (
              <Image
                src={company.avatar}
                alt={`${company.name}-avatar`}
                fill
                className="rounded-lg object-cover"
              />
            ) : (
              <p className="text-8xl font-bold">{company.name.slice(0, 1)}</p>
            )}
          </div>
          <h1 className="text-4xl font-bold">{company.name}</h1>
          {company.motto ? (
            <p className="text-muted-foreground">{company.motto}</p>
          ) : null}
          <span className="text-sm text-muted-foreground">
            &copy; {company.legalName}
          </span>
          {company.category ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4">
              <h4 className="text-sm font-medium">Company category</h4>
              <Link
                href={`/categories/${company.category.slug}`}
                className={badgeVariants({ variant: "secondary" })}
              >
                {company.category.name}
              </Link>
            </div>
          ) : null}
        </div>
      </header>
      <main className="grid gap-4 md:grid-cols-2">
        {company.logos.map((logo) => (
          <LogoCard key={logo.id} logo={logo} />
        ))}
      </main>
    </div>
  );
};

export default Page;
