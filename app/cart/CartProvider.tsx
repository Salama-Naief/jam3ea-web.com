'use client';

import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { addToCart, getCart } from './services';
import {
  IAddToCart,
  IAddToCartResponseResult,
  IGetCartResponseResult,
} from './types';
import { IResponse } from '@/lib/types';
import useHttpClient from '@/lib/hooks/useHttpClient';

interface ICartState {
  products: number;
  quantity: number;
  price: string;
}

const CartContext = createContext({
  cart: { products: 0, quantity: 0, price: '' },
  addProductToCart: (v: IAddToCart): Promise<boolean> => Promise.resolve(false),
  setCart: (value: React.SetStateAction<ICartState>) => {},
});

const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<ICartState>({
    products: 0,
    quantity: 0,
    price: '',
  });

  const addProductToCart = async (values: IAddToCart): Promise<boolean> => {
    const res = await addToCart(values);
    console.log('RES: ', res);
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

  /* const value = useMemo(
    () => ({
      cart,
      addProductToCart,
      setCart,
    }),
    []
  ); */

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider };
