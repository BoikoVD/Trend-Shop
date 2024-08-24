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

export const schemaProduct = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  images: z.array(z.string()),
  creationAt: z.string(),
  updatedAt: z.string(),
  category: schemaCategory
});

export type Product = z.infer<typeof schemaProduct>;

export const schemaProducts = z.array(schemaProduct);

export type Products = z.infer<typeof schemaProducts>;
