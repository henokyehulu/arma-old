"use client";
import Loader from "@/components/main/loader";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import * as React from "react";
import {
  PiCaretUpDown as CaretSortIcon,
  PiCheck as CheckIcon,
} from "react-icons/pi";

const CategorySelect: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { data: categories, isLoading } = api.category.index.useQuery();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={isLoading}
          className={`w-full justify-between font-normal ${
            value
              ? categories?.find((category) => category.name === value)?.name
              : "!text-muted-foreground"
          }`}
        >
          {isLoading
            ? "Loading categories..."
            : value
            ? categories?.find((category) => category.name === value)?.name
            : "Select a category..."}
          {isLoading ? (
            <Loader className="w-4 h-4" />
          ) : (
            <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 PopoverContent">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No categories found.</CommandEmpty>
          <CommandGroup>
            {categories?.map((category) => (
              <CommandItem
                key={category.id}
                value={category.name}
                onSelect={(currentValue: typeof category.name) => {
                  setValue(currentValue === value ? "" : category.name);
                  setOpen(false);
                }}
              >
                <CheckIcon
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.name ? "opacity-100" : "opacity-0",
                  )}
                />
                {category.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategorySelect;
