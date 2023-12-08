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
import { pages, socials } from "@/data/links";
import { themes } from "@/data/themes";
import type { Category } from "@prisma/client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import {
  PiSquare as CategoryIcon,
  PiPlusSquare as CategoryAddIcon,
  PiCheck as CheckIcon,
  PiArrowUpRight as ExternalLinkIcon,
  PiMagnifyingGlass as SearchIcon,
} from "react-icons/pi";
import { Button } from "../ui/button";

interface SearchDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  categories?: ({
    _count: {
      companies: number;
    };
  } & Category)[];
  // companies: Company[];
}

const SearchDialog: React.FC<SearchDialogProps> = ({
  open,
  setOpen,
  categories,
  // companies,
}) => {
  const { theme: currentTheme, setTheme } = useTheme();
  const router = useRouter();
  const runCommand = useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen],
  );

  return (
    <div className="flex w-full max-w-md items-center justify-end sm:justify-start">
      <Button
        onClick={() => setOpen(true)}
        variant={"secondary"}
        className="relative hidden w-full items-center justify-start gap-2 sm:flex"
      >
        <SearchIcon className="h-5 w-5" />
        <p className="font-normal text-muted-foreground">Search...</p>
        <kbd className="pointer-events-none absolute inset-y-0 right-4 my-auto hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono font-medium text-muted-foreground md:inline-flex">
          ⌘ K
        </kbd>
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="sm:hidden"
        variant={"ghost"}
        size={"icon"}
      >
        <SearchIcon className="h-4 w-4" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
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
          */}
          <CommandGroup heading="Categories">
            {categories?.map((category) => (
              <CommandItem
                key={category.id}
                value={category.name}
                onSelect={() => {
                  runCommand(() => router.push("/categories/" + category.slug));
                }}
              >
                <CategoryIcon className="mr-2 h-4 w-4" />
                <span>{category.name}</span>
                <CommandShortcut>{category._count.companies}</CommandShortcut>
              </CommandItem>
            ))}
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/contribute?tab=category"));
              }}
            >
              <CategoryAddIcon className="mr-2 h-4 w-4" />
              <span>Add a new category</span>
              {/* <CommandShortcut>{category._count.companies}</CommandShortcut> */}
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Pages">
            {pages.map((page) => (
              <CommandItem
                key={page.path}
                value={page.label}
                onSelect={() => {
                  runCommand(() => router.push(page.path));
                }}
              >
                {page.icon && <page.icon className="mr-2 h-4 w-4" />}
                <span>{page.label}</span>
                {page.isExternalLink ? (
                  <CommandShortcut>
                    <ExternalLinkIcon />
                  </CommandShortcut>
                ) : null}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Theme">
            {themes.map((theme) => (
              <CommandItem
                key={theme.value}
                onSelect={() => runCommand(() => setTheme(theme.value))}
              >
                <theme.icon className="mr-2 h-4 w-4" />
                {theme.name}
                <CommandShortcut>
                  {theme.value === currentTheme && <CheckIcon />}
                </CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Socials">
            {socials.map((social) => (
              <CommandItem
                key={social.path}
                value={social.label}
                onSelect={() => {
                  runCommand(() => router.push(social.path));
                }}
              >
                {social.icon && <social.icon className="mr-2 h-4 w-4" />}
                <span>{social.label}</span>
                {social.isExternalLink ? (
                  <CommandShortcut>
                    <ExternalLinkIcon />
                  </CommandShortcut>
                ) : null}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchDialog;
