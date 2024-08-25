import { IconType } from "react-icons";

interface IProps {
  itemData: {
    Icon: IconType;
    title: string;
    description: string;
  };
}

export default function AdvantageItem({ itemData }: IProps) {
  return (
    <div className="relative flex flex-col items-center rounded bg-light-300 p-6 shadow-xl dark:bg-gray-300">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-purple-400 text-white">
        <itemData.Icon size={26} />
      </div>
      <h4 className="mb-1 mt-2 text-xl font-bold leading-snug tracking-tight">
        {itemData.title}
      </h4>
      <p className="text-center text-gray-50">{itemData.description}</p>
    </div>
  );
}
