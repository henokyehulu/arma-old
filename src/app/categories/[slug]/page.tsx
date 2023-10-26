import CompanyCard from "@/components/company.card";
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
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 pb-4">
        <Link href={"/categories"} className="font-medium hover:underline">
          Company Categories
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
    </main>
  );
};

export default Page;
