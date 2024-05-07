"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IProduct } from "../../product/types";
import { BsDash, BsPlus } from "react-icons/bs";

interface Props {
  product: IProduct;
}
function CartProductCard({ product }: Props) {
  const [quantity, setQuantity] = useState<number>(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    const qty = quantity > 0 ? quantity - 1 : 0;
    setQuantity(qty);
  };
  return (
    <div className="grid grid-cols-4 gap-2 w-full p-4 rounded bg-white my-4 shadow">
      <div className=" col-span-1 flex items-center justify-center p-2 shadow rounded">
        <div className="relative   w-full aspect-square max-h-36">
          <Image src={product.picture} fill alt={product.name} />
        </div>
      </div>
      <div className="col-span-3 py-2 flex flex-col">
        <div className="flex-grow">
          <h3 className="font-semibold mb-2">{product.name}</h3>
          <div className="">
            <span className="font-semibold text-secondary">Price :</span>
            <span className="font-semibold">{product.price}</span>
          </div>
          <div className="">
            <span className="font-semibold text-secondary">Total :</span>
            <span className="font-semibold">{product.price}</span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex gap-2">
            <button
              disabled={quantity === 0}
              onClick={handleDecrease}
              className="p-1 shadow rounded text-primary"
            >
              <BsPlus size={22} />
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrease}
              className="p-1 shadow rounded text-primary"
            >
              <BsDash size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
