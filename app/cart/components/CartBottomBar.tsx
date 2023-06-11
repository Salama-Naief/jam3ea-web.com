'use client';

import { useContext, useEffect } from 'react';
import { CartContext } from '../CartProvider';
import useHttpClient from '@/lib/hooks/useHttpClient';
import { IGetCartResponseResult } from '../types';
import { getCart } from '../services';
import Link from 'next/link';
import webRoutes from '@/lib/utils/webRoutes';

export default function CartBottomBar() {
  const { sendRequest, results, errors } =
    useHttpClient<IGetCartResponseResult>();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const status = await sendRequest(getCart());
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (results && !errors) {
      setCart({
        price: results.total,
        quantity: results.total_quantities,
        products: results.data.length,
      });
      console.log('SUCCESS: ', cart, results);
    } else {
      console.log('FAILED: ', results, errors);
    }
  }, [results, errors]);

  useEffect(() => {
    console.log('CART CHANGED: ', cart);
  }, [cart]);

  return (
    <>
      {cart.products > 0 && (
        <div className="fixed z-[60] w-[calc(100%_-_2rem)] h-12 max-w-lg -translate-x-1/2 bg-success rounded-full bottom-4 left-1/2">
          <div className="h-full max-w-lg mx-auto">
            <div className="flex justify-between px-5 items-center gap-3 h-full">
              <div className="text-white font-bold">KD {cart.price}</div>
              <div className="flex gap-3">
                <Link
                  href={webRoutes.cart}
                  className="text-white"
                  type="button"
                >
                  View Cart
                </Link>
                <div className="text-white font-bold">{cart.quantity}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
