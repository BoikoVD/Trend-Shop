"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils/constants";
import { getCategories } from "../api/api";
import { Categories } from "../schemas/schemas";

interface ICategories {
  categories: Categories;
}

const initialData: Categories = [
  {
    id: 1,
    name: "Clothes",
    image: "",
    creationAt: "2024-08-24T00:44:40.000Z",
    updatedAt: "2024-08-24T00:44:40.000Z"
  },
  {
    id: 2,
    name: "Electronics",
    image: "",
    creationAt: "2024-08-24T00:44:40.000Z",
    updatedAt: "2024-08-24T00:44:40.000Z"
  },
  {
    id: 3,
    name: "Furniture",
    image: "",
    creationAt: "2024-08-24T00:44:40.000Z",
    updatedAt: "2024-08-24T00:44:40.000Z"
  },
  {
    id: 4,
    name: "Shoes",
    image: "",
    creationAt: "2024-08-24T00:44:40.000Z",
    updatedAt: "2024-08-24T00:44:40.000Z"
  },
  {
    id: 5,
    name: "Miscellaneous",
    image: "",
    creationAt: "2024-08-24T00:44:40.000Z",
    updatedAt: "2024-08-24T00:44:40.000Z"
  }
];

export function useCategories(): ICategories {
  const { data: categories } = useQuery({
    queryKey: [QUERY_KEYS.categories],
    queryFn: getCategories,
    initialData: initialData
  });

  return { categories: categories };
}
