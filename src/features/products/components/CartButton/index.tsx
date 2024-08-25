"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";
import { useCart } from "../../contexts/CartContext";

interface IProps {
  className?: string;
}

export function CartButton({ className }: IProps) {
  const { products } = useCart();
  const router = useRouter();

  const amount = products.reduce(
    (currentValue, item) => item.amount + currentValue,
    0
  );

  return (
    <button
      onClick={() => router.push(routes.CART)}
      className={`relative rounded-md border border-gray-300 bg-white p-2 dark:bg-gray-500 ${className}`}
    >
      <AiOutlineShoppingCart size={18} />
      {amount > 0 && (
        <span className="absolute right-[-5px] top-[60%] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-purple-400 p-[2px] text-xs text-white">
          {amount}
        </span>
      )}
    </button>
  );
}
