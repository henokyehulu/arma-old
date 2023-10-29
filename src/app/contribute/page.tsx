"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PiArrowDown as DownIcon } from "react-icons/pi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadDropzone } from "@/utils/uploadthing";
import type { NextPage } from "next";

const Page: NextPage = ({}) => {
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
        <Button variant={"outline"} size={"icon"}>
          <DownIcon className="h-5 w-5" />
        </Button>
        {/* <Button size={"lg"}>Upload logos</Button> */}
      </div>
      <form className="mx-auto flex w-full max-w-xl flex-col gap-4 rounded-lg p-8">
        <div className="space-y-2">
          <Label htmlFor="category">Company category</Label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Category #1</SelectItem>
              <SelectItem value="dark">Category #2</SelectItem>
              <SelectItem value="system">Category #3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Company name</Label>
          <Input id="name" placeholder="Eg. Awash Bank" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="legalName">Company legal name</Label>
          <Input id="legalName" placeholder="Eg. Awash Bank S.C." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="motto">Company motto</Label>
          <Input id="motto" placeholder="Eg. Nurturing like the river" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="avatar">Company avatar</Label>
          <Input id="avatar" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Company website</Label>
          <Input id="website" placeholder="https://awashbank.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="logos">Company logos</Label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
        <Button>Submit for review</Button>
      </form>
    </div>
  );
};

export default Page;
