import { Dispatch, SetStateAction } from "react";
import { Category } from "../../../schemas/schemas";

interface IProps {
  selectedCategory: number;
  categoryData: Category;
  setCategory: Dispatch<SetStateAction<number>>;
}

export function CategoryItem({
  selectedCategory,
  categoryData,
  setCategory
}: IProps) {
  return (
    <button
      onClick={() => setCategory(categoryData.id)}
      className={`w-full bg-gradient-to-r from-zinc-200 px-4 py-2 text-left dark:from-gray-400 dark:to-transparent ${categoryData.id === selectedCategory ? "border-l-2 border-purple-400" : ""}`}
    >
      {categoryData.name}
    </button>
  );
}
