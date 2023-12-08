"use client";
import { api } from "@/trpc/react";
import { CreateCompanySchema, type CreateCompanyType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
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
import CategorySelect from "@/app/(app)/contribute/_components/category.select";
import type { Category } from "@prisma/client";

const CreateCompanyForm: React.FC = ({}) => {
  const [category, setCategory] = useState<Category | null>(null);
  const form = useForm<CreateCompanyType>({
    mode: "onChange",
    resolver: zodResolver(CreateCompanySchema),
    defaultValues: {
      name: "",
      legalName: "",
      motto: "",
      categoryId: "",
      website: "",
      avatar: "",
      logos: [""],
    },
  });
  const { mutate, isLoading } = api.company.create.useMutation({
    onSuccess: (data) => {
      toast.success(
        `Hopfully ${data.name} will be added soon to our companies list.`,
      );
      form.reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (!category) return;
    form.setValue("categoryId", category.id);
    if (form.formState.errors.categoryId) form.clearErrors("categoryId");
  }, [category, form]);

  const onSubmit = form.handleSubmit((data) => {
    mutate(data);
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
                <Input placeholder="Eg. Awash Bank" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="legalName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Legal name</FormLabel>
              <FormControl>
                <Input placeholder="Eg. Awash Bank S.C." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="motto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Motto</FormLabel>
              <FormControl>
                <Input placeholder="Eg. Nurturing like the river" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={() => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <CategorySelect
                  disabled={isLoading}
                  category={category}
                  setCategory={setCategory}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="Eg. https://awashbank.com" {...field} />
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

export default CreateCompanyForm;
