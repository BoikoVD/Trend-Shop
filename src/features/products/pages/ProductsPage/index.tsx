"use client";
import { useEffect, useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import { useProducts } from "../../hooks/useProducts";
import { Categories } from "../../components/Categories";
import { ProductList } from "../../components/ProductList";
import { Pagination } from "./parts/Pagination";

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(12);
  const { categories } = useCategories();
  const { products, isLoading } = useProducts({
    categoryId: selectedCategory,
    offset: offset,
    limit: limit
  });

  useEffect(() => {
    setOffset(0);
  }, [selectedCategory]);

  return (
    <main className="container flex flex-col gap-6 md:flex-row md:items-start">
      <div className="order-2 flex flex-[1_1_auto] flex-col items-center md:order-1">
        {isLoading ? (
          <p className="mt-10 w-full text-center">Loading...</p>
        ) : products.length === 0 ? (
          <p className="mt-10 w-full text-center">No products!</p>
        ) : (
          <>
            <ProductList products={products} />
            <Pagination
              offset={offset}
              limit={limit}
              productsLength={products.length}
              setOffset={setOffset}
            />
          </>
        )}
      </div>
      <Categories
        selectedCategory={selectedCategory}
        categories={categories}
        setCategory={setSelectedCategory}
        className="order-1 md:order-2"
      />
    </main>
  );
}
