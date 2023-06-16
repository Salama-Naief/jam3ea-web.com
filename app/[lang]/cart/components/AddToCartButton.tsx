'use client';

import React, { useContext, useState } from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ICartStatus } from '@/module/product/types';
import { CartContext } from '../CartProvider';
import { AuthContext } from '@/lib/providers/AuthProvider';
import Button from '@/components/Button';

interface IAddToCartButtonProps {
  sku: string;
  cartsStatus: ICartStatus;
  maxQantity: number;
  isAvailable: boolean;
  normalBtn?: boolean;
}

export default function AddToCartButton({
  sku,
  cartsStatus,
  maxQantity,
  isAvailable,
  normalBtn = false,
}: IAddToCartButtonProps) {
  const [count, setCount] = useState(cartsStatus.quantity);
  const { addProductToCart, removeProductFromCart, loading } =
    useContext(CartContext);
  const { translate } = useContext(AuthContext);

  const handleIncrement = async () => {
    try {
      if (
        isAvailable != false &&
        (maxQantity > 0 ? count < maxQantity : true)
      ) {
        const status = await addProductToCart({ sku, quantity: count + 1 });
        if (status) {
          setCount((prevCount) => prevCount + 1);
        }
      }
    } catch (err) {
      console.log('ERR: ', err);
    }
  };

  const handleDecrement = async () => {
    if (count > 1) {
      const status = await addProductToCart({ sku, quantity: count - 1 });
      if (status) {
        setCount((prevCount) => prevCount - 1);
      }
    } else {
      const status = await removeProductFromCart(sku);
      if (status) {
        setCount(0);
      }
    }
  };

  if (normalBtn) {
    return (
      <Button loading={loading} onClick={handleIncrement}>
        {translate('add_to_cart')}
      </Button>
    );
  }

  return (
    <div className="flex items-center ml-auto gap-1">
      <button
        className="text-primary shadow w-5 h-5 flex items-center justify-center p-0 rounded-lg"
        onClick={handleIncrement}
      >
        {/* {maxQantity > 0 ? (
          count < maxQantity ? (
            <PlusIcon className="w-4 h-4" />
          ) : (
            <div
              className="text-danger w-4 h-4 overflow-hidden"
              style={{ fontSize: '5px' }}
            >
              {translate('max')}
            </div>
          )
        ) : (
          <PlusIcon className="w-4 h-4" />
        )} */}
        <PlusIcon className="w-4 h-4" />
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
