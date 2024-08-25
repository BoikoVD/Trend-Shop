"use client";

import Button from "@/components/UI/Button/Button";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";
import { useCart } from "../../contexts/CartContext";
import { CartProductItem } from "./parts/CartProductItem";

export function CartPage() {
  const { products, totalPrice, removeProductFromCart, resetCart } = useCart();
  const router = useRouter();

  return (
    <main className="container flex min-h-screen items-center justify-center">
      {products.length > 0 ? (
        <div className="flex w-full flex-col gap-10 rounded-xl border border-gray-300 px-3 py-5 dark:bg-gray-400 sm:px-5">
          <h1 className="text-3xl">Your Order:</h1>
          <ul className="flex flex-col gap-6">
            {products.map(product => (
              <CartProductItem
                cartItem={product}
                removeProduct={removeProductFromCart}
                key={product.productData.id}
              />
            ))}
          </ul>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-300 pt-6 sm:flex-row">
            <div className="flex gap-2">
              <h2 className="text-xl">Total Price:</h2>
              <p className="text-xl">{`$${totalPrice}`}</p>
            </div>
            <Button onClick={() => resetCart()}>Place Order</Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10 rounded-xl border border-gray-300 px-10 py-10 dark:bg-gray-400 sm:px-20">
          <p className="text-center text-xl">Your cart is empty</p>
          <Button onClick={() => router.push(routes.PRODUCTS)}>
            Go Shopping!
          </Button>
        </div>
      )}
    </main>
  );
}
