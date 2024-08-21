import { AiOutlineSun } from "react-icons/ai";

export default function SwitchThemeButton({
  className
}: {
  className?: string;
}) {
  return (
    <button
      className={`rounded-md border border-gray-300 p-2 text-gray-400 dark:bg-gray-500 dark:text-white ${className}`}
    >
      <AiOutlineSun size={18} />
    </button>
  );
}
