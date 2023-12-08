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
import type { Category } from "@prisma/client";
import * as React from "react";
import {
  PiCaretUpDown as CaretSortIcon,
  PiCheck as CheckIcon,
} from "react-icons/pi";

interface CategorySelectProps {
  category: Category | null;
  setCategory: React.Dispatch<React.SetStateAction<Category | null>>;
  disabled?: boolean;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  category: selectedCategory,
  setCategory: setSelectedCategory,
  disabled,
}) => {
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");
  const { data: categories, isLoading } = api.category.index.useQuery();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={isLoading || disabled}
          className={`w-full justify-between font-normal ${
            selectedCategory
              ? categories?.find(
                  (category) => category.name === selectedCategory.name,
                )?.name
              : "!text-muted-foreground"
          }`}
        >
          {isLoading
            ? "Loading categories..."
            : selectedCategory?.name
            ? categories?.find(
                (category) => category.name === selectedCategory.name,
              )?.name
            : "Select a category..."}
          {isLoading ? (
            <Loader className="w-1 h-1" />
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
                onSelect={(currentValue) => {
                  setSelectedCategory(
                    currentValue == selectedCategory?.name ? null : category,
                  );
                  setOpen(false);
                }}
              >
                <CheckIcon
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedCategory?.name === category.name
                      ? "opacity-100"
                      : "opacity-0",
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
