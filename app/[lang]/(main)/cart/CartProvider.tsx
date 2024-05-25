"use client";

import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import PropTypes from "prop-types";
import { addToCart, removeFromCart } from "./services";
import { IAddToCart, IAddToCartResponseResult } from "./types";
import { showSuccesAlert } from "@/lib/utils/helpers";

interface ICartState {
  products: number;
  quantity: number;
  price: string;
}

const CartContext = createContext({
  cart: { products: 0, quantity: 0, price: "" },
  addProductToCart: (v: IAddToCart): Promise<boolean> => Promise.resolve(false),
  removeProductFromCart: (sku: string): Promise<boolean> =>
    Promise.resolve(false),
  setCart: (value: React.SetStateAction<ICartState>) => {},
  loading: false,
});

const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<ICartState>({
    products: 0,
    quantity: 0,
    price: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const addProductToCart = async (values: IAddToCart): Promise<boolean> => {
    setLoading(true);
    const res = await addToCart(values);
    setLoading(false);
    if (res.success) {
      const { total_prices, total_products, total_quantities } =
        res.results as IAddToCartResponseResult;
      const newCartValue = {
        price: total_prices,
        quantity: total_quantities,
        products: total_products,
      };
      setCart({ ...newCartValue });
    }
    return res.success;
  };

  const removeProductFromCart = async (sku: string): Promise<boolean> => {
    setLoading(true);
    const res = await removeFromCart(sku);
    setLoading(false);
    if (res.success) {
      const { total_prices, total_products, total_quantities } =
        res.results as IAddToCartResponseResult;
      const newCartValue = {
        price: total_prices,
        quantity: total_quantities,
        products: total_products,
      };
      setCart({ ...newCartValue });
      showSuccesAlert((res.results as any).message, "deleted successfully");
    }
    return res.success;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        setCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// CartProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export { CartContext, CartProvider };
