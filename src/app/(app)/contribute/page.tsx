"use client";
import CreateCategoryForm from "@/components/forms/create-category.form";
import CreateCompanyForm from "@/components/forms/create-company.form";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { NextPage } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PiArrowDown as DownIcon } from "react-icons/pi";

interface TabProps {
  name: string;
  value: string;
  children?: React.ReactNode;
}

const tabs: TabProps[] = [
  {
    name: "Company",
    value: "company",
    children: <CreateCompanyForm />,
  },
  {
    name: "Category",
    value: "category",
    children: <CreateCategoryForm />,
  },
];

const Page: NextPage = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <Badge variant={"secondary"}>Alpha</Badge>
        <h1 className="text-4xl font-bold md:text-6xl">
          Arma + You = ArmaYousome! Contribute today.
        </h1>
        <p className="mx-auto max-w-lg text-sm text-muted-foreground md:text-lg">
          Contribute logos to our ever-growing library and share great design
          patterns with thousands of product designers and devleopers in
          Ethiopia.
        </p>
        <span className="text-xs">
          &apos; Sry for that dead ahh joke &apos;
        </span>
        <Link
          href={"#forms"}
          className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
        >
          <DownIcon className="h-5 w-5" />
        </Link>
        {/* <Button size={"lg"}>Upload logos</Button> */}
      </div>
      <Tabs
        id="forms"
        defaultValue={
          tabParam &&
          tabs
            .map((tab) => tab.value.toLowerCase())
            .includes(tabParam.toLowerCase())
            ? tabParam
            : tabs[0]?.value
        }
        className="mx-auto w-full max-w-sm space-y-8"
      >
        <TabsList
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
          }}
        >
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.children}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Page;
