"use client";
import Button from "@/components/UI/Button/Button";
import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useUser } from "@/features/auth";
import { useCart } from "../../contexts/CartContext";
import { Product } from "../../schemas/schemas";

interface IProps {
  product: Product;
  size?: "small" | "medium";
  className?: string;
}

export function AddToCartButton({
  product,
  size = "medium",
  className
}: IProps) {
  const { addProductToCart } = useCart();
  const { user } = useUser();
  const router = useRouter();

  const addToCartHandler = () => {
    if (user) {
      addProductToCart(product);
    } else {
      router.push(routes.LOGIN);
    }
  };

  return (
    <Button onClick={addToCartHandler} className={className} size={size}>
      Add To Cart
    </Button>
  );
}
