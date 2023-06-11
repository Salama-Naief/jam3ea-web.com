'use client';

import React, { useContext, useState } from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ICartStatus } from '@/product/types';
import { CartContext } from '../CartProvider';

interface IAddToCartButtonProps {
  sku: string;
  cartsStatus: ICartStatus;
  maxQantity: number;
  isAvailable: boolean;
}

export default function AddToCartButton({
  sku,
  cartsStatus,
  maxQantity,
  isAvailable,
}: IAddToCartButtonProps) {
  const [count, setCount] = useState(cartsStatus.quantity);
  const { addProductToCart } = useContext(CartContext);

  const handleIncrement = async () => {
    if (isAvailable && (maxQantity > 0 ? count < maxQantity : true)) {
      const status = await addProductToCart({ sku, quantity: count + 1 });
      if (status) {
        setCount((prevCount) => prevCount + 1);
      }
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex items-center ml-auto gap-1">
      <button
        className="text-primary shadow w-5 h-5 flex items-center justify-center p-0 rounded-lg"
        onClick={handleIncrement}
      >
        <PlusIcon className="w-4 h-4" />
        {/* {count < maxQantity && <PlusIcon className="w-4 h-4" />}
        {count >= maxQantity && (
          <div
            className="text-danger w-4 h-4 overflow-hidden"
            style={{ fontSize: '5px' }}
          >
            Max
          </div>
        )} */}
      </button>
      {count && count > 0 ? (
        <>
          <span className="w-5 h-5 flex items-center justify-center text-sm">
            {count}
          </span>
          <button
            className="text-danger shadow w-5 h-5 flex items-center justify-center p-0 rounded-lg ml-auto"
            onClick={handleDecrement}
          >
            {count === 1 ? (
              <TrashIcon className="w-4 h-4" />
            ) : (
              <MinusIcon className="w-4 h-4" />
            )}
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
