import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

interface IProps {
  itemData: {
    id: number;
    title: string;
    description: string;
    Icon: IconType;
  };
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function ServiceItem({
  itemData,
  activeIndex,
  setActiveIndex
}: IProps) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-6 rounded border-4 border-purple-400 p-6 transition-all duration-300 ${activeIndex === itemData.id ? "border-purple-400 bg-gray-200 dark:bg-gray-500" : "border-light-100 bg-light-300 dark:border-gray-200 dark:bg-gray-300"}`}
      tabIndex={0}
      onClick={() => setActiveIndex(itemData.id)}
    >
      <div>
        <h4
          className={`text-lg font-bold ${activeIndex === itemData.id ? "text-white" : ""}`}
        >
          {itemData.title}
        </h4>
        <p className="text-gray-50">{itemData.description}</p>
      </div>
      <div className="flex h-[32px] w-[32px] min-w-[32px] items-center justify-center rounded-full bg-light-300 dark:bg-gray-300">
        <itemData.Icon />
      </div>
    </div>
  );
}
