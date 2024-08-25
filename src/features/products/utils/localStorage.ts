import { CartItem } from "../schemas/schemas";

const CART_LOCAL_STORAGE_KEY = "CART_";

export function saveCartData(cartData: CartItem[], userId: number): void {
  localStorage.setItem(
    CART_LOCAL_STORAGE_KEY + userId,
    JSON.stringify(cartData)
  );
}

export function getCartData(userId: number): CartItem[] | null {
  const cartData = localStorage.getItem(CART_LOCAL_STORAGE_KEY + userId);
  return cartData ? JSON.parse(cartData) : null;
}

export function removeCartData(userId: number): void {
  localStorage.removeItem(CART_LOCAL_STORAGE_KEY + userId);
}
