"use client";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils/constants";
import { getProducts } from "../api/api";
import { Products } from "../schemas/schemas";

interface IProducts {
  products: Products;
  isLoading: boolean;
  isPlaceholderData: boolean;
}

export function useProducts({
  categoryId,
  offset,
  limit
}: {
  categoryId: number;
  offset: number;
  limit: number;
}): IProducts {
  const {
    data: products,
    isLoading,
    isPlaceholderData
  } = useQuery({
    queryKey: [
      `${QUERY_KEYS.products}`,
      `category=${categoryId}`,
      `offset=${offset}`,
      `limit=${limit}`
    ],
    queryFn: () => getProducts({ categoryId, offset, limit }),
    placeholderData: keepPreviousData
  });

  return { products: products ?? [], isLoading, isPlaceholderData };
}
