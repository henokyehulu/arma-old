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
      className="relative flex flex-col overflow-hidden transition-colors border rounded-lg group aspect-video border-border bg-muted hover:bg-muted-foreground/10"
    >
      <header className="flex items-center flex-shrink-0 h-12 px-4">
        <h5 className="font-medium line-clamp-2">{category.name}</h5>
      </header>
      <main className="relative flex-1">
        <div className="absolute right-0 w-1/2 h-full transition-all rounded-tl-lg -bottom-2 bg-background group-hover:bottom-0">
          <div className="relative flex items-center justify-center w-full h-full overflow-hidden rounded-tl-lg">
            {category.companies[0]?.logos[0]?.url && (
              <Image
                src={category.companies[0].logos[0].url}
                fill
                alt="logo"
                className="object-cover rounded-tl-lg"
              />
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
