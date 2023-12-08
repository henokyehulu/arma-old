"use client";
import { slugify } from "@/lib/slugify";
import { api } from "@/trpc/react";
import { CreateCategorySchema, type CreateCategoryType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Loader from "../main/loader";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const CreateCategoryForm: React.FC = () => {
  const form = useForm<CreateCategoryType>({
    mode: "onChange",
    resolver: zodResolver(CreateCategorySchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  });
  const { mutate, isLoading } = api.category.create.useMutation({
    onSuccess: (data) => {
      form.reset();
      toast.success(
        `Hopfully ${data.name} will be added soon to our categories list.`,
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutate({ ...data, slug: slugify(data.name) });
  });
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Eg. Business" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
          {isLoading ? <Loader /> : "Submit for review"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateCategoryForm;
