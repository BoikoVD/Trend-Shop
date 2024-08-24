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
  limit,
  searchQuery
}: {
  categoryId: number;
  offset: number;
  limit: number;
  searchQuery: string;
}): Promise<Products> {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/products?` ?? "";
  if (categoryId !== 0) url = url + `categoryId=${categoryId}&`;
  if (searchQuery) url = url + `title=${searchQuery}&`;
  url = url + `offset=${offset}&limit=${limit}`;

  const response = await axios.get(url);
  if (response.data) {
    const result = schemaProducts.parse(response.data);
    return result;
  } else {
    throw new Error("[Get Products api]: No products data!");
  }
}
