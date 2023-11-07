"use client";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import type { Category, Company } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import {
  PiSquare as CategoryIcon,
  PiArrowUpRight as ExternalLinkIcon,
  PiMagnifyingGlass as SearchIcon,
} from "react-icons/pi";
import { Button } from "../ui/button";
import type { LinkProps } from "./header";

interface SearchDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links?: LinkProps[];
  socials?: LinkProps[];
  // categories?: ({
  //   _count: {
  //     companies: number;
  //   };
  // } & Category)[];
  // companies: Company[];
}

const SearchDialog: React.FC<SearchDialogProps> = ({
  open,
  setOpen,
  links,
  socials,
  // categories,
  // companies,
}) => {
  const router = useRouter();
  const runCommand = useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen],
  );

  return (
    <div className="flex w-full max-w-md">
      <Button
        onClick={() => setOpen(true)}
        variant={"secondary"}
        className="relative flex items-center justify-start w-full gap-2"
      >
        <SearchIcon className="w-5 h-5" />
        <p className="font-normal text-muted-foreground">Search...</p>
        <kbd className=" pointer-events-none absolute inset-y-0 right-4 my-auto hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono font-medium text-muted-foreground md:inline-flex">
          ⌘ K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {links?.map((link) => (
              <CommandItem
                key={link.path}
                value={link.label}
                onSelect={() => {
                  runCommand(() => router.push(link.path));
                }}
              >
                <link.icon className="w-4 h-4 mr-2" />
                <span>{link.label}</span>
                {link.isExternalLink ? (
                  <CommandShortcut>
                    <ExternalLinkIcon />
                  </CommandShortcut>
                ) : null}
              </CommandItem>
            ))}
          </CommandGroup>
          {/* <CommandGroup heading="Companies">
            {companies?.map((company) => (
              <CommandItem
                key={company.id}
                value={company.name}
                onSelect={() => {
                  runCommand(() => router.push("/companies/" + company.id));
                }}
              >
                <div className="relative w-5 h-5 mr-2 border rounded">
                  <Image
                    src={company.avatar ?? ""}
                    alt={company.name + "logo"}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <span>{company.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Categories">
            {categories?.map((category) => (
              <CommandItem
                key={category.id}
                value={category.name}
                onSelect={() => {
                  runCommand(() => router.push("/categories/" + category.slug));
                }}
              >
                <CategoryIcon className="w-4 h-4 mr-2" />
                <span>{category.name}</span>
                <CommandShortcut>{category._count.companies}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup> */}
          <CommandGroup heading="Socials">
            {socials?.map((social) => (
              <CommandItem
                key={social.path}
                value={social.label}
                onSelect={() => {
                  runCommand(() => router.push(social.path));
                }}
              >
                <social.icon className="w-4 h-4 mr-2" />
                <span>{social.label}</span>
                {social.isExternalLink ? (
                  <CommandShortcut>
                    <ExternalLinkIcon />
                  </CommandShortcut>
                ) : null}
              </CommandItem>
            ))}
          </CommandGroup>
          {/* <CommandGroup heading="Theme">
            <CommandItem>
              <PersonIcon className="w-4 h-4 mr-2" />
              <span>Light</span>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="w-4 h-4 mr-2" />
              <span>Dark</span>
            </CommandItem>
            <CommandItem>
              <GearIcon className="w-4 h-4 mr-2" />
              <span>System</span>
            </CommandItem>
          </CommandGroup> */}
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchDialog;
