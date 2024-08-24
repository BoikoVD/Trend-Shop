"use client";

import { useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import { Categories } from "../../components/Categories";

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const { categories } = useCategories();

  return (
    <main className="container">
      <Categories
        selectedCategory={selectedCategory}
        categories={categories}
        setCategory={setSelectedCategory}
      />
    </main>
  );
}
