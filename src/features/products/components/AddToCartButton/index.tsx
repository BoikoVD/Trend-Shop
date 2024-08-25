"use client";
import Button from "@/components/UI/Button/Button";
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

  return (
    <Button
      onClick={() => addProductToCart(product)}
      className={className}
      size={size}
    >
      Add To Cart
    </Button>
  );
}
