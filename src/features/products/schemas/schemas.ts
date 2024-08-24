import { z } from "zod";

export const schemaCategory = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  creationAt: z.string(),
  updatedAt: z.string()
});

export type Category = z.infer<typeof schemaCategory>;

export const schemaCategories = z.array(schemaCategory);

export type Categories = z.infer<typeof schemaCategories>;
