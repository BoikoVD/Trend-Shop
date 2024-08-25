"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@/features/auth";
import { CartItem, Product } from "../schemas/schemas";
import * as cartLocalStorage from "../utils/localStorage";

interface ICartContext {
  products: CartItem[];
  totalPrice: number;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
  resetCart: () => void;
}

const CartContext = createContext<ICartContext | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { user } = useUser();

  const calculateTotalPrice = (newCart: CartItem[]): number => {
    return newCart.reduce(
      (currentValue, item) =>
        item.amount * item.productData.price + currentValue,
      0
    );
  };

  const addProductToCart = (product: Product) => {
    if (user) {
      let newProducts: CartItem[] = [];
      if (products.find(p => p.productData.id === product.id)) {
        newProducts = products.map(p => {
          if (p.productData.id === product.id) {
            return { productData: product, amount: p.amount + 1 };
          } else {
            return p;
          }
        });
      } else {
        newProducts = [...products, { productData: product, amount: 1 }];
      }

      const newTotalPrice = calculateTotalPrice(newProducts);

      setProducts(newProducts);
      setTotalPrice(newTotalPrice);
      cartLocalStorage.saveCartData(newProducts, user.id);
    }
  };

  const removeProductFromCart = (productId: number) => {
    if (user) {
      let newProducts: CartItem[] = [];
      if (products.find(p => p.productData.id === productId)) {
        products.forEach(p => {
          if (p.productData.id === productId) {
            if (p.amount > 1) {
              newProducts.push({
                productData: p.productData,
                amount: p.amount - 1
              });
            }
          } else {
            newProducts.push(p);
          }
        });
      } else {
        newProducts = [...products];
      }

      const newTotalPrice = calculateTotalPrice(newProducts);

      setProducts(newProducts);
      setTotalPrice(newTotalPrice);
      cartLocalStorage.saveCartData(newProducts, user.id);
    }
  };

  const resetCart = () => {
    if (user) {
      setProducts([]);
      setTotalPrice(0);
      cartLocalStorage.removeCartData(user.id);
    }
  };

  useEffect(() => {
    if (user) {
      const cartData = cartLocalStorage.getCartData(user.id);
      if (cartData) {
        const totalPrice = calculateTotalPrice(cartData);
        setProducts(cartData);
        setTotalPrice(totalPrice);
      } else {
        resetCart();
      }
    }
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        products,
        totalPrice,
        addProductToCart,
        removeProductFromCart,
        resetCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCart = (): ICartContext => {
  const cartData = useContext(CartContext);
  if (!cartData) {
    throw new Error("Cart context is not defined");
  }
  return cartData;
};

export { CartProvider, useCart };
