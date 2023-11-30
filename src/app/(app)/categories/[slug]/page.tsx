import CompanyCard from "@/components/company.card";
import Date from "@/components/main/date";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/server";
import type { NextPage } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: NextPage<PageProps> = async ({ params }) => {
  const category = await api.category.show.query({ slug: params.slug });
  if (!category) notFound();
  return (
    <>
      {category.status === "PENDING" ? (
        <div className="flex flex-col items-center justify-center pt-20">
          <div className="mx-auto flex max-w-sm flex-col gap-4">
            <h1 className="text-xl font-medium">Category is under review.</h1>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">Submitted on</p>
              <Badge variant={"outline"}>
                <Date date={category.createdAt} format="ll" />
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              This is to ensure that the category meets the quality standards
              and does not contain any inappropriate or harmful content. Try
              searching for a different category or check back later when the
              review is done.
            </p>
            <Link href={"/categories"} className={cn(buttonVariants())}>
              View all categories
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 pb-4">
            <Link
              href={"/categories"}
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-fit w-fit p-0",
              )}
            >
              All Categories
            </Link>
            <h1 className="text-4xl font-bold">Browse</h1>
            <span className="mt-6 text-sm font-medium text-muted-foreground">
              Showing {category._count.companies} companies
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {category.companies.map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
