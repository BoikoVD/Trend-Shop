import { Dispatch, SetStateAction } from "react";
import { BiCategory } from "react-icons/bi";
import { Categories as ICategories } from "../../schemas/schemas";
import { CategoryItem } from "./parts/CategoryItem";

interface IProps {
  selectedCategory: number;
  categories: ICategories;
  setCategory: Dispatch<SetStateAction<number>>;
  className?: string;
}

export function Categories({
  selectedCategory,
  categories,
  setCategory,
  className
}: IProps) {
  return (
    <div
      className={`rounded-xl border border-light-400 bg-white py-4 dark:border-gray-300 dark:bg-gray-500 md:max-w-[280px] ${className}`}
    >
      <div className="flex items-center gap-2 pl-2 pr-10">
        <BiCategory size={24} className="text-purple-400" />
        <p className="text-xl">Categories:</p>
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        <li>
          <CategoryItem
            selectedCategory={selectedCategory}
            setCategory={setCategory}
            categoryData={{
              id: 0,
              name: "All",
              image: "",
              creationAt: "",
              updatedAt: ""
            }}
          />
        </li>
        {categories.map(category => (
          <li key={category.id}>
            <CategoryItem
              selectedCategory={selectedCategory}
              categoryData={category}
              setCategory={setCategory}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
