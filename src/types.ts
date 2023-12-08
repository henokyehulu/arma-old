import * as z from "zod";

export const CreateCompanySchema = z.object({
  name: z.string().min(1, "Unfortunately, you can't leave this blank."),
  legalName: z.string().min(1, "Unfortunately, you can't leave this blank."),
  motto: z.string(),
  avatar: z.string(),
  website: z.string().url().or(z.literal("")),
  categoryId: z.string().min(1, "Unfortunately, you can't leave this blank."),
  logos: z.string().array(),
});

export type CreateCompanyType = z.infer<typeof CreateCompanySchema>;

export const CreateCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Unfortunately, you can't leave this blank.")
    .max(25, "Category names can't be longer than 25 characters."),
  slug: z.string(),
});

export type CreateCategoryType = z.infer<typeof CreateCategorySchema>;
