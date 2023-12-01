import { z } from "zod";

// Category

// Create
export const SCreateCategory = z.object({
  name: z
    .string()
    .transform((value) => value.replaceAll(" ", ""))
    .pipe(
      z
        .string()
        .min(1, "Category name is required.")
        .max(25, "Category name must contain at most 25 character(s)"),
    ),
  slug: z.string(),
});
export type TCreateCategory = z.infer<typeof SCreateCategory>;
