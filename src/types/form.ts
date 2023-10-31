import { z } from "zod";

// Category

// Create
export const SCreateCategory = z.object({
  name: z.string().max(25),
  slug: z.string(),
});
export type TCreateCategory = z.infer<typeof SCreateCategory>;
