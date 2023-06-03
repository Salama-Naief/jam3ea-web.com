'use client';

import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  cartCount: 0,
  totalPrice: 0,
  setCartDetails: (_count: number, _total: number) => {},
});

export default function CartCntextProvider({ children }: any) {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const setCartDetails = (count: number, total: number) => {
    setCartCount(count);
    setTotalPrice(total);
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        totalPrice,
        setCartDetails,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
