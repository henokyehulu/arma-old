"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { NextPage } from "next";
import { useParams } from "next/navigation";

const NotFound: NextPage = () => {
  const { slug } = useParams();
  const toTitle = (slug: string) =>
    slug
      .toLowerCase()
      .split(/[-_.\s]/)
      .map((w) => `${w.charAt(0).toUpperCase()}${w.substr(1)}`)
      .join(" ");
  const category = toTitle(slug as string);
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="mx-auto flex max-w-sm flex-col gap-4">
        <form className="flex flex-col gap-4">
          <div className="space-y-4">
            <Label htmlFor="name" className="flex flex-col gap-2 text-left">
              <h1 className="text-xl font-medium">
                Category{" "}
                <span className="text-muted-foreground">{category}</span> not
                found.
              </h1>
              <p className="text-sm text-muted-foreground">
                If you think this category should be added to our list click the
                button down below.
              </p>
            </Label>
            <Input
              id="name"
              defaultValue={category}
              placeholder="Eg. Business"
            />
          </div>
          <Button>Submit for review</Button>
        </form>
      </div>
    </div>
  );
};

export default NotFound;
