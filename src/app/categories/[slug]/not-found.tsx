"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/trpc/react";
import { SCreateCategory, type TCreateCategory } from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { NextPage } from "next";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const NotFound: NextPage = () => {
  const { slug } = useParams();
  const { mutateAsync, isLoading } = api.category.create.useMutation();
  const toTitle = (slug: string) =>
    slug
      .toLowerCase()
      .split(/[-_.\s]/)
      .map((w) => `${w.charAt(0).toUpperCase()}${w.substr(1)}`)
      .join(" ");
  const category = toTitle(slug as string);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TCreateCategory>({
    defaultValues: {
      name: category,
      slug: category
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, ""),
    },
    resolver: zodResolver(SCreateCategory),
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "name" && type === "change" && value.name)
        setValue(
          "slug",
          value.name
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, ""),
        );
    });
    return () => subscription.unsubscribe();
  }, [setValue, watch]);
  const onSubmit: SubmitHandler<TCreateCategory> = (data) => {
    toast.promise(mutateAsync(data), {
      loading: "Loading...",
      success: (data) =>
        `Hopfully ${data.name} will be added soon to our category list.`,
      error: () => `Error!`,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="flex flex-col max-w-sm gap-4 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="space-y-4">
            <Label htmlFor="name" className="flex flex-col gap-2 text-left">
              <h1 className="text-xl font-medium">
                <span className="animate-text-shimmer bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%] bg-clip-text text-transparent">
                  {watch("name")}
                </span>{" "}
                was not found.
              </h1>
              <p className="text-sm text-muted-foreground">
                If you think this category should be added to our list, click
                the button below.
              </p>
            </Label>
            <Input
              disabled={isLoading}
              id="name"
              defaultValue={category}
              placeholder="Eg. Business"
              {...register("name")}
            />
            {errors.name && errors.name.types && <p>{errors.name.message}</p>}
          </div>
          <Button disabled={isLoading} type="submit">
            Submit for review
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NotFound;
