"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import {
  addToCart,
  removeFromCart,
  getCart,
  getAllCarts,
  clearCart,
} from "./services";
import {
  IAddToCart,
  IAddToCartResponseResult,
  IGetCartResponseResult,
} from "./types";
import { showSuccesAlert } from "@/lib/utils/helpers";

interface ICartItem {
  _id: string;
  name: string;
  logo: string;
  picture: string;
  cart: {
    total: string;
    quantity: number;
    products: number;
    points: number;
    cart_products: {
      [key: string]: {
        quantity: number;
        options: Array<any>;
      };
    };
  };
}

interface ICartContext {
  cart: ICartItem[];
  addProductToCart: (values: IAddToCart) => Promise<boolean>;
  removeProductFromCart: (sku: string) => Promise<boolean>;
  setCart: Dispatch<SetStateAction<ICartItem[]>>;
  clearCartBySupplierId: (supplier_id?: string) => Promise<boolean>;
  loading: boolean;
  getCartData: () => Promise<void>;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const addProductToCart = async (values: IAddToCart): Promise<any> => {
    setLoading(true);
    try {
      const res: any = await addToCart(values);
      if (res.success) {
        const results = res.results;

        const dynamicKey = Object.keys(results).find(
          (key) => key !== "message"
        );
        const getAllCart: any = await getAllCarts();
        if (getAllCart.success && getAllCart?.results) {
          if (dynamicKey && getAllCart) {
            const {
              total_prices,
              total_products,
              total_quantities,
              total_points,
            } = results[dynamicKey];

            const index = getAllCart?.results.findIndex(
              (item: any) => item._id === dynamicKey
            );
            const getCart = getAllCart?.results[index];
            console.log("cart get add ", getCart);
            console.log(
              "cart getCart.cart.total_quantities ",
              getCart.cart.total_quantities
            );
            console.log(" cart add ", results[dynamicKey]);
            if (index >= 0) {
              const newCartItem: any = {
                _id: dynamicKey,
                name: getCart.name, // Add logic to fetch the name if necessary
                logo: getCart.logo, // Add logic to fetch the logo if necessary
                picture: getCart.picture, // Add logic to fetch the picture if necessary
                cart: {
                  total: Number(getCart.cart.total),
                  quantity: Number(getCart.cart.quantity),
                  products: Number(getCart.cart.products),
                  points: Number(getCart.cart.points),
                  cart_products: getCart.cart.cart_products,
                },
              };
              setCart((prevCart) => {
                const index = getAllCart?.results.findIndex(
                  (item: any) => item._id === dynamicKey
                );
                if (index >= 0) {
                  const updatedCart = [...getAllCart?.results];
                  updatedCart[index] = newCartItem;
                  return updatedCart;
                } else {
                  return [...prevCart, newCartItem];
                }
              });
            }
          }
        }
        return res.success || false;
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const removeProductFromCart = async (sku: string): Promise<boolean> => {
    setLoading(true);
    try {
      const res: any = await removeFromCart(sku);
      if (res.success) {
        const results = res.results;
        const dynamicKey = Object.keys(results).find(
          (key) => key !== "message"
        );
        const getAllCart: any = await getAllCarts();

        if (dynamicKey && getAllCart) {
          const {
            total_prices,
            total_products,
            total_quantities,
            total_points,
          } = results[dynamicKey];

          const index = getAllCart?.results.findIndex(
            (item: any) => item._id === dynamicKey
          );
          const getCart = getAllCart?.results[index];

          if (index >= 0 && getCart) {
            const newCartItem: ICartItem = {
              _id: dynamicKey,
              name: getCart.name,
              logo: getCart.logo,
              picture: getCart.picture,
              cart: {
                total: total_prices,
                quantity: total_quantities,
                products: total_products,
                points: total_points,
                cart_products: results[dynamicKey].cart_products,
              },
            };

            setCart((prevCart) => {
              const existingCartIndex = prevCart.findIndex(
                (item) => item._id === dynamicKey
              );
              if (existingCartIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingCartIndex] = newCartItem;
                return updatedCart;
              } else {
                return [...prevCart, newCartItem];
              }
            });
          } else {
            const newCartItem: ICartItem = {
              _id: dynamicKey,
              name: "", // Fallback in case name is not found
              logo: "", // Fallback in case logo is not found
              picture: "", // Fallback in case picture is not found
              cart: {
                total: total_prices,
                quantity: total_quantities,
                products: total_products,
                points: total_points,
                cart_products: results[dynamicKey].cart_products,
              },
            };

            setCart((prevCart) => [...prevCart, newCartItem]);
          }

          showSuccesAlert(results.message, "deleted successfully");
        }
      }
      return res.success;
    } catch (error) {
      console.error("Error removing product from cart:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const clearCartBySupplierId = async (supplier_id?: string) => {
    const status = await clearCart(supplier_id);
    console.log("status clear cart", status);
    const res: any = await getAllCarts();
    if (res.success) {
      setCart(res.results);
    }
    return true;
  };
  const getCartData = async (): Promise<void> => {
    setLoading(true);
    try {
      const res: any = await getAllCarts();
      if (res.success) {
        setCart(res.results);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        setCart,
        loading,
        getCartData,
        clearCartBySupplierId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart, CartContext };
