"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { type SubmitHandler, useForm } from "react-hook-form";
import { SCreateCategory, type TCreateCategory } from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/trpc/react";
import Loader from "./loader";
import { toast } from "sonner";

interface RequestContentDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequestContentDialog: React.FC<RequestContentDialogProps> = ({
  open,
  setOpen,
}) => {
  const { mutate, isLoading } = api.category.create.useMutation({
    onSuccess: (data) => {
      toast.success(
        `Hopfully ${data.name} will be added soon to our category list.`,
      );
      reset();
      setOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<TCreateCategory>({
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
    mutate(data);
  };
  const onClose = () => {
    setOpen(false);
    reset();
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle>Request content</DialogTitle>
        </DialogHeader>
        <main>
          <Tabs defaultValue="category" className="space-y-4">
            <div className="flex items-center justify-center">
              <TabsList>
                <TabsTrigger value="category">Category</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="category" className="focus-within:ring-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm text-muted-foreground"
                  >
                    Name
                  </Label>
                  <Input
                    disabled={isLoading}
                    id="name"
                    placeholder="Eg. Business"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <Button disabled={isLoading} type="submit" className="mt-4">
                  {isLoading ? <Loader /> : "Submit for review"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </main>
      </DialogContent>
    </Dialog>
  );
};

export default RequestContentDialog;
