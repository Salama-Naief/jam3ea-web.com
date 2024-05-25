"use client";

import React, { useContext, useState } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { BsPlus, BsDash } from "react-icons/bs";
import { ICartStatus, IVariant } from "@/module/(main)/product/types";
import { CartContext } from "../CartProvider";
import { AuthContext } from "@/lib/providers/AuthProvider";
import Button from "@/components/Button";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import Variants from "@/module/(main)/product/components/Variants";
import { usePathname, useRouter } from "next/navigation";
import Counter from "../../../../components/Counter/Counter";

interface IAddToCartButtonProps {
  sku: string;
  cartsStatus: ICartStatus;
  maxQantity: number;
  isAvailable: boolean;
  normalBtn?: boolean;
  hasVariant?: boolean;
  variants?: IVariant[];
}

export default function AddToCartButton({
  sku: defaultSku,
  cartsStatus,
  maxQantity,
  isAvailable,
  hasVariant,
  normalBtn = false,
  variants,
}: IAddToCartButtonProps) {
  const [count, setCount] = useState(
    cartsStatus && cartsStatus.quantity ? cartsStatus.quantity : 0
  );
  const { addProductToCart, removeProductFromCart, loading } =
    useContext(CartContext);
  const { translate } = useContext(AuthContext);
  const [sku, setSku] = useState(defaultSku);
  const router = useRouter();
  const pathName = usePathname();
  const homeRoute = pathName.split("/").filter((r) => r).length;

  const handleIncrement = async (type: "normal" | "increase" = "increase") => {
    try {
      if (
        isAvailable != false &&
        (maxQantity > 0 ? count < maxQantity : true)
      ) {
        const status = await addProductToCart({
          sku,
          quantity: type === "normal" ? count : count + 1,
        });
        if (status) {
          setCount((prevCount) => ("normal" ? prevCount : prevCount + 1));

          if (pathName.includes(webRoutes.cart)) {
            router.refresh();
          }
        }
      }
    } catch (err) {
      console.log("ERR: ", err);
    }
  };

  const handleDecrement = async () => {
    if (count > 1) {
      const status = await addProductToCart({ sku, quantity: count - 1 });
      if (status) {
        setCount((prevCount) => prevCount - 1);
        if (pathName.includes(webRoutes.cart)) {
          router.refresh();
        }
      }
    } else {
      const status = await removeProductFromCart(sku);
      if (status) {
        setCount(0);
        if (pathName.includes(webRoutes.cart)) {
          router.refresh();
        }
      }
    }
  };

  if (normalBtn) {
    return (
      <>
        {/* {count > 0 ? ( */}
        <div className="h-12 px-4 rounded-full mb-5 ">
          <div className="h-full max-w-lg mx-auto flex items-center justify-center">
            <div className="flex items-center justify-between gap-10 w-full md:w-1/2 lg:w-1/4">
              <button
                type="button"
                className="text-white bg-primary  p-1 rounded-full flex items-center justify-center "
                onClick={() => setCount(count + 1)}
              >
                <BsPlus size={28} />
              </button>
              <Counter count={count} />
              <button
                type="button"
                className="text-white p-1 bg-slate-500 flex items-center justify-center rounded-full"
                onClick={() => setCount(count - 1)}
              >
                <BsDash size={28} />
              </button>
              {/* {count && count >= 1 ? (
                  <>
                    <span className="w-5 h-5 flex items-center justify-center text-md text-white ">
                      {count}
                    </span>
                    <button
                      type="button"
                      className="text-white w-8 h-8 flex items-center justify-center p-0 rounded-lg ml-auto"
                      onClick={handleDecrement}
                    >
                      <TrashIcon className="w-8 h-8" />
                    </button>
                  </>
                ) : (
                  ""
                )} */}
            </div>
          </div>
        </div>
        {/* ) : ( */}
        <Button
          loading={loading}
          disabled={hasVariant && !sku.includes("-")}
          onClick={() => handleIncrement("normal")}
          className="w-full"
        >
          {translate("add_to_cart")}
        </Button>
        {/* )} */}

        {variants && (
          <Variants
            variants={variants}
            onSelect={(sku: string) => {
              setSku(sku);
            }}
          />
        )}
      </>
    );
  }

  return (
    <div className="flex justify-between items-center gap-1 mt-1   w-full">
      {hasVariant ? (
        <Link
          href={webRoutes.product(sku)}
          className="text-white bg-primary shadow w-5 h-5 flex items-center justify-center p-0 rounded-lg"
        >
          <PlusIcon className="w-4 h-4" />
        </Link>
      ) : (
        <button
          className="text-white bg-primary shadow  flex items-center justify-center rounded-full"
          onClick={() => handleIncrement()}
          type="button"
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
          <BsPlus size={28} />
        </button>
      )}
      {/* {count && count > 0 ? ( */}
      <>
        <div className=" text-center text-sm w-full">
          <Counter count={count} />
        </div>
        <button
          disabled={count >= 0}
          className="text-danger bg-gray-100 shadow flex items-center justify-center rounded-full ml-auto"
          onClick={handleDecrement}
          type="button"
        >
          {/* {count === 1 ? (
              <TrashIcon className="w-4 h-4" />
            ) : ( */}
          <BsDash size={28} />
          {/* )} */}
        </button>
      </>
      {/* ) : (
        ""
      )} */}
    </div>
  );
}
