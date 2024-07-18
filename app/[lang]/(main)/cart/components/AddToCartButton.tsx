"use client";

import React, { useContext, useMemo, useState } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { BsPlus, BsDash } from "react-icons/bs";
import { ICartStatus, IVariant } from "@/module/(main)/product/types";
import { CartContext, useCart } from "../CartProvider";
import { AuthContext } from "@/lib/providers/AuthProvider";
import Button from "@/components/Button";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import Variants from "@/module/(main)/product/components/Variants";
import { usePathname, useRouter } from "next/navigation";
import Counter from "../../../../components/Counter/Counter";
import { LoadingIcon } from "@/components/Icons";
import { showErrorAlert } from "@/lib/utils/helpers";

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
  const [loadingIncrease, setLoadingIncrease] = useState<boolean>(false);
  const [loadingDecrease, setLoadingDecrease] = useState<boolean>(false);
  const { addProductToCart, removeProductFromCart, loading } = useCart();
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
        setLoadingIncrease(true);
        const status = await addProductToCart({
          sku,
          quantity: type === "normal" ? count : count + 1,
        });
        console.log("status", status);
        if (status) {
          setCount(type === "normal" ? count : count + 1);

          if (pathName.includes(webRoutes.cart)) {
            router.refresh();
          }
        }
        setLoadingIncrease(false);
      } else {
        showErrorAlert("quantity not avalable");
      }
    } catch (err) {
      console.log("ERR: ", err);
    }
  };

  const handleDecrement = async () => {
    if (count > 1) {
      setLoadingDecrease(true);
      const status = await addProductToCart({ sku, quantity: count - 1 });
      if (status) {
        setCount((prevCount) => prevCount - 1);
        if (pathName.includes(webRoutes.cart)) {
          router.refresh();
        }
      }
      setLoadingDecrease(false);
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

  const Counte = useMemo(() => <Counter count={count} />, [count]);

  if (normalBtn) {
    return (
      <>
        {/* {count > 0 ? ( */}
        <div className="h-12 px-2 md:px-4 rounded-full mb-5 ">
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
            </div>
          </div>
        </div>
        <Button
          loading={loading}
          disabled={hasVariant && !sku.includes("-")}
          onClick={() => handleIncrement("normal")}
          className="w-full"
        >
          <div className="font-bold text-lg">{translate("add_to_cart")}</div>
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
          {loadingIncrease ? (
            <div className="flex items-center justify-center p-1">
              <LoadingIcon />
            </div>
          ) : (
            <BsPlus size={28} />
          )}
        </button>
      )}
      <>
        <div className=" text-center text-sm w-full">{Counte}</div>
        <button
          disabled={count <= 0}
          className="text-danger bg-gray-100 shadow flex items-center justify-center rounded-full ml-auto"
          onClick={handleDecrement}
          type="button"
        >
          {loadingDecrease ? (
            <div className="flex items-center justify-center p-1">
              <LoadingIcon />
            </div>
          ) : (
            <BsDash size={28} />
          )}
        </button>
      </>
    </div>
  );
}
