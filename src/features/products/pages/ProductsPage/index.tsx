"use client";

import { useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import { Categories } from "../../components/Categories";
import { ProductList } from "../../components/ProductList";
import { useProducts } from "../../hooks/useProducts";

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const { categories } = useCategories();
  const { products } = useProducts({
    categoryId: selectedCategory,
    offset: 0,
    limit: 10
  });

  return (
    <main className="container flex flex-col gap-6 md:flex-row md:items-start">
      <ProductList products={products} className="order-2 md:order-1" />
      <Categories
        selectedCategory={selectedCategory}
        categories={categories}
        setCategory={setSelectedCategory}
        className="order-1 md:order-2"
      />
    </main>
  );
}
