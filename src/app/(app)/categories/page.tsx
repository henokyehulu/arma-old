import { api } from "@/trpc/server";
import type { Category } from "@prisma/client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryCardProps {
  category: {
    companies: {
      logos: { url: string }[];
    }[];
  } & Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      href={"/categories/" + category.slug}
      className="group relative flex aspect-video flex-col overflow-hidden rounded-lg bg-muted transition-colors hover:bg-muted-foreground/10"
    >
      <header className="flex h-12 flex-shrink-0 items-center px-4">
        <h5 className="line-clamp-2 font-medium">{category.name}</h5>
      </header>
      <main className="relative flex-1">
        <div className="absolute -bottom-2 right-0 h-full w-1/2 rounded-tl-lg bg-white transition-all group-hover:bottom-0">
          <div className="relative h-full w-full rounded-tl-lg">
            {category.companies[0]?.logos[0]?.url ? (
              <Image
                src={category.companies[0].logos[0].url}
                fill
                alt="logo"
                className="rounded-tl-lg object-cover"
              />
            ) : (
              <h1>{category.name.slice(0, 1)}</h1>
            )}
          </div>
        </div>
      </main>
    </Link>
  );
};

const Page: NextPage = async ({}) => {
  const categories = await api.category.getAllForCategories.query();
  return (
    <div className="flex flex-col gap-4">
      <div className="pb-4">
        <h1 className="text-4xl font-bold">All Categories</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Page;
