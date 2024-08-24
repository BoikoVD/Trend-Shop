import axios from "axios";
import {
  Categories,
  Products,
  schemaCategories,
  schemaProducts
} from "../schemas/schemas";

export async function getCategories(): Promise<Categories> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  if (response.data) {
    const result = schemaCategories.parse(response.data);
    return result;
  } else {
    throw new Error("[Get Categories api]: No categories data!");
  }
}

export async function getProducts({
  categoryId,
  offset,
  limit
}: {
  categoryId: number;
  offset: number;
  limit: number;
}): Promise<Products> {
  const url =
    categoryId === 0
      ? `${process.env.NEXT_PUBLIC_API_URL}/products?offset=${offset}&limit=${limit}`
      : `${process.env.NEXT_PUBLIC_API_URL}/products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`;
  const response = await axios.get(url);
  if (response.data) {
    const result = schemaProducts.parse(response.data);
    return result;
  } else {
    throw new Error("[Get Products api]: No products data!");
  }
}
